(ns codepair.handler
  (:require [clojure.java.io :as io]
            [compojure.core :refer :all]
            [compojure.handler :as handler]
            [compojure.route :as route]
            [ring.util.response :as ring-resp]))


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
