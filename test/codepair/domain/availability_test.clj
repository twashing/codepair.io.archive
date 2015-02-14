(ns codepair.domain.availability-test
  (:require [midje.sweet :refer :all]
            [midje.repl :repl :all]
            [clojure.test.check.clojure-test :refer :all]
            [clojure.test.check.generators :as gen]
            [clojure.test.check.properties :as prop]

            [codepair.domain.user :as us]
            [codepair.domain.availability :as av]
            [codepair.domain.test-helper :as hlp]))



(defspec test-add-availability
  10
  (prop/for-all [_ gen/int]

                (let [uname "codepair"
                      ds (hlp/setup-db!)
                      availability {:time :ongoing
                                    :title "Need Help Installing Purescript"
                                    :description "I'm new to Purescript, and want to get a basic development environment."
                                    :tags #{{:name "purescript"} {:name "webdevelopment"} {:name "javascript"}}}]

                  (= '(:+ :description :tags :time :title)
                     (-> (av/add-availability ds uname availability)
                         first
                         :group
                         :availabilities
                         first
                         keys
                         sort)))))

(comment

  (sh/log-info!)
  (midje.repl/autotest)
  (midje.repl/load-facts 'codepair.domain.availability-test)

  )
