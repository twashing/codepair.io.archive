(ns codepair.handler
  (:require [clojure.java.io :as io]
            [clojure.pprint :as pp]
            [compojure.core :refer :all]
            [compojure.handler :as handler]
            [compojure.route :as route]
            [environ.core :refer [env]]
            [noisesmith.groundhog :as gh]
            [ring.middleware.session :as session]
            [ring.middleware.session.cookie :refer :all]
            [ring.middleware.session-timeout :as timeout]
            [ring.util.response :as ring-resp]
            [slingshot.slingshot :refer [throw+ try+]]
            [taoensso.timbre :as timbre]))


(defn add-user-ifnil [username]

  (let [ds (-> bkell/system :spittoon :db)
        uresult (try+ (bku/add-user ds username "CA" "CDN")
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

(defroutes app-routes

  (GET "/" [:as req]

       (-> (ring-resp/response (slurp (io/resource "public/index.html")))
           (ring-resp/content-type "text/html")))

  (route/files "/")
  (route/resources "/")
  (route/not-found "Not Found"))


(def app
  (-> app-routes
      handler/site))
