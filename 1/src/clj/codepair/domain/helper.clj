(ns codepair.domain.helper
  (:require [adi.core :as adi]
            [clojure.set :as set]
            [slingshot.slingshot :refer [try+ throw+]]))

(defn find-core [args]
  (apply adi/select args))

(defn find-by-id
  ([ds id] (find-by-id ds id [:first]))
  ([ds id opts]
   (let [args [ds id]
         argsF (set/union args opts)]

     (find-core argsF))))

(defn generate-nominal-group [ds gname uname]

  {:+/db/id [[:group-new]]

   :name gname

   :users #{{:+/db/id [[:user-new]]
             :username uname
             :password "default"
             :firstname uname
             :lastname uname
             :email uname
             :accountlevel :free
             :defaultgroup [[:group-new]]}}

   :owner [[:user-new]]})
