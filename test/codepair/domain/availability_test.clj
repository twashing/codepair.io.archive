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
  5
  (prop/for-all [_ gen/int]

                (let [gname "codepair"
                      ds (hlp/setup-db!)
                      availability {:time :ongoing
                                    :title "Need Help Installing Purescript"
                                    :description "I'm new to Purescript, and want to get a basic development environment."
                                    :tags #{{:name "purescript"} {:name "webdevelopment"} {:name "javascript"}}}]

                  (= '(:+ :description :tags :time :title)
                     (-> (av/add-availability ds gname availability)
                         first
                         :group
                         :availabilities
                         first
                         keys
                         sort)))))

(defspec test-list-availabilities
  5
  (prop/for-all [_ gen/int]

                (let [gname "codepair"
                      ds (hlp/setup-db!)
                      availability {:time :ongoing
                                    :title "Need Help Installing Purescript"
                                    :description "I'm new to Purescript, and want to get a basic development environment."
                                    :tags #{{:name "purescript"} {:name "webdevelopment"} {:name "javascript"}}}
                      a (av/add-availability ds gname availability)
                      b (av/list-availabilities ds gname)]

                  (and (= 2 (count b) )
                       (= '("Help Grokking Lambdas in Java" "Need Help Installing Purescript")
                          (map #(-> % :availability :title) b))))))

(defspec test-retrieve-availability
  5
  (prop/for-all [_ gen/int]

                (let [gname "codepair"
                      ds (hlp/setup-db!)

                      title "Need Help Installing Purescript"
                      availability {:time :ongoing
                                    :title title
                                    :description "I'm new to Purescript, and want to get a basic development environment."
                                    :tags #{{:name "purescript"} {:name "webdevelopment"} {:name "javascript"}}}
                      a (av/add-availability ds gname availability)
                      b (av/find-availability-by-title ds gname title)]

                  (= b
                     #{{:availability
                        {:description
                         "I'm new to Purescript, and want to get a basic development environment.",
                         :title "Need Help Installing Purescript",
                         :time :ongoing}}}))))

(comment

  (sh/log-info!)
  (midje.repl/autotest)
  (midje.repl/load-facts 'codepair.domain.availability-test)

  )
