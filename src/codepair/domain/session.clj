(ns codepair.domain.session
  (:require [adi.core :as adi]
            [clojure.set :as set]))


(defn add-session [ds gname session]
  {:pre [(not (nil? (:begin session)))]}

  (adi/update! ds
               {:group
                {:name gname}}
               {:group/sessions session}))

#_(defn find-session-by-title
  ([ds gname title]
   (find-session-by-title ds gname title [:ids {:session :checked}]))

  ([ds gname title opts]
   (let [select-args (set/union [ds
                                 {:session
                                  {:title title
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

#_(defn update-session [ds gname title session]
  (adi/update! ds
               {:session
                {:title title
                 :groups
                 {:name gname}}}
               {:session session}))
