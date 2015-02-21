(ns codepair.util)


(defn groupname-fromusername [uname]
  (if (= "codepair" uname)
      uname
      (str "group-" uname)))

(defn groupname-fromuser [user]

  (let [uname (if (:user user)
                 (-> user :user :username)
                 (-> user :username))]
    (groupname-fromusername uname)))
