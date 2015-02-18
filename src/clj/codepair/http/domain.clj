(ns codepair.http.domain
  (:require [codepair.domain.availability :as av]
            [codepair.domain.session :as ss]))


;; Listings
(defn list-availabilities [ds req]

  (let [gname (-> req :params :groupname)]

    (if gname
      (av/list-availabilities ds gname)
      (av/list-availabilities-all ds))))

(defn list-tags [ds req]

  (let [gname (-> req :params :groupname)]

    (if gname
      (av/list-tags-forgroup ds gname)
      (av/list-tags-all ds))))

(defn list-sessions [ds req]

  (let [gname (-> req :params :groupname)]

    (if gname
      (ss/list-sessions ds gname))))


;; Availabilities
(defn add-availability [ds req]

  (identity req)
  (let [gname (-> req :params :groupname)
        availability (-> req :params :availability read-string)]

    (av/add-availability ds gname availability)))

(defn find-availability [ds req]

  (let [gname (-> req :params :groupname)
        title (-> req :params :title)]

    (av/find-availability-by-title ds gname title)))

(defn update-availability [ds req]

  (let [gname (-> req :params :groupname)
        title (-> req :params :title)
        availability (-> req :params :availability read-string)]

    (av/update-availability ds gname title availability)))



;; Sessions
(defn add-session [ds req]

  (identity req)
  (let [gname (-> req :params :groupname)
        session (-> req :params :session read-string)]

    (ss/add-session ds gname session)))

(defn find-session [ds req]

  (let [gname (-> req :params :groupname)
        begin (-> req :params :begin)]

    (ss/find-session-by-begin ds gname begin)))

(defn update-session [ds req]

  (let [gname (-> req :params :groupname)
        begin (-> req :params :begin)
        session (-> req :params :session read-string)]

    (ss/update-session ds gname begin session)))
