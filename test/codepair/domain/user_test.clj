(ns codepair.domain.user-test
  (:require [midje.sweet :refer :all]
            [midje.repl :repl :all]
            [clojure.test.check.clojure-test :refer :all]
            [clojure.test.check.generators :as gen]
            [clojure.test.check.properties :as prop]

            [codepair.domain.group :as gp]
            [codepair.domain.user :as us]

            [codepair.domain.test-helper :as hlp]))


(defspec test-no-user?
  10
  (prop/for-all [_ gen/int]

                (let [user-name "fubar"
                      ds (hlp/setup-db!)]

                  (us/no-duplicate-user? ds user-name))))

(defspec test-add-user
  10
  (prop/for-all [_ gen/int]

                (let [user-name "one"
                      ds (hlp/setup-db!)]

                  (let [a (us/add-user ds user-name)]

                    (and (= (sort '(:+ :name :users :owner))
                            (-> a first :system :groups first keys sort))

                         (not (empty? (gp/find-group-by-name ds "group-one"))))))))

(defspec test-list-users-ingroup
  5
  (prop/for-all [_ gen/int]

                (let [gname "codepair"
                      ds (hlp/setup-db!)
                      result (us/list-users ds gname)]

                  (and (= 1 (count result))

                       (= (-> result first :user)
                          {:username "codepair",
                           :lastname "codepair",
                           :password "default",
                           :firstname "codepair",
                           :email "codepair"})))))

(defspec test-retrieve-user
  5
  (prop/for-all [_ gen/int]

                (let [user-name "one"
                      ds (hlp/setup-db!)]

                  (let [a (us/add-user ds user-name)
                        b (us/find-user-by-username ds user-name)]

                    (= (first b)
                       {:user
                        {:email "one",
                         :firstname "one",
                         :password "default",
                         :lastname "one",
                         :username "one"}})))))

(defspec test-update-user
  5
  (prop/for-all [_ gen/int]

                (let [uname "codepair"
                      ds (hlp/setup-db!)]

                  (let [a (us/update-user ds uname {:email "one",
                                                    :firstname "one",
                                                    :lastname "one"})
                        b (us/find-user-by-username ds uname)]

                    (= (first b)
                       {:user
                        {:email "one",
                         :firstname "one",
                         :password "default",
                         :lastname "one",
                         :username "codepair"}})))))

(defspec test-list-all-users
  5
  (prop/for-all [_ gen/int]

                (let [gname "codepair"
                      nuname "one"

                      ds (hlp/setup-db!)
                      a (us/add-user ds nuname)
                      b (us/list-users-all ds)]

                  (and (= 2 (count b))
                       (= '("codepair" "one")
                          (map #(-> % :user :username) b))))))

(comment

  (sh/log-info!)
  (midje.repl/autotest)
  (midje.repl/load-facts 'codepair.domain.user-test))
