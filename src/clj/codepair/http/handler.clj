(ns codepair.http.handler
  (:require [clojure.java.io :as io]
            [bidi.ring :refer [make-handler]]
            [yada.yada :refer [yada]]
            [com.stuartsierra.component :as component]
            [aleph.http :as http]
            [manifold.deferred :as d]
            [manifold.stream :as s]
            [manifold.bus :as b]
            [bkell.config :as config]))

(defn generate-ice-handler [room]
  
  (fn [req]
    ;; make ICE request
    (let [conf (config/load-edn "config-codepair.edn")
          resp @(http/post
                 "https://service.xirsys.com/ice"
                 {:body
                  {:form-params
                   {:ident "twashing"
                    :secret (-> conf :dev :xirsys-token)
                    :domain "codepair.io"
                    :application "main"
                    :room "main"
                    :secure 1}}})]

      (println resp)
      
      ;; subscribe requester to chatroom
      (d/let-flow [socket (http/websocket-connection req)]
        (s/connect
         (b/subscribe room "main")
         socket))
      
      ;; return ICE details
      (select-keys resp [:status :body]))))

(defn generate-handler [state]
  (let [room (:room state)]
    (make-handler ["/" {"" (fn  [req] {:content-type "text/html"
                                       :body (slurp (io/resource "public/index.html"))})
                        "room" (generate-ice-handler room)}])))

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

