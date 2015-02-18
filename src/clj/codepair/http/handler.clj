(ns codepair.http.handler
  (:require [clojure.java.io :as io]
            [clojure.pprint :as pp]
            [compojure.core :refer :all]
            [compojure.handler :as handler]
            [compojure.route :as route]
            [ring.util.response :as ring-resp]
            [ring.middleware.session :as session]
            [ring.middleware.session.cookie :refer :all]
            [taoensso.timbre :as timbre]

            [bkell.config :as config]
            [codepair.shell :as sh]
            [codepair.http.aauth :as au]
            [codepair.http.charge :as ch]
            [codepair.http.domain :as hd]))



(defn get-datastore []
  (-> sh/system :spittoon :db))

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

     (POST "/charge" [:as req]

           (timbre/debug (str "/charge req[" (with-out-str (pp/pprint req)) "]"))
           (let [authentication-data (ch/charge req)
                 session (:session req)]

             (-> (ring-resp/response (slurp (io/resource "public/landing.html")))
                 (ring-resp/content-type "text/html")
                 (assoc :session (assoc session :authentication-data authentication-data)))))

     (POST "/verify-assertion" [:as req]

           (timbre/debug (str "/verify-assertion req[" (with-out-str (pp/pprint req)) "]"))
           (let [ds (get-datastore)]
             (au/verify-assertion ds req)))


     ;; Availabilities / Tags
     (POST "/add-availability" [:as req]

           (timbre/debug (str "/add-availability req[" (with-out-str (pp/pprint req)) "]"))
           (let [ds (get-datastore)
                result (hd/add-availability ds req)]

            (-> (ring-resp/response (pr-str result))
                (ring-resp/content-type "application/edn"))))

     (GET "/find-availability" [:as req]

           (timbre/debug (str "/find-availability req[" (with-out-str (pp/pprint req)) "]"))
           (let [ds (get-datastore)
                result (hd/find-availability ds req)]

            (-> (ring-resp/response (pr-str result))
                (ring-resp/content-type "application/edn"))))

     (POST "/update-availability" [:as req]

           (timbre/debug (str "/update-availability req[" (with-out-str (pp/pprint req)) "]"))
           (let [ds (get-datastore)
                result (hd/update-availability ds req)]

            (-> (ring-resp/response (pr-str result))
                (ring-resp/content-type "application/edn"))))


     ;; Session
     (POST "/add-session" [:as req]

           (timbre/debug (str "/add-session req[" (with-out-str (pp/pprint req)) "]"))
           (let [ds (get-datastore)
                result (hd/add-session ds req)]

            (-> (ring-resp/response (pr-str result))
                (ring-resp/content-type "application/edn"))))

     (GET "/find-session" [:as req]

           (timbre/debug (str "/find-session req[" (with-out-str (pp/pprint req)) "]"))
           (let [ds (get-datastore)
                result (hd/find-session ds req)]

            (-> (ring-resp/response (pr-str result))
                (ring-resp/content-type "application/edn"))))

     (POST "/update-session" [:as req]

           (timbre/debug (str "/update-session req[" (with-out-str (pp/pprint req)) "]"))
           (let [ds (get-datastore)
                result (hd/update-session ds req)]

            (-> (ring-resp/response (pr-str result))
                (ring-resp/content-type "application/edn"))))


     ;; Listings
     (GET "/list-availabilities" [:as req]

          (timbre/debug (str "/list-availabilities req[" (with-out-str (pp/pprint req)) "]"))
          (let [ds (get-datastore)
                result (hd/list-availabilities ds req)]

            (-> (ring-resp/response (pr-str result))
                (ring-resp/content-type "application/edn"))))

     (GET "/list-tags" [:as req]

          (timbre/debug (str "/list-tags req[" (with-out-str (pp/pprint req)) "]"))
          (let [ds (get-datastore)
                result (hd/list-tags ds req)]

            (-> (ring-resp/response (pr-str result))
                (ring-resp/content-type "application/edn"))))

     (GET "/list-sessions" [:as req]

          (timbre/debug (str "/list-sessions req[" (with-out-str (pp/pprint req)) "]"))
          (let [ds (get-datastore)
                result (hd/list-sessions ds req)]

            (-> (ring-resp/response (pr-str result))
                (ring-resp/content-type "application/edn"))))

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
