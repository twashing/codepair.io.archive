(ns codepair.shell
  (:require [codepair.http.handler :as hdl]
            [codepair.http.server :as srv]
            [reloaded.repl :refer [go]]
            [system.components.aleph :refer [new-web-server]]
            [system.core :refer [defsystem]]
            [com.stuartsierra.component :as component]
            [reloaded.repl :refer [system init start stop go reset]]))


(defrecord Shell []
  component/Lifecycle
  (start [component]
    component)
  (stop [component]
    component))

(defn new-shell []
  (map->Shell {}))


(defn generate-system []
  (component/system-map
   :shell (new-shell)
   :handler (component/using
             (hdl/new-http-handler)
             [:shell])
   :web (component/using
         (srv/new-web-server 8080)
         [:handler])))

(defn set-init! []
  (reloaded.repl/set-init! #(generate-system)))

(defn bootstrap []
  (set-init!)
  (go))

