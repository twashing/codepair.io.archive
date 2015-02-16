(ns codepair.handler
  (:require [clojure.java.io :as io]
            [clojure.pprint :as pp]
            [compojure.core :refer :all]
            [compojure.handler :as handler]
            [compojure.route :as route]
            [ring.util.response :as ring-resp]
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

     (GET "/foobar" [:as req]

          (timbre/debug (ring-resp/response (keys sh/system)))
          (ring-resp/response (keys sh/system)))

     (POST "/a" [:as req]
           (ring-resp/response (pr-str {:ok "ok"})))

     (POST "/b" [:as req]
           (-> (ring-resp/response (pr-str {:ok "ok"}))
               (ring-resp/content-type "application/edn")))

     (POST "/c" [:as req]
           (-> (ring-resp/response "ok")
               (ring-resp/content-type "text/html")))

     (POST "/d" [:as req]
           (ring-resp/response (chesr/generate-string {:ok "ok"})))

     (POST "/verify-assertion" [:as req]

           (timbre/debug (str "/verify-assertion req[" (with-out-str (pp/pprint req)) "]"))
           (let [session (:session req)
                 audience (get (:headers req) "origin")

                 ;;z (slurp (:body req))
                 ;;_ (timbre/debug (str "slurped body[" z "]"))

                 ;;body (read-string z)
                 ;;_ (timbre/debug (str "/verify-assertion body[" (with-out-str (pp/pprint body)) "]"))

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
                       response-withuser (assoc persona-response :uresult uresult)
                       ;;_ (timbre/debug (str "... session: " (with-out-str (pp/pprint session))))
                       ;;_ (timbre/debug (str "... response: " (with-out-str (pp/pprint persona-response))))
                       ;;_ (timbre/debug (str "... response-withuser: " (with-out-str (pp/pprint response-withuser))))
                       ]

                   (let [uresult (add-user-ifnil persona-response-email)
                         response-withuser (assoc persona-response :uresult uresult)]
                     (-> (ring-resp/response (pr-str response-withuser))
                         (ring-resp/content-type "application/edn")
                         (assoc :session (assoc session :response-withuser response-withuser))))))
               (-> (ring-resp/response (pr-str {:body {:status persona-response-status}}))
                   (ring-resp/status 401)
                   (ring-resp/content-type "application/edn")))))

     (route/files "/")
     (route/resources "/")
     (route/not-found "Not Found"))))

(gen-approutes (:dev (config/load-edn "config-codepair.edn")) true)

(def app
  (-> app-routes
      handler/site))
