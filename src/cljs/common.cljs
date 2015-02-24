(ns common
  (:require [cljs.reader :as reader]
            [goog.events :as events]
            [goog.dom :as gdom]
            [codepair :as cp]
            [util :as ul]))


(def app-state (atom {:user {}
                      :availabilities []
                      :tags []}))

(defn localCommonHandler [response-handler]
  (partial cp/basicHandler
           (fn [e xhr]

             (let [data (.getResponseText xhr)
                   responseF  (reader/read-string data)]

               (response-handler e xhr responseF)))))

(defn load-tags [response-handler]
  (cp/edn-xhr
   {:method :get
    :url "/list-tags"
    :on-complete (localCommonHandler response-handler)}))

(defn load-availabilities [response-handler]
  (cp/edn-xhr
   {:method :get
    :url "/list-availabilities"
    :on-complete (localCommonHandler response-handler)}))

(defn load-user-data [response-handler]
  (cp/edn-xhr
   {:method :get
    :url "/user-data"
    :on-complete (localCommonHandler response-handler)}))

(defn ^:export printAppState []
  (ul/console-log (str @app-state)))
