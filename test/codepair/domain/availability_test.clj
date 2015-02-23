(ns codepair.domain.availability-test
  (:require [midje.sweet :refer :all]
            [midje.repl :repl :all]
            [clojure.test.check.clojure-test :refer :all]
            [clojure.test.check.generators :as gen]
            [clojure.test.check.properties :as prop]
            [taoensso.timbre :as timbre]

            [codepair.domain.availability :as av]
            [codepair.domain.user :as us]
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

                  (and (= '(:db :availability) (-> b first keys))
                       (= (-> b first (dissoc :db))
                          {:availability
                           {:description
                            "I'm new to Purescript, and want to get a basic development environment.",
                            :title "Need Help Installing Purescript",
                            :time :ongoing}})))))

(defspec test-update-availability
  5
  (prop/for-all [_ gen/int]

                (let [gname "codepair"
                      ds (hlp/setup-db!)

                      title "Need Help Installing Purescript"
                      utitle "Foobar Title"
                      availability {:time :ongoing
                                    :title title
                                    :description "I'm new to Purescript, and want to get a basic development environment."
                                    :tags #{{:name "purescript"} {:name "webdevelopment"} {:name "javascript"}}}
                      a (av/add-availability ds gname availability)
                      b (av/update-availability ds gname title {:title utitle})
                      c (av/find-availability-by-title ds gname utitle)]

                  (and (= '(:db :availability) (-> c first keys))
                       (= (-> c first (dissoc :db))
                          {:availability
                            {:description
                             "I'm new to Purescript, and want to get a basic development environment.",
                             :title utitle,
                             :time :ongoing}})))))

(defspec test-list-tags-forgroup
  5
  (prop/for-all [_ gen/int]

                (let [gname "codepair"
                      ngname "group-one"
                      nuname "one"
                      availability {:time :ongoing
                                    :title "Need Help Installing Purescript"
                                    :description "I'm new to Purescript, and want to get a basic development environment."
                                    :tags #{{:name "purescript"} {:name "webdevelopment"} {:name "javascript"}}}

                      ds (hlp/setup-db!)
                      nuser (us/add-user ds nuname)

                      a (av/add-availability ds ngname availability)
                      b (av/list-tags-forgroup ds gname)]

                  (and (= 2 (count b) )
                       (= '("java" "functionalprogramming")
                          (map #(-> % :tag :name) b))))))

(defspec test-list-tags-all
  5
  (prop/for-all [_ gen/int]

                (let [gname "codepair"
                      ngname "group-one"
                      nuname "one"
                      availability {:time :ongoing
                                    :title "Need Help Installing Purescript"
                                    :description "I'm new to Purescript, and want to get a basic development environment."
                                    :tags #{{:name "purescript"} {:name "webdevelopment"} {:name "javascript"}}}

                      ds (hlp/setup-db!)
                      nuser (us/add-user ds nuname)

                      a (av/add-availability ds ngname availability)
                      b (av/list-tags-all ds)]

                  (and (= 5 (count b) )
                       (= '("purescript" "webdevelopment" "javascript" "java" "functionalprogramming")
                          (map #(-> % :tag :name) b))))))


(comment

  (sh/log-info!)
  (midje.repl/autotest)
  (midje.repl/load-facts 'codepair.domain.availability-test))
