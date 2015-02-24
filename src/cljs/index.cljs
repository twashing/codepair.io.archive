(ns index
  (:require [cljs.reader :as reader]
            [goog.events :as events]
            [goog.dom :as gdom]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [sablono.core :as html :refer-macros [html]]
            [codepair :as cp]
            [common :as cm]
            [view :as vw]
            [util :as ul])
  (:import [goog.net XhrIo]
           goog.net.EventType
           [goog.events EventType]))


(declare verifyAssertion
         loginClickHandler
         session-check
         user-handler)

(defn loginClickHandler []
  (let [currentUser "twashing@gmail.com"
        navigatorId js/navigator.id]

    (ul/console-log "Signin CLICKED")
    (.watch navigatorId
            (clj->js {:loggedInUser currentUser
                      :onlogin verifyAssertion
                      :onlogout cp/signoutUser}))
    (.request navigatorId)))


(defn verifyAssertion [assertion]

  (ul/console-log (str "verifyAssertion CALLED / assertion: " assertion))
  (cp/edn-xhr
   {:method :post
    :url "/verify-assertion"
    :data {:assertion assertion}
    :on-complete (partial cp/basicHandler
                          (fn [e xhr]
                            (let [data (.getResponseText xhr)
                                  responseF  (reader/read-string data)]

                              (user-handler e xhr responseF))))}))

(defn login-button [state owner]
  (om/component (html [:div {:on-click loginClickHandler}
                       "login"])))

(defn logout-button [state owner]
  (om/component (html [:div {}
                       "logout"])))

(defn enable-signin []
  (om/root login-button
           (:user @cm/app-state)
           {:target (. js/document (getElementById "aauth"))}))

(defn enable-signout []
  (om/root logout-button
           (:user @cm/app-state)
           {:target (. js/document (getElementById "aauth"))}))


(defn session-check []

  (if (nil? (:user @cm/app-state))
    (enable-signin)
    (enable-signout)))

(defn tags-handler [e xhr data]

  (swap! cm/app-state (fn [e]
                        (update-in e [:tags] (fn [f] (into [] data)))))

  (om/root vw/tags-view
           (:tags @cm/app-state)
           {:target (. js/document (getElementById "tags"))}))

(defn availabilities-handler [e xhr data]

  (swap! cm/app-state (fn [e]
                        (update-in e [:availabilities] (fn [f] (into [] data)))))

  (om/root vw/availabilities-view
           (:availabilities @cm/app-state)
           {:target (. js/document (getElementById "availabilities"))}))

(defn user-handler [e xhr data]

  (swap! cm/app-state
         (fn [e]
           (update-in e [:user] (fn [f] data))))

  (session-check))


(ul/ready

 (fn [_]

   (cm/load-tags tags-handler)
   (cm/load-availabilities availabilities-handler)
   (cm/load-user-data user-handler)))
