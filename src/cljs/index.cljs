(ns index
  (:require [cljs.reader :as reader]
            [goog.events :as events]
            [goog.dom :as gdom]
            [codepair :as cp]
            [common :as cm]
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

                                  _ (ul/console-log (str "sanity check... " responseF))
                                  groupname (:groupname responseF)
                                  username (:username responseF)
                                  token (:token responseF)]

                              ;; set the user data into the namespace
                              (swap! ln/user-state (fn [inp]
                                                     {:groupname groupname
                                                      :username username
                                                      :token token
                                                      :source responseF})))))}))


(defn enable-signin []
  (if-let [signinLink (gdom/getElement "signin")]
    (set! (.-onclick signinLink) onClickHandler)))

(defn tags-handler [e xhr data]
  (ul/console-log (str "tags: " data))
  (swap! cm/app-state (fn [e]
                        (update-in e [:tags] (fn [f] (into [] data))))))

(defn availabilities-handler [e xhr data]
  (ul/console-log (str "availabilities: " data))
  (swap! cm/app-state (fn [e]
                        (update-in e [:availabilities] (fn [f] (into [] data))))))


(ul/ready
 (fn [_]

   (enable-signin)
   (cm/list-tags tags-handler)
   (cm/list-availabilities availabilities-handler)))
