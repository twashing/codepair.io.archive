(ns codepair.domain.session
  (:require [adi.core :as adi]
            [clojure.set :as set]))


(defn add-session [ds gname session]
  {:pre [(not (nil? (:begin session)))]}

  (adi/update! ds
               {:group
                {:name gname}}
               {:group/sessions session}))

(defn find-session-by-begin
  ([ds gname begin]
   (find-session-by-begin  ds gname begin [:ids {:session :checked}]))

  ([ds gname begin opts]
   (let [select-args (set/union [ds
                                 {:session
                                  {:begin begin
                                   :groups
                                   {:name gname}}}
                                 opts])]
     (apply adi/select select-args))))

(defn list-sessions [ds gname]
  (adi/select ds
              {:session
               {:groups
                {:name gname}}}
              :pull {:session :checked}))

(defn update-session [ds gname begin session]
  (adi/update! ds
               {:session
                {:begin begin
                 :groups
                 {:name gname}}}
               {:session session}))
