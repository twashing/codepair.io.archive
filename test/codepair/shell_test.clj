(ns codepair.shell-test
  (:require [clojure.test :refer :all]
            [clojure.test.check.clojure-test :refer :all]
            [clojure.test.check.generators :as gen]
            [clojure.test.check.properties :as prop]
            [bkell.config :as config]

            [codepair.shell :as sh]

            [midje.repl]
            ))

(defspec test-created-database
  5
  (prop/for-all [_ gen/int]

                (let [env (:test (config/load-edn "config-codepair.edn"))]

                  (= (keys (sh/db-create env))
                     '(:meta :connection :schema)))))

(comment

  (sh/log-info!)
  (midje.repl/autotest)
  (midje.repl/load-facts))
