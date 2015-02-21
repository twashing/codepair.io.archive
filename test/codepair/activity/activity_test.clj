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
            [codepair.domain.session :as ss]
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
  (def begin #inst "2014-12-10T09:00:00.000-00:00",)
  (def availability (first (av/find-availability-by-title ds gname title)))
  (def one (first (us/find-user-by-username ds "one")))
  (def owner {:user {:username "codepair"}})


  (av/find-user-for-request ds (-> r1 :availability :requests first))

  ;; 1
  (av/list-incoming-requests ds {:username "codepair"})
  #{{:db {:id 17592186045432}, :request {:state :connection-requested}}
    {:db {:id 17592186045449}, :request {:state :connection-requested}}
    {:db {:id 17592186045433}, :request {:state :connection-accepted}}}

  (av/list-submitted-requests ds {:username "codepair"})
  #{}

  (av/list-submitted-requests ds {:username "one"})
  #{{:db {:id 17592186045449}, :request {:state :connection-requested}}}


  (av/find-user-for-availability ds availability)


  (ay/ensureuser-ownsavailability ds availability owner)


  ;; 2
  (ay/establish-session ds owner availability one)
  [{:group {:sessions #{{:+ {:db {:id 17592186045454}},
                         :begin begin
                         :availability 17592186045438,
                         :state :session-active,
                         :participants #{{:+ {:db {:id 17592186045455}},
                                          :user #{17592186045444},
                                          :state :participant-active}}}},
            :name "codepair"},
    :db {:id 17592186045428}}]


  ;; 3
  (def session (first (ss/find-session-by-begin ds gname begin)))
  {:db {:id 17592186045429},
   :session
   {:participants
    #{{:state :participant-active, :+ {:db {:id 17592186045430}}}},
    :state :session-exited,
    :begin #inst "2014-12-10T09:00:00.000-00:00",
    :end #inst "2014-12-10T09:20:00.000-00:00"}}

  (ss/list-sessions ds gname)
  #{{:db {:id 17592186045451}, :session {:state :session-active, :begin #inst "2014-12-10T09:00:00.000-00:00"}}
    {:db {:id 17592186045429}, :session {:state :session-exited, :end #inst "2014-12-10T09:20:00.000-00:00", :begin #inst "2014-12-10T09:00:00.000-00:00"}}}


  (ss/find-participant-insession ds session one)
  #{{:db {:id 17592186045452}, :participant {:state :participant-active}}}

  (ay/ensureuser-issessionguest ds session one)
  true

  (adi/select ds
              {:participant
               {:user
                {:username (-> one :user :username)}
                :sessions
                {:begin (-> session :session :begin)}}}
              :ids
              {:participant
               {:user
                {:username :checked}}})

  #{{:db {:id 17592186045452}, :participant {:state :participant-active}}}

  ;; ** TODO
  (ay/exit-session ds session one)


  )
