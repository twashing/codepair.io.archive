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
         tags-handler
         availabilities-handler
         user-handler)

(defn loginClickHandler []
  (let [currentUser "twashing@gmail.com"
        navigatorId js/navigator.id]

    (ul/console-log "Signin CLICKED")
    (.watch navigatorId
            (clj->js {:loggedInUser currentUser
                      :onlogin verifyAssertion
                      :onlogout cm/signoutUser}))
    (.request navigatorId)))

(defn logoutClickHandler []
  (let [currentUser "twashing@gmail.com"
        navigatorId js/navigator.id]

    (ul/console-log "Signin CLICKED")
    (.logout navigatorId)))

(defn verifyAssertion [assertion]

  (ul/console-log (str "verifyAssertion CALLED / assertion: " assertion))
  (cm/edn-xhr
   {:method :post
    :url "/verify-assertion"
    :data {:assertion assertion}
    :on-complete (partial cm/basicHandler
                          (fn [e xhr]
                            (let [data (.getResponseText xhr)
                                  responseF  (reader/read-string data)]

                              (cm/user-handler e xhr responseF)
                              (session-check))))}))


(defn enable-signin []
  (om/root (fn [state owner]
             (om/component (html [:div {:on-click loginClickHandler}
                                  "login"])))
           (:user @cm/app-state)
           {:target (. js/document (getElementById "aauth"))}))

(defn enable-signout []
  (om/root (fn [state owner]
             (om/component (html [:div {:on-click logoutClickHandler}
                                  "logout"])))
           (:user @cm/app-state)
           {:target (. js/document (getElementById "aauth"))}))

(defn show-listings
  ([]
   (show-listings "app-container"))

  ([element-container]
   (om/root (fn [state owner]
              (om/component (html [:div
                                   [:div {:id "tags"}]
                                   [:div {:id "availabilities"}]])))
            @cm/app-state
            {:target (. js/document (getElementById element-container))})
   (cm/load-tags tags-handler)
   (cm/load-availabilities availabilities-handler)))

(defn show-landing []
  (let [listings-container "listings-container"]

    ;; set the container into which our listings will go
    (om/root (fn [state owner]
               (vw/landing-view listings-container))
             @cm/app-state
             {:target (. js/document (getElementById "app-container"))})

    ;; Invoke after using a foundation component
    ;; Refer to "Adding New Content After Page Load" here: http://foundation.zurb.com/docs/javascript.html
    (.foundation (js/$ js/document) "tab" "reflow")

    (show-listings listings-container)))

(defn session-check []

  (if (nil? (:user @cm/app-state))
    (do (show-listings)
        (enable-signin))
    (do (show-landing)
        (enable-signout))))

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

(ul/ready
 (fn [_]
   (cm/load-user-data
    (fn [e xhr data]
      (cm/user-handler e xhr data)
      (session-check)))))
