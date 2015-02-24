(ns view
  (:require [goog.dom :as gdom]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [sablono.core :as html :refer-macros [html]]
            [om-material-ui.core :as mui :include-macros true]
            [util :as ul]))

(defn tags-view [state owner]

  (om/component (html [:div {:id "tags-pane"}
                       (for [ech @state]
                         [:div (:name (:tag ech))])])))

(defn availabilities-view [state owner]

  (om/component (html [:div {:id "availabilities-pane"}
                       (for [ech @state]
                         [:div
                          [:div (:title (:availability ech))]
                          [:div (:description (:availability ech))]])])))
