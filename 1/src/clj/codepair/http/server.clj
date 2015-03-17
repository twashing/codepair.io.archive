(ns codepair.http.server
  (:require [ring.server.standalone :as rs]))


(def server (atom nil))

(defn start-server [& [port app]]
  (let [port (if port
               (if (string? port)
                 (Integer/parseInt port)
                 port)
               3000)]
    (reset! server
            (rs/serve app
                      {:port port
                       :auto-reload? true
                       :join true
                       :open-browser? false}))))

(defn stop-server []
  (.stop @server))

(defn reset-server [& [port app]]
  (if (nil? @server)
    (start-server)
    (do
      (stop-server)
      (start-server port app))))
