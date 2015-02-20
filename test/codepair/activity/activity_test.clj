(ns codepair.activity.activity-test
  (:require [midje.sweet]
            [midje.repl]
            [clojure.pprint :as pp]
            [clojure.test :refer :all]
            [clojure.test.check.clojure-test :refer :all]
            [clojure.test.check.generators :as gen]
            [clojure.test.check.properties :as prop]
            [taoensso.timbre :as timbre]

            [codepair.test-util :as tu]
            [codepair.domain.test-helper :as th]
            [codepair.shell :as sh]
            [codepair.domain.user :as us]
            [codepair.domain.availability :as av]
            [codepair.activity.activity :as ay]))


(defspec test-request-connection
  1
  (prop/for-all [_ gen/int]

                (let [ds (th/setup-db!)
                      gname "codepair"
                      ngname "group-one"
                      nuname "one"
                      title "Need Help Installing Purescript"
                      availability {:time :ongoing
                                    :title title
                                    :description "I'm new to Purescript, and want to get a basic development environment."
                                    :tags #{{:name "purescript"} {:name "webdevelopment"} {:name "javascript"}}
                                    :requests #{}}

                      navailability (av/add-availability ds gname availability)

                      nuser (us/add-user ds nuname)
                      usera (us/find-user-by-username ds "codepair")
                      userb (us/find-user-by-username ds nuname)

                      r2 (ay/request-connection ds availability userb usera)]

                  (and
                       (= 1 (count r2))
                       ))))

(comment

  (sh/log-info!)
  (midje.repl/autotest)

  (midje.repl/load-facts 'codepair.activity.activity-test)


  (def ds (th/setup-db!))
  (def gname "codepair")
  (def ngname "group-one")
  (def nuname "one")
  (def title "Need Help Installing Purescript")
  (def availability {:time :ongoing
                     :title title
                     :description "I'm new to Purescript, and want to get a basic development environment."
                     :tags #{{:name "purescript"} {:name "webdevelopment"} {:name "javascript"}}
                     :requests #{}})

  (def nuser (us/add-user ds nuname))
  (def navailability (av/add-availability ds gname availability))


  (def usera (first (us/find-user-by-username ds "codepair")))
  (def userb #spy/p (first (us/find-user-by-username ds nuname)))

  (def r2 (ay/request-connection ds availability gname userb usera))


  (def one (av/list-availabilities ds "codepair"))
  (def two (av/list-availabilities ds ngname))

  (av/find-availability-by-title ds gname title)

  )

#_(defspec test-update-availability
  1
  (prop/for-all [_ gen/int]

                (let [gname "codepair"
                      ngname "group-one"
                      nuname "one"
                      title "Need Help Installing Purescript"
                      availability {:time :ongoing
                                    :title title
                                    :description "I'm new to Purescript, and want to get a basic development environment."
                                    :tags #{{:name "purescript"} {:name "webdevelopment"} {:name "javascript"}}}

                      ds (th/setup-db!)
                      nuser (us/add-user ds nuname)
                      ndescription "new description"
                      navailability {:description ndescription}

                      a (av/add-availability ds ngname availability)
                      b (mock/request :post "/update-availability" {:groupname ngname
                                                                    :username nuname
                                                                    :availability (pr-str navailability)})

                      r1 (with-redefs [hdl/get-datastore (constantly ds)]
                           (hdl/app b))

                      r2 (av/find-availability-by-title ds ngname title)]

                  (and (= 200 (:status r1))
                       (= 1 (count r2))
                       (= ndescription (-> r2 first :availability :description))))))
