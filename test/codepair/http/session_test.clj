(ns codepair.http.session-test
  (:require [midje.sweet]
            [midje.repl]
            [clojure.pprint :as pp]
            [clojure.test :refer :all]
            [clojure.test.check.clojure-test :refer :all]
            [clojure.test.check.generators :as gen]
            [clojure.test.check.properties :as prop]
            [ring.mock.request :as mock]
            [clj-http.client :as client]
            [taoensso.timbre :as timbre]
            [noisesmith.groundhog :as groundhog]

            [codepair.test-util :as tu]
            [codepair.domain.test-helper :as th]
            [codepair.shell :as sh]
            [codepair.domain.user :as us]
            [codepair.http.handler :as hdl]
            [codepair.domain.availability :as av]
            [codepair.domain.session :as ss]))


(defspec test-list-sessions-all
  5
  (prop/for-all [_ gen/int]

                (let [gname "codepair"
                      ds (th/setup-db!)

                      session {:begin #inst "2014-12-11T09:00:00.00Z"
                               :end #inst "2014-12-12T09:20:00.00Z"
                               :participants []}

                      a (ss/add-session ds gname session)
                      b (mock/request :get "/list-sessions" {:groupname gname})
                      r1 (with-redefs [hdl/get-datastore (constantly ds)]
                           (hdl/app b))

                      r2 (-> r1 :body read-string)]

                  (and (= 200 (:status r1))
                       (= 2 (count r2))))))


#_(defspec test-list-sessions-forgroup
  1
  (prop/for-all [_ gen/int]

                (let [gname "codepair"
                      ngname "group-two"
                      nuname "two"
                      session {:time :ongoing
                                    :title "Need Help Installing Purescript"
                                    :description "I'm new to Purescript, and want to get a basic development environment."
                                    :tags #{{:name "purescript"} {:name "webdevelopment"} {:name "javascript"}}}

                      ds (th/setup-db!)
                      nuser (us/add-user ds nuname)

                      a (av/add-session ds ngname session)
                      b (mock/request :get "/list-sessions" {:groupname ngname :username nuname})
                      r1 (with-redefs [hdl/get-datastore (constantly ds)]
                           (hdl/app b))

                      r2 (-> r1 :body read-string)]

                  (and (= 200 (:status r1))
                       (= 1 (count r2))))))

(comment

  (sh/log-info!)
  (midje.repl/autotest)

  (midje.repl/load-facts 'codepair.http.session-test))


#_(defspec test-add-session
  1
  (prop/for-all [_ gen/int]

                (let [gname "codepair"
                      ngname "group-one"
                      nuname "one"
                      title "Need Help Installing Purescript"
                      session {:time :ongoing
                                    :title title
                                    :description "I'm new to Purescript, and want to get a basic development environment."
                                    :tags #{{:name "purescript"} {:name "webdevelopment"} {:name "javascript"}}}

                      ds (th/setup-db!)
                      nuser (us/add-user ds nuname)
                      a (mock/request :post "/add-session" {:groupname ngname
                                                                 :username nuname
                                                                 :session (pr-str session)})

                      r1 (with-redefs [hdl/get-datastore (constantly ds)]
                           (hdl/app a))

                      r2 (av/find-session-by-title ds ngname title)]

                  (and (= 200 (:status r1))
                       (= 1 (count r2))))))

#_(defspec test-find-session
  1
  (prop/for-all [_ gen/int]

                (let [gname "codepair"
                      ngname "group-one"
                      nuname "one"
                      title "Need Help Installing Purescript"
                      session {:time :ongoing
                                    :title title
                                    :description "I'm new to Purescript, and want to get a basic development environment."
                                    :tags #{{:name "purescript"} {:name "webdevelopment"} {:name "javascript"}}}

                      ds (th/setup-db!)
                      nuser (us/add-user ds nuname)
                      a (av/add-session ds ngname session)
                      b (mock/request :get "/find-session" {:groupname ngname
                                                                 :title title})

                      r1 (with-redefs [hdl/get-datastore (constantly ds)]
                           (hdl/app b))]

                  (and (= 200 (:status r1))
                       (= 1 (count (-> r1 :body read-string)))
                       (= title (-> r1 :body read-string first :session :title))))))

#_(defspec test-update-session
  1
  (prop/for-all [_ gen/int]

                (let [gname "codepair"
                      ngname "group-one"
                      nuname "one"
                      title "Need Help Installing Purescript"
                      session {:time :ongoing
                                    :title title
                                    :description "I'm new to Purescript, and want to get a basic development environment."
                                    :tags #{{:name "purescript"} {:name "webdevelopment"} {:name "javascript"}}}

                      ds (th/setup-db!)
                      nuser (us/add-user ds nuname)
                      ndescription "new description"
                      nsession {:description ndescription}

                      a (av/add-session ds ngname session)
                      b (mock/request :post "/update-session" {:groupname ngname
                                                                    :username nuname
                                                                    :session (pr-str nsession)})

                      r1 (with-redefs [hdl/get-datastore (constantly ds)]
                           (hdl/app b))

                      r2 (av/find-session-by-title ds ngname title)]

                  (and (= 200 (:status r1))
                       (= 1 (count r2))
                       (= ndescription (-> r2 first :session :description))))))
