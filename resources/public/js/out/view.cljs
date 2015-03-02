(ns view
  (:require [clojure.string :as s]
            [cljs.reader :as reader]
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
  (cm/search-availabilities-bytag cm/availabilities-handler tag-name))

(defn availabilities-handler [e xhr data]
  (swap! cm/app-state (fn [e]
                     (update-in e [:availabilities] (fn [f] (into [] data)))))

  (om/root availabilities-view
           (cm/get-app-state)
           {:target (. js/document (getElementById "availabilities"))}))

(defn tags-view [state owner]

  (om/component (html [:div {:id "tags-pane"}
                       (for [ech (cons {:tag {:name "*all*"}} @state)]
                         [:div {:class "tag-item"
                                :on-click tag-filter-handler}
                          (:name (:tag ech))])])))

(defn availability-view-nominal [state owner]

  [:div {:id "availability-pane"}

   [:div {:class "row"}
    [:label "Title"
     [:input {:id "availability-title"
              :type "text"
              :value (:title (:availability state))}]]]

   [:div {:class "row"}
    [:label "Description"
     [:textarea {:id "availability-description"
                 :value (:description (:availability state))}]]]

   [:div {:class "row"}
    [:label "Tags"
     [:input {:id "availability-tags"
              :type "text"
              :placeholder "space delimited tags, should all be lower case, with no dashes or spaces"
              :value (:title (:availability state))}]]]

   [:div {:class "row"}
    [:a {:id "availability-save"
         :class "button tiny right"}
     "save"]]])

(defn availability-view [state owner]
  (om/component (html (availability-view-nominal state owner))))

(defn availabilities-view [state owner]
  (om/component (html [:div {:id "availabilities-pane"}
                       [:table {:class "availabilities-table"}
                        [:thead
                         [:tr
                          [:th "Title"]
                          [:th "Description"]
                          [:th "tags"]]]
                        [:tbody

                         (for [ech (om/ref-cursor (:availabilities state))]

                           [:tr {:on-click (fn [e]
                                             (let [syncfn (fn []

                                                            (ul/console-log (str (om/get-state owner)))

                                                            (let [availability (:availability (om/get-state owner))
                                                                  title (:title (:availability ech))
                                                                  group-name "codepair"
                                                                  ;;(:groupname (:user (cm/get-app-state)))
                                                                  ]
                                                              (cm/edn-xhr
                                                               {:method :post
                                                                :url (str "/update-availability?groupname=" group-name "&title=" title)
                                                                :data availability
                                                                :on-complete
                                                                (cm/localCommonHandler (fn [e xhr data]
                                                                                         (ul/console-log (str "SUCCESS: " data))))})))

                                                   updatefn (fn []
                                                              (let [title (.val (js/$ "#availability-title"))
                                                                    description (.val (js/$ "#availability-description"))
                                                                    tags (mapv (fn [e] {:name e})
                                                                               (filter #(re-find #"\w" %)
                                                                                       (s/split (.val (js/$ "#availability-tags"))
                                                                                                #"\s")))]

                                                                (om/transact! ech
                                                                              [:availability :title]
                                                                              (fn [_] title))

                                                                (om/transact! ech
                                                                              [:availability :description]
                                                                              (fn [_] description))

                                                                (om/transact! ech
                                                                              [:availability :tags]
                                                                              (fn [_] tags))

                                                                (om/set-state! owner [:availability :title]  title)
                                                                (om/set-state! owner [:availability :description] description)
                                                                (om/set-state! owner [:availability :tags] tags)

                                                                (secretary/dispatch! "/listings")

                                                                (syncfn)))]


                                               (.val (js/$ "#availability-title")
                                                     (:title (:availability ech)))

                                               (.val (js/$ "#availability-description")
                                                     (:description (:availability ech)))

                                               (.val (js/$ "#availability-tags")
                                                     (s/trim (reduce (fn [x y]
                                                                       (str x "  " (:name y)))
                                                                     ""
                                                                     (:tags (:availability ech)))))

                                               (.off (js/$ "#availability-save") "click")
                                               (.click (js/$ "#availability-save")
                                                       updatefn)

                                               (secretary/dispatch! "/availabilities")))}
                            [:td (:title (:availability @ech))]
                            [:td (:description (:availability @ech))]
                            [:td (for [tg (:tags (:availability @ech))]
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
                         [:div {:id "availability-container"}
                          (availability-view-nominal (constantly nil nil nil))]]

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
