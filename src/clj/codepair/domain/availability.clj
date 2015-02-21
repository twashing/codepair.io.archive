(ns codepair.domain.availability
  (:require [taoensso.timbre :as timbre]
            [adi.core :as adi]
            [clojure.set :as set]))


(defn yank-genericid [thing]
  (if (:+ thing)
    (-> thing :+ :db :id)
    (-> thing :db :id)))

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
                                   {:name gname}}}]
                                opts)]
     (apply adi/select select-args))))

(defn find-user-for-availability
  ([ds availability]
   (find-user-for-availability ds availability [:ids {:user :checked}]))
  ([ds availability opts]

   (let [select-args (set/union [ds
                                 {:user
                                  {:groups
                                   {:availabilities
                                    {:db
                                     {:id (yank-genericid availability)}}}}}]
                                opts)]
     (apply adi/select select-args))))

(defn find-user-for-request
  ([ds request]
   (find-user-for-request ds request [:ids {:user :checked}]))
  ([ds request opts]

   (let [select-args (set/union [ds
                                 {:user
                                  {:groups
                                   {:availabilities/requests
                                    {:db
                                     {:id (yank-genericid request)}}}}}]
                                opts)]
     (apply adi/select select-args))))

(defn find-request [ds id]
  (adi/select ds id :ids {:request :checked}))


(defn list-availabilities [ds gname]
  (adi/select ds
              {:availability
               {:groups
                {:name gname}}}
              :pull {:availability :checked}))

(defn list-availabilities-all [ds]
  (adi/select ds
              {:availability
               {:time '_}}
              :pull {:availability :checked}))

(defn update-availability [ds gname title availability]
  (adi/update! ds
               {:availability
                {:title title
                 :groups
                 {:name gname}}}
               {:availability availability}))

(defn update-request [ds gname id request]

  (let [requestF (if (:+ request)
                   {;;:db (-> request :+ :db)
                    :state (:state request)
                    :user (:user request)}
                   (dissoc request :db))]

    (adi/update! ds id
                {:request requestF})))

(defn list-tags-forgroup [ds gname]
  (adi/select ds
              {:tag
               {:name '_
                :availabilities/groups/name gname}}
              :pull {:tag :checked}))

(defn list-tags-all [ds]
  (adi/select ds
              {:tag
               {:name '_}}
              :pull {:tag :checked}))
