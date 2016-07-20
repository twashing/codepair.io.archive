(ns codepair.http.server
  (:require [com.stuartsierra.component :as component]
            [aleph.http :refer [start-server]]
            [bidi.ring :refer [make-handler]]
            [yada.yada :refer [yada]]))


(defrecord WebServer [port server]
  component/Lifecycle
  (start [component]
    (let [handler (-> component :handler :handler)
          cert (io.netty.handler.ssl.util.SelfSignedCertificate.)
          sslContext (.build
                      (io.netty.handler.ssl.SslContextBuilder/forServer (.certificate cert) (.privateKey cert)))
          server (start-server handler {:port port :join? false :ssl-context sslContext})
          ;; server (start-server handler {:port port :join? false})
          ]
      (assoc component :server server)))
  (stop [component]
    (when server
      (.close server)
      component)))

(defn new-web-server
  [port]
  (map->WebServer {:port port}))
