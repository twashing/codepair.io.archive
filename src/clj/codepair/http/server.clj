(ns codepair.http.server
  (:require [com.stuartsierra.component :as component]
            [aleph.http :refer [start-server]]))


(defrecord WebServer [port server]
  component/Lifecycle
  (start [component]
    (let [handler (:handler component)
          server (start-server handler {:port port :join? false})]
      (assoc component :server server)))
  (stop [component]
    (when server
      (.close server)
      component)))

(defn new-web-server
  [port]
  (map->WebServer {:port port}))
