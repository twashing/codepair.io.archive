(ns codepair.domain.availability
  (:require [adi.core :as adi]
            [clojure.set :as set]))


(defn add-availability [ds gname availability]
  {:pre [(= :ongoing (:time availability))]}

  (adi/update! ds
               {:group
                {:name gname}}
               {:group/availabilities availability}))

(defn find-availability-by-title
  ([ds gname title]
   (find-availability-by-title ds gname title [:ids {:availability :checked}]))

  ([ds gname title opts]
   (let [select-args (set/union [ds
                                 {:availability
                                  {:title title
                                   :groups
                                   {:name gname}}}
                                 opts])]
     (apply adi/select select-args))))

(defn list-availabilities [ds gname]
  (adi/select ds
              {:availability
               {:groups
                {:name gname}}}
              :pull {:availability :checked}))

(defn update-availability [ds gname title availability]
  (adi/update! ds
               {:availability
                {:title title
                 :groups
                 {:name gname}}}
               {:availability availability}))
