(ns codepair.http.server
  (:require [ring.server.standalone :as rs]
            [codepair.http.handler :as hl]))


(defonce server (atom nil))

(defn start-server [& [port app]]
  (let [port (if port
               (if (string? port)
                 (Integer/parseInt port)
                 port)
               3000)]
    (reset! server
            (rs/serve app
                      {:port port
                       ;; :init init
                       ;; :destroy destroy
                       :auto-reload? true
                       :join true}))))

(defn stop-server []
  (.stop @server))
