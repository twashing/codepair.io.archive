(ns codepair.handler
  (:require [clojure.java.io :as io]
            [compojure.core :refer :all]
            [compojure.handler :as handler]
            [compojure.route :as route]
            [ring.util.response :as ring-resp]
            [bkell.config :as config]

            [codepair.shell :as sh]))


#_(defn gen-approutes
  ([]
   (gen-approutes (:dev (config/load-edn "config-codepair.edn"))))

  ([env]

   (sh/start {:shell {}
              :spittoon {:env env
                         :recreate? false}})

   (defroutes app-routes

     (GET "/" [:as req]

          (-> (ring-resp/response (slurp (io/resource "public/index.html")))
              (ring-resp/content-type "text/html")))

     (GET "/foobar" [:as req]

          (ring-resp/response (keys sh/system)))

     (route/files "/")
     (route/resources "/")
     (route/not-found "Not Found"))))

#_(gen-approutes)


(defroutes app-routes

  (GET "/" [:as req]

       (-> (ring-resp/response (slurp (io/resource "public/index.html")))
           (ring-resp/content-type "text/html")))

  (GET "/foobar" [:as req]

       (ring-resp/response (keys sh/system)))

  (route/files "/")
  (route/resources "/")
  (route/not-found "Not Found"))

(def app
  (-> app-routes
      handler/site))
