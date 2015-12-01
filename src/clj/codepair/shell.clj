(ns codepair.shell
  (:require [reloaded.repl :refer [system init start stop go reset]]
            [system.core :refer [defsystem]]
            [system.components.aleph :refer [new-web-server]]))

(defn handler [req]
  {:status 200
   :headers {"content-type" "text/plain"}
   :body "hello!"})

(defsystem dev-system
  [:web (new-web-server 8080 handler)])

(reloaded.repl/set-init! dev-system)
