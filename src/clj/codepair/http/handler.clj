(ns codepair.http.handler
  (:require [bidi.ring :refer [make-handler]]
            [yada.yada :refer [yada]]
            [com.stuartsierra.component :as component]))

(defn generate-handler []
  (make-handler ["/" {"" (yada "guten tag")
                      "a" :a
                      "b" :b}]))

(defrecord HttpHandler []
  component/Lifecycle

  (start [component]
    (let [handler (generate-handler)]
      (assoc component :handler handler)))

  (stop [component]
    (dissoc component :handler)))

(defn new-http-handler []
  (map->HttpHandler {}))

