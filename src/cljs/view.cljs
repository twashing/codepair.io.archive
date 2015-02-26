(ns view
  (:require [goog.dom :as gdom]
            [goog.string :as gstr]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [sablono.core :as html :refer-macros [html]]
            [common :as cm]
            [util :as ul]))


(declare availabilities-view)

(defn tag-filter-handler [e]

  (let [tag-name (.-textContent (.-target e))
        filtered-availabilities (filterv (fn [x]
                                           (some #{tag-name} (map :name (:tags (:availability x)))))
                                         (:availabilities @cm/app-state))]
    (om/root availabilities-view
             filtered-availabilities
             {:target (. js/document (getElementById "availabilities"))})))

(defn tags-view [state owner]

  (om/component (html [:div {:id "tags-pane"}
                       (for [ech @state]
                         [:div {:on-click tag-filter-handler}
                          (:name (:tag ech))])])))

(defn availabilities-view [state owner]

  (om/component (html [:div {:id "availabilities-pane"}
                       (for [ech @state]
                         [:div
                          [:div (:title (:availability ech))]
                          [:div (:description (:availability ech))]])])))

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
  (let [;;stripe-script (.getElementById js/document "stripe-script")
        ;;_ (.setAttribute stripe-script "data-description" description)
        ;;_ (.setAttribute stripe-script "data-amount" amount)

        ;;stripe-input (.getElementById js/document "planId")
        ;;_ (aset stripe-input "value" planId)

        stripe-buttons (.getElementsByClassName js/document "stripe-button-el")
        pro (aget stripe-buttons 0)
        ent (aget stripe-buttons 1)
        stripe-button (if (= "professional" planId)
                        pro
                        ent)]

    ;;(ul/console-log (str "sinput: " stripe-input))
    ;;(ul/console-log (str "sbutton: " stripe-button))
    (.click stripe-button)))

(defn landing-view [listings-container]
  (om/component (html [:div {:id "landing-container"}

                       [:ul {:class "tabs" :data-tab true}
                        [:li {:class "tab-title active"}
                         [:a {:href "#tab-listings"} "Listings" ]]
                        [:li {:class "tab-title"}
                         [:a {:href "#tab-availabilities"} "Availabilities"]]
                        [:li {:class "tab-title"}
                         [:a {:href "#tab-session"} "Session"]]
                        [:li {:class "tab-title"}
                         [:a {:href "#tab-account"} "Account"]]]

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
                                  :on-click (fn [e] (pay-with-stripe "professional" "Professional Plan" "900"))} "Subscribe"]]]]

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
                                  :on-click (fn [e] (pay-with-stripe "enterprise" "Enterprise Plan" "2400"))} "Subscribe"]]]]]]

                        ]])))
