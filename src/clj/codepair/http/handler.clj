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


(defn gen-get-datastore [ds]
  (defn get-datastore []
    ds))

(defroutes app-routes

  (GET "/" [:as req]

       (-> (ring-resp/response (slurp (io/resource "public/index.html")))
           (ring-resp/content-type "text/html")))

  (GET "/session-status" [:as req]

       (timbre/info (str "/session-status request[" (:session req) "]"))
       (ring-resp/response (pr-str (:session req))))

  (GET "/user-data" [:as req]

       (timbre/info (str "/user-data req[" (with-out-str (pp/pprint req)) "]"))
       (ring-resp/response (pr-str (-> req :session :authentication-data))))

  (POST "/charge" [:as req]

        (timbre/info (str "/charge req[" (with-out-str (pp/pprint req)) "]"))
        (let [sk (-> sh/file-config sh/environment-mode :stripe-key-secret)
              authentication-data (ch/charge req sk)
              session (:session req)]

          (-> (ring-resp/response (slurp (io/resource "public/landing.html")))
              (ring-resp/content-type "text/html")
              (assoc :session (assoc session :authentication-data authentication-data)))))

  (POST "/verify-assertion" [:as req]

        (timbre/info (str "/verify-assertion req[" (with-out-str (pp/pprint req)) "]"))
        (let [ds (get-datastore)]
          (au/verify-assertion ds req)))


  ;; Availabilities / Tags
  (POST "/add-availability" [:as req]

        (timbre/info (str "/add-availability req[" (with-out-str (pp/pprint req)) "]"))
        (let [ds (get-datastore)
              result (hd/add-availability ds req)]

          (-> (ring-resp/response (pr-str result))
              (ring-resp/content-type "application/edn"))))

  (GET "/find-availability" [:as req]

       (timbre/info (str "/find-availability req[" (with-out-str (pp/pprint req)) "]"))
       (let [ds (get-datastore)
             result (hd/find-availability ds req)]

         (-> (ring-resp/response (pr-str result))
             (ring-resp/content-type "application/edn"))))

  (POST "/update-availability" [:as req]

        (timbre/info (str "/update-availability req[" (with-out-str (pp/pprint req)) "]"))
        (let [ds (get-datastore)
              result (hd/update-availability ds req)]

          (-> (ring-resp/response (pr-str result))
              (ring-resp/content-type "application/edn"))))


  ;; Session
  (POST "/add-session" [:as req]

        (timbre/info (str "/add-session req[" (with-out-str (pp/pprint req)) "]"))
        (let [ds (get-datastore)
              result (hd/add-session ds req)]

          (-> (ring-resp/response (pr-str result))
              (ring-resp/content-type "application/edn"))))

  (GET "/find-session" [:as req]

       (timbre/info (str "/find-session req[" (with-out-str (pp/pprint req)) "]"))
       (let [ds (get-datastore)
             result (hd/find-session ds req)]

         (-> (ring-resp/response (pr-str result))
             (ring-resp/content-type "application/edn"))))

  (POST "/update-session" [:as req]

        (timbre/info (str "/update-session req[" (with-out-str (pp/pprint req)) "]"))
        (let [ds (get-datastore)
              result (hd/update-session ds req)]

          (-> (ring-resp/response (pr-str result))
              (ring-resp/content-type "application/edn"))))


  ;; Listings
  (GET "/list-availabilities" [:as req]

       (timbre/info (str "/list-availabilities req[" (with-out-str (pp/pprint req)) "]"))
       (let [ds (get-datastore)
             result (hd/list-availabilities ds req)]

         (-> (ring-resp/response (pr-str result))
             (ring-resp/content-type "application/edn"))))

  (GET "/list-tags" [:as req]

       (timbre/info (str "/list-tags req[" (with-out-str (pp/pprint req)) "]"))
       (let [ds (get-datastore)
             result (hd/list-tags ds req)]

         (-> (ring-resp/response (pr-str result))
             (ring-resp/content-type "application/edn"))))

  (GET "/list-sessions" [:as req]

       (timbre/info (str "/list-sessions req[" (with-out-str (pp/pprint req)) "]"))
       (let [ds (get-datastore)
             result (hd/list-sessions ds req)]

         (-> (ring-resp/response (pr-str result))
             (ring-resp/content-type "application/edn"))))

  (route/files "/")
  (route/resources "/")
  (route/not-found "Not Found"))

(def app
  (-> app-routes
      handler/site
      (session/wrap-session {:cookie-attrs {:max-age 3600
                                            :secure true}})))
