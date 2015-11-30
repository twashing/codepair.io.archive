(ns codepair.component.shell
  (:require [taoensso.timbre :as timbre]
            [hara.component :as hco]))

(defrecord Shell []
  Object
  (toString [sh]
    (str "#sh" (into {} sh)))

  hco/IComponent
  (-start [sh]

    (timbre/trace "Shell.start CALLED > system[" sh "]")
    (assoc sh :status "started"))

  (-stop [sh]

    (timbre/trace "Shell.stop CALLED > system[" sh "]")
    (dissoc sh :status)))

(defmethod print-method Shell
  [v w]
  (.write w (str v)))
