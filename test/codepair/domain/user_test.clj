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


(comment

  (sh/log-info!)
  (midje.repl/autotest)
  (midje.repl/load-facts)

  )
