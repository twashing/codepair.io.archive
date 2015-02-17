(ns codepair.http.domain
  (:require [codepair.domain.availability :as av]))


(defn list-availabilities [ds req]

  (let [gname (-> req :params :authentication-data :groupname)]

    (if gname
      (av/list-availabilities ds gname)
      (av/list-availabilities-all ds))))

(defn add-availability [ds req]

  (let [gname (-> req :params :authentication-data :groupname)
        availability (-> req :params :availability)]

    (av/add-availability ds gname availability)))
