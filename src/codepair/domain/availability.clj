(ns codepair.domain.availability
  (:require [adi.core :as adi]))


(defn add-availability [ds gname availability]
  {:pre [(= :ongoing (:time availability))]}

  (adi/update! ds
               {:group
                {:name gname}}
               {:group/availabilities availability}))

(defn list-availabilities [ds gname]
  (adi/select ds
              {:availability
               {:groups
                {:name gname}}}
              :pull {:availability :checked}))
