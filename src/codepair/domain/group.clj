(ns codepair.domain.group
  (:require [adi.core :as adi]
            [slingshot.slingshot :refer [try+ throw+]]
            [bkell.domain.helper :as hlp]))


(declare find-group-by-name)

(defn no-duplicate-group? [ds group-name]
  (let [a (find-group-by-name ds group-name)]
    (empty? a)))

(defn generate-nominal-group [ds gname]
  (hlp/generate-nominal-group ds gname (str "user-" gname)))

(defn add-group [ds gname]
  {:pre [(no-duplicate-group? ds gname)]}

  (let [generated-group (generate-nominal-group ds gname)]

    (adi/update! ds
                 {:system {:groups '_}}
                 {:system {:groups generated-group}})))

(defn find-group-by-name [ds gname]
  (adi/select ds
              {:group {:name gname}}
              :pull {:group {:name :checked}}))

(defn list-groups [ds]
  (-> (adi/select ds {:system {:groups '_}} :pull {:system {:groups :checked}})
      first :system :groups))
