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

(defspec test-initialized-database
  5
  (prop/for-all [_ gen/int]

                (let [env (:test (config/load-edn "config-codepair.edn"))
                      _ (sh/db-create env)]

                  (= (-> (sh/db-init env)
                         first
                         keys)
                   '(:system :db)))))

(defspec started-system-has-expected-components
  5
  (prop/for-all [_ gen/int]

                (sh/start {:shell {}
                           :spittoon {:env (:test (config/load-edn "config-codepair.edn"))
                                      :recreate? true}})

                (= '(:shell :spittoon) (keys sh/system))))

(comment

  (sh/log-info!)
  (midje.repl/autotest)
  (midje.repl/load-facts 'codepair.shell-test)

  )
