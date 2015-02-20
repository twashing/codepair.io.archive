(ns codepair.domain.user
  (:require [clojure.set :as set]
            [adi.core :as adi]
            [codepair.domain.helper :as hlp]))

(declare find-user-by-username)

(defn no-duplicate-user? [ds uname]
  (let [a (find-user-by-username ds uname)]
    (empty? a)))

(defn generate-nominal-group [ds uname]
  (hlp/generate-nominal-group ds (str "group-" uname) uname ))

(defn add-user [ds uname]
  {:pre [(no-duplicate-user? ds uname)]}

  (let [generated-group (generate-nominal-group ds uname)]

    (adi/update! ds
                 {:system {:groups '_}}
                 {:system {:groups generated-group}})))

(defn find-user-by-username
  ([ds uname]
   (find-user-by-username ds uname [:ids {:user :checked}]))
  ([ds uname opts]

   (let [select-args (set/union [ds
                                   {:user {:username uname}}]
                                  opts)]
     (apply adi/select select-args))

   #_(adi/select ds {:user {:username uname}} :ids {:user :checked})

   ))

(defn list-users [ds gname]
  (adi/select ds
              {:user
               {:username '_
                :groups
                {:name gname}}}
              :pull {:user :checked}))

(defn update-user [ds uname user]
  {:pre [(or (empty? (:username user))
             (no-duplicate-user? ds (:username user)))]}
  (adi/update! ds
               {:user
                {:username uname}}

               {:user user}))

(defn list-users-all [ds]
  (adi/select ds
              {:user
               {:username '_}}
              :pull {:user :checked}))
