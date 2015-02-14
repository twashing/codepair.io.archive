(ns codepair.domain.session-test
  (:require [codepair.domain.session :refer :all]
            [midje.sweet :refer :all]))

(ns codepair.domain.session-test
  (:require [midje.sweet :refer :all]
            [midje.repl :repl :all]
            [clojure.test.check.clojure-test :refer :all]
            [clojure.test.check.generators :as gen]
            [clojure.test.check.properties :as prop]

            [codepair.domain.user :as us]
            [codepair.domain.session :as ss]
            [codepair.domain.test-helper :as hlp]))



(defspec test-add-session
  5
  (prop/for-all [_ gen/int]

                (let [gname "codepair"
                      ds (hlp/setup-db!)
                      session {:begin #inst "2014-11-10T09:00:00.00Z"}

                      a (ss/add-session ds gname session)]

                  (= '(:+ :begin)
                     (-> a
                         first
                         :group
                         :sessions
                         first
                         keys)))))

(defspec test-list-sessions
  5
  (prop/for-all [_ gen/int]

                (let [gname "codepair"
                      ds (hlp/setup-db!)
                      session {:begin #inst "2014-11-10T09:00:00.00Z"}
                      a (ss/add-session ds gname session)
                      b (ss/list-sessions ds gname)]

                  (and (= 2 (count b) )
                       (= '(#inst "2014-12-10T09:00:00.000-00:00" #inst "2014-11-10T09:00:00.000-00:00")
                          (map #(-> % :session :begin) b))))))

(defspec test-retrieve-session
  5
  (prop/for-all [_ gen/int]

                (let [gname "codepair"
                      ds (hlp/setup-db!)

                      begin #inst "2014-11-10T09:00:00.00Z"
                      session {:begin begin}
                      a (ss/add-session ds gname session)
                      b (ss/find-session-by-begin ds gname begin)]

                  (= b
                     #{{:session {:begin #inst "2014-11-10T09:00:00.000-00:00"}}}))))

(comment

  (sh/log-info!)
  (midje.repl/autotest)
  (midje.repl/load-facts 'codepair.domain.session-test)

  )
