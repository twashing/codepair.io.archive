(ns view
  (:require [goog.dom :as gdom]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [sablono.core :as html :refer-macros [html]]
            [om-material-ui.core :as mui :include-macros true]
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
