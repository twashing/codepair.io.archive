(ns codepair.domain.group-test
  (:require [clojure.test :refer :all]
            [clojure.test.check.clojure-test :refer :all]
            [clojure.test.check.generators :as gen]
            [clojure.test.check.properties :as prop]
            [bkell.config :as config]


            [codepair.shell :as sh]
            [codepair.domain.group :as gp]
            [codepair.domain.test-helper :as hlp]

            [midje.repl]))


(defspec test-no-duplicate-group?
  10
  (prop/for-all [_ gen/int]

                (let [group-name "fubar"
                      ds (hlp/setup-db!)]

                  (gp/no-duplicate-group? ds group-name))))


(comment

  (sh/log-info!)
  (midje.repl/autotest)
  (midje.repl/load-facts)

  )
