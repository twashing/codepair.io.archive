(ns codepair.http.handler
  (:require [bidi.ring :refer [make-handler]]
            [yada.yada :refer [yada]]
            [com.stuartsierra.component :as component]
            [aleph.http :as http]
            [manifold.deferred :as d]
            [manifold.stream :as s]
            [manifold.bus :as b]))

(defn generate-handler [state]

  (let [room (:room state)]
    
    (make-handler ["/" {"" (fn [req]
                             {:body "guten tag"})
                        
                        "room" (fn [req]
                                 (d/let-flow [socket (http/websocket-connection req)]
                                             (s/connect
                                              (b/subscribe room "main")
                                              socket)))}])))

(defrecord HttpHandler []
  component/Lifecycle

  (start [component]
    (let [state (-> component :shell :state)
          handler (generate-handler state)]
      (assoc component :handler handler)))

  (stop [component]
    (dissoc component :handler)))

(defn new-http-handler []
  (map->HttpHandler {}))

