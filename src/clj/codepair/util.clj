(ns codepair.util)



(defn username-fromuser [user]
  (if (:user user)
    (-> user :user :username)
    (-> user :username)))

(defn groupname-fromusername [uname]
  (if (= "codepair" uname)
      uname
      (str "group-" uname)))

(defn groupname-fromuser [user]
  (let [uname (username-fromuser user)]
    (groupname-fromusername uname)))
