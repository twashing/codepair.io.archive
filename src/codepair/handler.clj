(ns codepair.handler
  (:require [clojure.java.io :as io]
            [compojure.core :refer :all]
            [compojure.handler :as handler]
            [compojure.route :as route]
            [ring.util.response :as ring-resp]
            [bkell.config :as config]

            [codepair.shell :as sh]))


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

          (ring-resp/response (keys sh/system)))

     (route/files "/")
     (route/resources "/")
     (route/not-found "Not Found"))))


(gen-approutes (:dev (config/load-edn "config-codepair.edn")) true)

(def app
  (-> app-routes
      handler/site))
