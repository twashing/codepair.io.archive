(ns index
  (:require [cljs.reader :as reader]
            [goog.events :as events]
            [goog.dom :as gdom]
            [codepair :as cp]
            [landing :as ln]
            [util :as ul])
  (:import [goog.net XhrIo]
           goog.net.EventType
           [goog.events EventType]))


(declare verifyAssertion)

(defn onClickHandler []
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
                                  responseF  (reader/read-string data)
                                  ;;groupname (-> responseF :uresult first :system :groups first :name)
                                  ;;username (-> responseF :uresult first :system :groups first :users first :username)
                                  ;;token _
                                  groupname (-> responseF :authentication-data :groupname)
                                  username (-> responseF :authentication-data :username)
                                  token (-> responseF :authentication-data :token)]

                              ;; set the user data into the namespace
                              (swap! ln/user-state (fn [inp]
                                                     {:groupname groupname
                                                      :username username
                                                      :token token
                                                      :source responseF})))))}))

(defn start []
  (if-let [signinLink (gdom/getElement "signin")]
    (set! (.-onclick signinLink) onClickHandler)))

(start)
