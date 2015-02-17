(ns codepair.http.domain
  (:require [codepair.domain.availability :as av]))


(defn list-availabilities [ds req]

  (let [gname (-> req :params :groupname)]

    (if gname
      (av/list-availabilities ds gname)
      (av/list-availabilities-all ds))))

(defn add-availability [ds req]

  (let [gname (-> req :params :groupname)
        availability (-> req :params :availability)]

    (av/add-availability ds gname availability)))

(defn list-tags [ds req]

  (let [gname (-> req :params :groupname)]

    (if gname
      (av/list-tags-forgroup ds gname)
      (av/list-tags-all ds))))
