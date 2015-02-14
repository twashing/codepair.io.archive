(ns codepair.domain.user-test
  (:require [midje.sweet :refer :all]
            [midje.repl :repl :all]
            [clojure.test.check.clojure-test :refer :all]
            [clojure.test.check.generators :as gen]
            [clojure.test.check.properties :as prop]

            [bkell.domain.user :as us]

            [codepair.domain.test-helper :as hlp]))


(defspec test-no-user?
  10
  (prop/for-all [_ gen/int]

                (let [user-name "fubar"
                      ds (hlp/setup-db!)]

                  (us/no-duplicate-user? ds user-name))))

(comment

  (sh/log-info!)
  (midje.repl/autotest)
  (midje.repl/load-facts)

  )
