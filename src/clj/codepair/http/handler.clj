(ns codepair.http.handler
  (:require [clojure.java.io :as io]
            [bidi.ring :refer [make-handler ->Files ->Resources]]
            [yada.yada :refer [yada]]
            [com.stuartsierra.component :as component]
            [aleph.http :as http]
            [manifold.deferred :as d]
            [manifold.stream :as s]
            [manifold.bus :as b]
            [bkell.config :as config]
            [clj-http.client :as client]
            [ring.util.response :refer (file-response url-response)]
            [ring.middleware.content-type :refer (wrap-content-type)]
            [ring.middleware.file-info :refer (wrap-file-info)]
            [ring.middleware.not-modified :refer (wrap-not-modified)]
            [cider.nrepl.middleware.debug]))


(def non-websocket-request
  {:status 400
   :headers {"content-type" "application/text"}
   :body "Expected a websocket request."})

(defn generate-chatroom-handler [chatrooms]
  (fn [req]

    (d/let-flow [conn (d/catch
                          (http/websocket-connection req)
                          (fn [_] nil))]
      (if-not conn

        ;; if it wasn't a valid websocket handshake, return an error
        non-websocket-request

        ;; otherwise, take the first two messages, which give us the chatroom and name
        (d/let-flow []

          ;; take all messages from the chatroom, and feed them to the client
          (s/connect
           (b/subscribe chatrooms "main")
           conn)

          ;; take all messages from the client, prepend the name, and publish it to the "main" rooms
          (s/consume
           #(b/publish! chatrooms "main" %)
           (->> conn
                #_(s/map #(str name ": " %))
                (s/buffer 100)))

          (b/publish! chatrooms "main" "joined room: main"))))))

(defn generate-ice-handler [config-codepair]
  (fn [req]

    #spy/d req

    ;; make ICE request
    (let [resp (client/post
                "https://service.xirsys.com/ice"
                {:form-params
                 {:ident "twashing"
                  :secret #spy/d (:xirsys-token (config-codepair))
                  :domain "codepair.io"
                  :application "main"
                  :room "main"
                  :secure 1}})]

      ;; return ICE details
      (select-keys resp [:status :body]))))

(defn generate-index-response []
  (fn [req]
    {:content-type "text/html"
     :body (slurp (io/resource "public/index.html"))}))

(defn generate-handler [state]
  (let [room (:room state)
        config-codepair (:config-codepair state)]
    (make-handler ["/" {"" (generate-index-response)
                        "ice" (generate-ice-handler config-codepair)
                        "chatroom" (generate-chatroom-handler room)
                        true (->
                              (fn [req]
                                (let [resp (file-response (:uri req)
                                                          {:root "resources/public/"})]
                                  (assoc resp :body (slurp (:body resp))))))}])))

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
