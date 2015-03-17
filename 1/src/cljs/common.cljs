(ns common
  (:require [cljs.reader :as reader]
            [goog.events :as events]
            [goog.dom :as gdom]
            [om.core :as om :include-macros true]
            [util :as ul])
  (:import [goog.net XhrIo]
           goog.net.EventType
           [goog.events EventType]))


(def app-state (atom {:user {}
                      :availabilities []
                      :tags []}))

(defn user-logged-in? []
  (not (nil? (:user @app-state))))

(def ^:private meths
  {:get "GET"
   :put "PUT"
   :post "POST"
   :delete "DELETE"})

(defn edn-xhr [{:keys [method url data on-complete]}]
  (let [xhr (XhrIo.)]
    (events/listen xhr goog.net.EventType.COMPLETE
                   (fn [e]
                     (on-complete (reader/read-string (.getResponseText xhr))
                                  xhr)))
    (. xhr
       (send url (meths method) (when data (pr-str data))
             #js {"Content-Type" "application/edn"}))))

(defn basicHandler [handlefn e xhr]
  (let [res (.getResponseText xhr)
        status (.getStatus xhr)]
    ;;(ul/console-log (str "basicHandler response: " res))
    (if (= 200 status)
      (do
        ;;(ul/console-log (str "XMLHttpRequest SUCCESS: " res))
        (handlefn e xhr))
      (do
        ;;(ul/console-log (str "XMLHttpRequest ERROR: " res))
        (.logout navigator.id)))))

(defn signoutUser []
  (ul/console-log "signoutUser CALLED")

  (edn-xhr
   {:method :get
    :url "/signout"
    :on-complete (partial basicHandler
                          (fn [e xhr]
                            (ul/console-log (str "signoutUser completed"))
                            (set! (.-location js/window) "/")))}))

(defn user-handler [e xhr data]
  (swap! app-state
         (fn [e]
           (update-in e [:user] (fn [f] data)))))


(defn localCommonHandler [response-handler]
  (partial basicHandler
           (fn [e xhr]

             (let [data (.getResponseText xhr)
                   responseF  (reader/read-string data)]

               (response-handler e xhr responseF)))))

(defn load-tags [response-handler]
  (edn-xhr
   {:method :get
    :url "/list-tags"
    :on-complete (localCommonHandler response-handler)}))

(defn load-availabilities [response-handler]
  (edn-xhr
   {:method :get
    :url "/list-availabilities"
    :on-complete (localCommonHandler response-handler)}))

(defn search-availabilities [response-handler search-term]
  (edn-xhr
   {:method :get
    :url (str "/search-availabilities?searchterm=" search-term)
    :data {:searchterm search-term}
    :on-complete (localCommonHandler response-handler)}))

(defn search-availabilities-bytag [response-handler search-term]
  (edn-xhr
   {:method :get
    :url (str "/search-availabilities-bytag?searchterm=" search-term)
    :data {:searchterm search-term}
    :on-complete (localCommonHandler response-handler)}))

(defn load-user-data [response-handler]
  (edn-xhr
   {:method :get
    :url "/user-data"
    :on-complete (localCommonHandler response-handler)}))

(defn get-app-state []
  (om/root-cursor app-state))

(defn get-account-level []
  (:accountlevel (:user (get-app-state))))

(defn ^:export printAppState []
  (ul/console-log (str @app-state)))
