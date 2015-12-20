(ns codepair.core
  (:require [weasel.repl :as repl]
            [ajax.core :refer [GET POST]]
            [chord.client :refer [ws-ch]]
            [cljs.core.async :refer [<! >! put! close!]])
  (:require-macros [cljs.core.async.macros :refer [go]]))


(.log js/console "Hello Clojurescript")

;; browser REPL
(when-not (repl/alive?)
  (repl/connect "ws://172.28.128.3:9001"))


(defn ice-handler [response]
  (.log js/console (str response)))

(defn ice-error-handler [{:keys [status status-text]}]
  (.log js/console (str "something bad happened: [" status "] " status-text)))

(defn ice-call []
  (GET "/ice" {:handler ice-handler
                 :error-handler ice-error-handler}))

(defn join-chatroom []
  (go
    (let [{:keys [ws-channel]} (<! (ws-ch "ws://172.28.128.3/chatroom"))
          {:keys [message error]} (<! ws-channel)]
      (if error
        (js/console.log "Uh oh:" error)
        (js/console.log "Hooray! Message:" (pr-str message))))))
