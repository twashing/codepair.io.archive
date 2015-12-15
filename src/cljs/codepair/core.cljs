(ns codepair.core
  (:require [weasel.repl :as repl]))

(.log js/console "Hello Clojurescript")

(when-not (repl/alive?)
  (repl/connect "ws://172.28.128.3:9001"))
