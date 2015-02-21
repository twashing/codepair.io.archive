(ns codepair.activity.activity-test
  (:require [midje.sweet]
            [midje.repl]
            [clojure.pprint :as pp]
            [clojure.test :refer :all]
            [clojure.test.check.clojure-test :refer :all]
            [clojure.test.check.generators :as gen]
            [clojure.test.check.properties :as prop]
            [taoensso.timbre :as timbre]
            [adi.core :as adi]

            [codepair.test-util :as tu]
            [codepair.domain.test-helper :as th]
            [codepair.shell :as sh]
            [codepair.domain.user :as us]
            [codepair.domain.availability :as av]
            [codepair.activity.activity :as ay]))


(defn default-availability-title [] "Need Help Installing Purescript")

(defn get-ds []
  (th/setup-db!))

(defn get-availability
  ([] (get-availability (default-availability-title)))
  ([title]
   {:time :ongoing
    :title title
    :description "I'm new to Purescript, and want to get a basic development environment."
    :tags #{{:name "purescript"} {:name "webdevelopment"} {:name "javascript"}}
    :requests #{}}))

(defn create-request
  ([] (create-request (get-ds)))
  ([ds]
   (let [gname "codepair"
         ngname "group-one"
         nuname "one"
         title "Need Help Installing Purescript"
         availability (get-availability title)

         navailability (av/add-availability ds gname availability)

         nuser (us/add-user ds nuname)
         usera (first (us/find-user-by-username ds "codepair"))
         userb (first (us/find-user-by-username ds nuname))]

     (ay/request-connection ds availability gname userb))))


(defspec test-request-connection
  1
  (prop/for-all [_ gen/int]

                (let [r2 (create-request)]

                  (and (= 1 (count r2))
                       (= '(:availability :db)
                          (keys (first r2)))
                       (= 1 (count (-> r2 first :availability :requests)))))))


(defspec test-respondto-request
  1
  (prop/for-all [_ gen/int]

                (let [ds (get-ds)

                      request (with-redefs [get-ds (constantly ds)]
                                       (-> (create-request) first :availability :requests first))
                      rid (-> request :+ :db :id)

                      usera (first (us/find-user-by-username ds "codepair"))

                      r2 (with-redefs [get-ds (constantly ds)]
                           (ay/respondto-request ds request usera :connection-accepted))

                      r3 (av/find-request ds rid)]

                  (and (= rid
                          (-> r3 first :db :id))
                       (= :connection-accepted
                          (-> r3 first :request :state))))))

(comment

  (sh/log-info!)
  (midje.repl/autotest)
  (midje.repl/load-facts 'codepair.activity.activity-test)


  (def ds (get-ds))
  (def r1 (first (create-request ds)))

  (def gname "codepair")
  (def title (default-availability-title))
  (av/find-availability-by-title ds gname title)
  (av/find-user-for-request ds (-> r1 :availability :requests first))

  (av/list-incoming-requests ds {:username "codepair"})
  #{{:db {:id 17592186045432}, :request {:state :connection-requested}}
    {:db {:id 17592186045449}, :request {:state :connection-requested}}
    {:db {:id 17592186045433}, :request {:state :connection-accepted}}}

  (av/list-submitted-requests ds {:username "codepair"})
  #{}

  (av/list-submitted-requests ds {:username "one"})
  #{{:db {:id 17592186045449}, :request {:state :connection-requested}}}

  )
