(ns codepair.http.aauth
  (:require [clojure.pprint :as pp]
            [ring.util.response :as ring-resp]
            [slingshot.slingshot :refer [throw+ try+]]
            [taoensso.timbre :as timbre]
            [cheshire.core :as chesr]
            [clj-http.client :as client]
            [codepair.shell :as sh]
            [codepair.domain.user :as us]))

(defn add-user-ifnil [ds username]

  (let [uresult (try+ (us/add-user ds username)
                      (catch AssertionError e &throw-context))

        uresultF (if (:stack-trace uresult)

                   ;; Mirroring structure that's returned from a successful user creation
                   (do
                     (timbre/debug "NIL: user [" username "] already exists")
                     [{:system
                       {:groups
                        #{{:name (str "group-" username)
                           :users
                           #{{:username username
                              :account-level :free}}}}}}])

                   ;; Return structure that system generates
                   (do
                     (timbre/debug "SUCCESS: adding user [" username "]")
                     uresult))]
    uresultF))

(defn validate-request-against-session [session gname uname token]

  (let [vgroup (-> session :authentication-data :groupname)
        vuser (-> session :authentication-data :username)
        vtoken (-> session :authentication-data :token)

        stripe-id (-> session :authentication-data :stripe-customer-id)

        valid-hash (hash (str vgroup vuser vtoken stripe-id))
        input-hash (hash (str gname uname token stripe-id))]

    (= valid-hash input-hash)))

(defn verify-assertion [ds req]

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
        (let [uresult (add-user-ifnil ds persona-response-email)
              response-withuser (assoc persona-response :uresult uresult)
              groupname (-> response-withuser :uresult first :system :groups first :name)
              username (-> response-withuser :uresult first :system :groups first :users first :username)
              accountlevel (-> response-withuser :uresult first :system :groups first :users first :accountlevel)
              token (java.util.UUID/randomUUID)
              authentication-data {:groupname groupname
                                   :username username
                                   :accountlevel accountlevel
                                   :token token}
              responseF (-> (ring-resp/response (pr-str authentication-data))
                            (ring-resp/content-type "application/edn")
                            (assoc :session (assoc session :authentication-data
                                                   (assoc authentication-data
                                                     :stripe-customer-id "-INCOMPLETE-"))))]

          (timbre/debug (str "/verify-assertion responseF[" (with-out-str (pp/pprint responseF)) "]"))

          responseF))

      (-> (ring-resp/response (pr-str {:body {:status persona-response-status}}))
          (ring-resp/status 401)
          (ring-resp/content-type "application/edn")))))
