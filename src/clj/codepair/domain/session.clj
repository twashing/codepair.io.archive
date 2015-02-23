(ns codepair.domain.session
  (:require [adi.core :as adi]
            [clojure.set :as set]))


(defn add-session [ds gname session]
  {:pre [(not (nil? (:begin session)))]}

  (adi/update! ds
               {:group
                {:name gname}}
               {:group/sessions session}))

;; fix later
#_(defn find-session-by-begin
  ([ds gname begin]
   (find-session-by-begin ds gname begin [:ids :pull {:session
                                                      {:participants
                                                       {:state :checked}}}]))
  ([ds gname begin opts]
   (let [select-args #spy/p (set/union [#_ds
                                 {:session
                                  {:begin begin
                                   :groups
                                   {:name gname}}}]
                                opts)]
     (apply adi/select select-args))))

(defn find-session-by-begin [ds gname begin]
  (adi/select ds
              {:session
               {:begin begin
                :groups
                {:name gname}}}
              :ids
              :pull {:session
                     {:participants
                      {:state :checked}}}))

(defn find-participant-insession [ds session participant]
  (adi/select ds
              {:participant
               {:user
                {:username (-> participant :user :username)}
                :sessions
                {:begin (-> session :session :begin)}}}
              :ids
              {:participant
               {:user
                {:username :checked}}}))

(defn list-sessions [ds gname]
  (adi/select ds
              {:session
               {:groups
                {:name gname}}}
              :ids
              :pull {:session :checked}))

(defn update-session [ds gname begin session]
  (adi/update! ds
               {:session
                {:begin begin
                 :groups
                 {:name gname}}}
               {:session session}))

(defn update-participant [ds session user participant]
  (adi/update! ds
               {:participant
                {:user
                 {:username (-> user :user :username)}
                 :sessions
                 {:begin (-> session :session :begin)}}}
               participant))

(defn update-all-participants [ds session user state-kw]
  (adi/update! ds
               {:participant
                {:sessions
                 {:begin (-> session :session :begin)}}}
               {:participant {:state state-kw}}))
