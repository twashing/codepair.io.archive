(ns util)

(enable-console-print!)

(defn console-log [message]
  (.log js/console message))

(defn ready [handlerfn]
  (if (not (= "loading" (.-readeyState js/document)))
    (handlerfn)
    (.addEventListener js/document "DOMContentLoaded" handlerfn)))
