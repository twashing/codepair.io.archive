(ns codepair.http.domain
  (:require [codepair.domain.availability :as av]))


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
        availability (-> req :params :availability)]

    (av/update-availability ds gname title availability)))
