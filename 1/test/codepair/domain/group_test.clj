(ns codepair.domain.group-test
  (:require [clojure.test :refer :all]
            [clojure.test.check.clojure-test :refer :all]
            [clojure.test.check.generators :as gen]
            [clojure.test.check.properties :as prop]
            [slingshot.slingshot :refer [try+ throw+]]
            [bkell.config :as config]

            [codepair.shell :as sh]
            [codepair.domain.group :as gp]
            [codepair.domain.user :as us]
            [codepair.domain.test-helper :as hlp]

            [midje.repl]))


(defspec test-no-duplicate-group?
  10
  (prop/for-all [_ gen/int]

                (let [group-name "fubar"
                      ds (hlp/setup-db!)]

                  (gp/no-duplicate-group? ds group-name))))

(defspec test-generate-nominal-group
  10
  (prop/for-all [_ gen/int]

                (let [group-name "one"
                      ds (hlp/setup-db!)]

                  (let [a (try+ (gp/generate-nominal-group ds group-name)
                                (catch [:type :assertion-error] e &throw-context))]

                    (= (sort '(:+/db/id :name :users :owner))
                       (sort (keys a)))))))

(defspec test-add-group
  10
  (prop/for-all [_ gen/int]

                (let [group-name "one"
                      ds (hlp/setup-db!)]

                  (let [a (gp/add-group ds group-name)]

                    (and (= (sort '(:+ :name :users :owner))
                            (-> a first :system :groups first keys sort))

                         (not (empty? (us/find-user-by-username ds "user-one"))))))))

(defspec test-list-groups
  10
  (prop/for-all [_ gen/int]

                (let [ds (hlp/setup-db!)
                      result (gp/list-groups ds)]

                  (and (= 1 (count result))
                       (= result #{{:name "codepair"}})))))



(comment

  (sh/log-info!)
  (midje.repl/autotest)
  (midje.repl/load-facts)

  )
