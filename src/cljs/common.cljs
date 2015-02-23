(ns common
  (:require [cljs.reader :as reader]
            [goog.events :as events]
            [goog.dom :as gdom]
            [codepair :as cp]
            [util :as ul]))

(def app-state (atom {:user {}
                      :availabilities []
                      :tags []}))

(defn list-tags [response-handler]
  (cp/edn-xhr
   {:method :get
    :url "/list-tags"
    :on-complete (partial cp/basicHandler
                          (fn [e xhr]

                            (let [data (.getResponseText xhr)
                                  responseF  (reader/read-string data)]

                              (response-handler e xhr responseF))))}))

(defn list-availabilities [response-handler]
  (cp/edn-xhr
   {:method :get
    :url "/list-availabilities"
    :on-complete (partial cp/basicHandler
                          (fn [e xhr]

                            (let [data (.getResponseText xhr)
                                  responseF  (reader/read-string data)]

                              (response-handler e xhr responseF))))}))

(defn ^:export printAppState []
  (ul/console-log (str @app-state)))
