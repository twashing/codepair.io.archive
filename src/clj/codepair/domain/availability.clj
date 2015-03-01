(ns codepair.domain.availability
  (:require [taoensso.timbre :as timbre]
            [adi.core :as adi]
            [clojure.set :as set]
            [codepair.util :as ul]))


(defn yank-genericid [thing]
  (if (:+ thing)
    (-> thing :+ :db :id)
    (-> thing :db :id)))

;; Create
(defn add-availability [ds gname availability]
  {:pre [(= :ongoing (:time availability))]}

  (adi/update! ds
               {:group
                {:name gname}}
               {:group/availabilities availability}))

;; Finders
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

(defn search-availabilities [ds search-term]

  (timbre/debug (str "search-availabilities CALLED: searchterm: " search-term))
  (let [allAs (adi/select ds {:availability {:title '_}}
                          :pull {:availability
                                 {:tags
                                  {:name :checked}}})
        reS (re-pattern search-term)]

    (filterv (fn [x]
               (or (re-find reS (-> x :availability :title))
                   (re-find reS (-> x :availability :description))))
             allAs)))

#_(defmacro extract-adi-searchterm [searchterm]
  '(into '()
        (reverse
         (concat (quote (?fulltext))
                 [searchterm]))))

#_(defn search-availabilities [ds search-term]

  (timbre/debug (str "search-availabilities CALLED: searchterm: " '(into '()
                                                                         (reverse
                                                                          (concat (quote (?fulltext))
                                                                                  [searchterm])))))
  (let [r1 (adi/select ds {:availability
                           {:title '(into '()
                                          (reverse
                                           (concat (quote (?fulltext))
                                                   [searchterm])))}})

        _ (timbre/debug (str "sanity check 1: " r1))
        r2 (adi/select ds {:availability
                           {:description '(into '()
                                                (reverse
                                                 (concat (quote (?fulltext))
                                                         [searchterm])))}})

        _ (timbre/debug (str "sanity check 2: " r2))]

    (timbre/debug (str "r1: " r1))
    (timbre/debug (str "r2: " r2))
    (into #{} (concat r1 r2))))


;; Update
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


;; Listings
(defn list-availabilities [ds gname]
  (adi/select ds
              {:availability
               {:groups
                {:name gname}}}
              :pull {:availability
                     {:tags
                      {:name :checked}}}))

(defn list-availabilities-all [ds]
  (adi/select ds
              {:availability
               {:time '_}}
              :pull {:availability
                     {:tags
                      {:name :checked}}}))

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

(defn list-incoming-requests [ds owner]
  (adi/select ds
              {:request
               {:availabilities
                {:groups
                 {:users
                  {:username (ul/username-fromuser owner)}}}}}
              :ids))

(defn list-submitted-requests [ds submitter]
  (adi/select ds
              {:request
               {:user
                {:username (ul/username-fromuser submitter)}}}
              :ids))
