(ns view
  (:require [cljs.reader :as reader]
            [goog.dom :as gdom]
            [goog.string :as gstr]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [sablono.core :as html :refer-macros [html]]
            [secretary.core :as secretary :refer-macros [defroute]]
            [common :as cm]
            [util :as ul]))


(declare availabilities-view)

(defn tag-filter-handler [e]

  (let [tag-name (.-textContent (.-target e))
        filtered-availabilities (if (= "*all*" tag-name)
                                  (:availabilities @cm/app-state)
                                  (filterv (fn [x]
                                             (some #{tag-name} (map :name (:tags (:availability x)))))
                                           (:availabilities @cm/app-state)))]
    (om/root availabilities-view
             filtered-availabilities
             {:target (. js/document (getElementById "availabilities"))})))

(defn tags-view [state owner]

  (om/component (html [:div {:id "tags-pane"}
                       (for [ech (cons {:tag {:name "*all*"}} @state)]
                         [:div {:class "tag-item"
                                :on-click tag-filter-handler}
                          (:name (:tag ech))])])))

(defn availabilities-view [state owner]

  (om/component (html [:div {:id "availabilities-pane"}
                       [:table {:class "availabilities-table"}
                        [:thead
                         [:tr
                          [:th "Title"]
                          [:th "Description"]
                          [:th "tags"]]]
                        [:tbody

                         (for [ech @state]
                           [:tr
                            [:td (:title (:availability ech))]
                            [:td (:description (:availability ech))]
                            [:td (for [tg (:tags (:availability ech))]
                                   [:div (:name tg)])]])]]])))

(defn account-selected-description [account-level existing-classes]
  (if (= (cm/get-account-level) account-level)
    (str existing-classes " account-selected-text")
    existing-classes))

(defn account-selected-button [account-level existing-classes]
  (if (= (cm/get-account-level) account-level)
    (str existing-classes " disabled")
    existing-classes))

(defn account-selected-title [account-level existing-classes]
  (if (= (cm/get-account-level) account-level)
    (str existing-classes " account-selected-title")
    existing-classes))

(defn account-selected-text [account-level existing-text]
  (if (= (cm/get-account-level) account-level)
    (str "*" existing-text)
    existing-text))

(defn pay-with-stripe [planId description amount]

  (let [stripe-config (clj->js {:key "pk_test_CT5VaR5BAIH2ZneC0wGLTh9b"
                                :token (fn [token]

                                         (ul/console-log (str "token recieved: " token))
                                         (cm/edn-xhr
                                          {:method :post
                                           :url "/charge"
                                           :data {:stripeToken (.-id token)
                                                  :stripeEmail (.-email token)
                                                  :accountlevel planId}
                                           :on-complete (partial cm/basicHandler
                                                                 (fn [e xhr]
                                                                   (let [data (.getResponseText xhr)
                                                                         responseF  (reader/read-string data)]

                                                                     (cm/user-handler e xhr responseF))))}))})
        handler (.configure js/StripeCheckout stripe-config)]

    (.open handler (clj->js {:name "Codepair.io"
                             :description description
                             :amount amount}))

    (.on  (js/$ js/window)
          "popstate"
          (fn [] (.close handler)))))

(defn switch-tab [tab-link loc]
  (.click (js/$ tab-link))
  (set! (.-location js/window) loc))

(defn landing-view [listings-container]
  (om/component (html [:div {:id "landing-container"}

                       [:ul {:class "tabs" :data-tab true}
                        [:li {:class "tab-title active"}
                         [:a {:id "tab-listings-link"
                              :href "#tab-listings"
                              :on-click (fn [_] (secretary/dispatch! "/listings"))} "Listings" ]]
                        [:li {:class "tab-title"}
                         [:a {:id "tab-availabilities-link"
                              :href "#tab-availabilities"
                              :on-click (fn [_] (secretary/dispatch! "/availabilities"))} "Availabilities"]]
                        [:li {:class "tab-title"}
                         [:a {:id "tab-session-link"
                              :href "#tab-session"
                              :on-click (fn [_] (secretary/dispatch! "/session"))} "Session"]]
                        [:li {:class "tab-title"}
                         [:a {:id "tab-account-link"
                              :href "#tab-account"
                              :on-click (fn [_] (secretary/dispatch! "/account"))} "Account"]]]

                       [:div {:class "tabs-content"}

                        [:div {:class "content active" :id "tab-listings"}
                         [:div {:id listings-container}]]

                        [:div {:class "content" :id "tab-availabilities"}
                         [:p "Availabilities"]
                         [:a {:class "button tiny"} "thing"]
                         [:div {:class "small-4 columns"}
                          [:label "Input Label"
                           [:input {:type "text" :placeholder "small-4 columns"} ]]]
                         ]

                        [:div {:class "content" :id "tab-session"}
                         [:p "Session"]]

                        [:div {:class "content" :id "tab-account"}

                         [:ul {:class "small-block-grid-3"}

                          [:li
                           [:ul {:class "pricing-table"}
                            [:li {:class (account-selected-title :free "title")} "Free"]
                            [:li {:class "price"} "$0"]
                            [:li {:class (account-selected-description :free "description")}
                             (account-selected-text :free "Sign up and start using the service gratis")]
                            [:li {:class "bullet-item"} "Can only connect to others' availability"]
                            [:li {:class "bullet-item"} "A Professional Plan lets you host your own availabilities"]
                            [:li {:class "cta-button"}
                             [:a {:class (account-selected-button :free "button")} "Subscribe"]]]]

                          [:li
                           [:ul {:class "pricing-table"}
                            [:li {:class (account-selected-title :professional "title")} "Professional"]
                            [:li {:class "price"} "$9"]
                            [:li {:class (account-selected-description :professional "description")}
                             (account-selected-text :professional "Sign up and start using the service")]
                            [:li {:class "bullet-item"} "Host your own availabilities"]
                            [:li {:class "bullet-item"} "Full Audio, Video, Text Messages and Screen Sharing"]
                            [:li {:class "cta-button"}
                             [:a {:class (account-selected-button :professional "button")
                                  :on-click (fn [e]
                                              (pay-with-stripe "professional" "Professional Plan" "900")
                                              (.preventDefault e))}
                              "Subscribe"]]]]

                          [:li
                           [:ul {:class "pricing-table"}
                            [:li {:class (account-selected-title :enterprise "title")} "Enterprise"]
                            [:li {:class "price"} "$24"]
                            [:li {:class (account-selected-description :enterprise "description")}
                             (account-selected-text :enterprise "Sign up your organization and enable enterprise wide problem solving")]
                            [:li {:class "bullet-item"} "Connect to any availabilitles. Host your own. Run group sessions."]
                            [:li {:class "bullet-item"} (gstr/unescapeEntities "&nbsp;")]
                            [:li {:class "cta-button"}
                             [:a {:class (account-selected-button :enterprise "button")
                                  :on-click (fn [e]
                                              (pay-with-stripe "enterprise" "Enterprise Plan" "2400")
                                              (.preventDefault e))}
                              "Subscribe"]]]]]]

                        ]])))
