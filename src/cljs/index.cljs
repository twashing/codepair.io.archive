(ns index
  (:require [cljs.reader :as reader]
            [goog.events :as events]
            [goog.dom :as gdom]
            [codepair :as cp])
  (:import [goog.net XhrIo]
           goog.net.EventType
           [goog.events EventType]))


(defn onClickHandler []
  (let [currentUser "twashing@gmail.com"
        navigatorId js/navigator.id]

    (cp/console-log "Signin CLICKED")
    (.watch navigatorId
            (clj->js {:loggedInUser currentUser
                      :onlogin cp/verifyAssertion
                      :onlogout cp/signoutUser}))
    (.request navigatorId)))

(defn start []
  (if-let [signinLink (gdom/getElement "signin")]
    (set! (.-onclick signinLink) onClickHandler)))

(start)
