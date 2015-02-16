(ns codepair.handler
  (:require [clojure.java.io :as io]
            [clojure.pprint :as pp]
            [compojure.core :refer :all]
            [compojure.handler :as handler]
            [compojure.route :as route]
            [ring.util.response :as ring-resp]
            [ring.middleware.session :as session]
            [ring.middleware.session.cookie :refer :all]
            [slingshot.slingshot :refer [throw+ try+]]
            [cheshire.core :as chesr]
            [clj-http.client :as client]
            [taoensso.timbre :as timbre]
            [bkell.config :as config]

            [codepair.shell :as sh]
            [codepair.domain.user :as us]))


(defn add-user-ifnil [username]

  (let [ds (-> sh/system :spittoon :db)
        uresult (try+ (us/add-user ds username)
                      (catch AssertionError e &throw-context))

        uresultF (if (:stack-trace uresult)

                   ;; Mirroring structure that's returned from a successful user creation
                   (do
                     (timbre/debug "NIL: user [" username "] already exists")
                     [{:system
                       {:groups
                        #{{:name (str "group-" username)
                           :users
                           #{{:username username}}}}}}])

                   ;; Return structure that system generates
                   (do
                     (timbre/debug "SUCCESS: adding user [" username "]")
                     uresult))]

    uresultF))

(defn gen-approutes
  ([]
   (gen-approutes (:dev (config/load-edn "config-codepair.edn"))))

  ([env]
   (gen-approutes env false))

  ([env recreate?]

   (sh/start {:shell {}
              :spittoon {:env env
                         :recreate? recreate?}})

   (defroutes app-routes

     (GET "/" [:as req]

          (-> (ring-resp/response (slurp (io/resource "public/index.html")))
              (ring-resp/content-type "text/html")))

     (GET "/session-status" [:as req]

          (timbre/debug (str "/session-status request[" (:session req) "]"))
          (ring-resp/response (pr-str (:session req))))

     (POST "/verify-assertion" [:as req]

           (timbre/debug (str "/verify-assertion req[" (with-out-str (pp/pprint req)) "]"))
           (let [session (:session req)
                 audience (get (:headers req) "origin")
                 assertion (:assertion (-> req :body slurp read-string))
                 persona-response (client/post "https://verifier.login.persona.org/verify"
                                               {:form-params {:assertion assertion
                                                              :audience audience}})
                 parsed-body (chesr/parse-string (-> persona-response :body))
                 persona-response-status (parsed-body "status")
                 persona-response-email (parsed-body "email")
                 session (if (nil? session) {} session)]

             (if (= "okay" persona-response-status)

               (do

                 ;; this will have the group-name and user-name
                 (let [uresult (add-user-ifnil persona-response-email)
                       response-withuser (assoc persona-response :uresult uresult)]

                   (let [uresult (add-user-ifnil persona-response-email)
                         response-withuser (assoc persona-response :uresult uresult)
                         groupname (-> response-withuser :uresult first :system :groups first :name)
                         username (-> response-withuser :uresult first :system :groups first :users first :username)
                         token (java.util.UUID/randomUUID)
                         authentication-data {:groupname groupname
                                              :username username
                                              :token token}
                         responseF (-> (ring-resp/response (pr-str response-withuser))
                                       (ring-resp/content-type "application/edn")
                                       (assoc :session (assoc session :authentication-data authentication-data)))]

                     (timbre/debug (str "/verify-assertion responseF[" (with-out-str (pp/pprint responseF)) "]"))

                     responseF)))

               (-> (ring-resp/response (pr-str {:body {:status persona-response-status}}))
                   (ring-resp/status 401)
                   (ring-resp/content-type "application/edn")))))

     (route/files "/")
     (route/resources "/")
     (route/not-found "Not Found"))))

(gen-approutes (:dev (config/load-edn "config-codepair.edn"))
               true)

(def app
  (-> app-routes
      handler/site
      (session/wrap-session {:cookie-attrs {:max-age 3600
                                            :secure true}})))