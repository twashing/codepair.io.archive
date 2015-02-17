(ns codepair.handler-test
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
            [codepair.domain.availability :as av]))


(declare verify-assertion-request
         verify-assertion-requestS
         verify-assertion-response)

;; ** for some reason, valid body inputsream disappears when it arrives at the handler
;; trying groundhog to fix the problem - no dice
#_(defspec test-verify-assertion
  1
  (prop/for-all [_ gen/int]

                (let [a (mock/body (mock/request :post "/verify-assertion")
                                   (pr-str (verify-assertion-request)))
                      app (-> hdl/app
                              groundhog/groundhog)]

                  (timbre/debug (str "... " (slurp (:body a))))
                  (= '(:body :headers :status)
                     (sort (keys (with-redefs [client/post (constantly (tu/verify-assertion-response))]
                                   (app a))))))))

(defspec test-list-availabilities-all
  5
  (prop/for-all [_ gen/int]

                (let [gname "codepair"
                      ds (th/setup-db!)

                      availability {:time :ongoing
                                    :title "Need Help Installing Purescript"
                                    :description "I'm new to Purescript, and want to get a basic development environment."
                                    :tags #{{:name "purescript"} {:name "webdevelopment"} {:name "javascript"}}}

                      a (av/add-availability ds gname availability)
                      b (mock/request :get "/list-availabilities")
                      r1 (with-redefs [hdl/get-datastore (constantly ds)]
                           (hdl/app b))

                      r2 (-> r1 :body read-string)]

                  (and (= 200 (:status r1))
                       (= 2 (count r2))))))

(defspec test-list-availabilities-forgroup
  1
  (prop/for-all [_ gen/int]

                (let [gname "codepair"
                      ngname "group-two"
                      nuname "two"
                      availability {:time :ongoing
                                    :title "Need Help Installing Purescript"
                                    :description "I'm new to Purescript, and want to get a basic development environment."
                                    :tags #{{:name "purescript"} {:name "webdevelopment"} {:name "javascript"}}}

                      ds (th/setup-db!)
                      nuser (us/add-user ds nuname)

                      a (av/add-availability ds ngname availability)
                      b (mock/request :get "/list-availabilities" {:groupname ngname :username nuname})
                      r1 (with-redefs [hdl/get-datastore (constantly ds)]
                           (hdl/app b))

                      r2 (-> r1 :body read-string)]

                  (and (= 200 (:status r1))
                       (= 1 (count r2))))))

(defspec test-list-tags-forgroup
  1
  (prop/for-all [_ gen/int]

                (let [gname "codepair"
                      ngname "group-three"
                      nuname "three"
                      availability {:time :ongoing
                                    :title "Need Help Installing Purescript"
                                    :description "I'm new to Purescript, and want to get a basic development environment."
                                    :tags #{{:name "purescript"} {:name "webdevelopment"} {:name "javascript"}}}

                      ds (th/setup-db!)

                      nuser (us/add-user ds nuname)
                      a (av/add-availability ds ngname availability)

                      b (mock/request :get "/list-tags" {:groupname ngname :username nuname})
                      r1 (with-redefs [hdl/get-datastore (constantly ds)]
                           (hdl/app b))
                      r2 (-> r1 :body read-string)]

                  (and (= 200 (:status r1))
                       (= 3 (count r2))
                       (= '("purescript" "webdevelopment" "javascript")
                          (map #(-> % :tag :name) r2))))))

(defspec test-list-tags-all
  1
  (prop/for-all [_ gen/int]

                (let [gname "codepair"
                      ngname "group-four"
                      nuname "four"
                      availability {:time :ongoing
                                    :title "Need Help Installing Purescript"
                                    :description "I'm new to Purescript, and want to get a basic development environment."
                                    :tags #{{:name "purescript"} {:name "webdevelopment"} {:name "javascript"}}}

                      ds (th/setup-db!)

                      nuser (us/add-user ds nuname)
                      a (av/add-availability ds ngname availability)
                      b (mock/request :get "/list-tags")
                      r1 (with-redefs [hdl/get-datastore (constantly ds)]
                           (hdl/app b))
                      r2 (-> r1 :body read-string)]

                  (and (= 200 (:status r1))
                       (= 5 (count r2) )
                       (= '("purescript" "webdevelopment" "javascript" "java" "functionalprogramming")
                          (map #(-> % :tag :name) r2))))))

(defspec test-add-availability
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
                      a (mock/request :post "/add-availability" {:groupname ngname
                                                                 :username nuname
                                                                 :availability (pr-str availability)})

                      r1 (with-redefs [hdl/get-datastore (constantly ds)]
                           (hdl/app a))

                      r2 (av/find-availability-by-title ds ngname title)]

                  (and (= 200 (:status #spy/p r1))
                       (= 1 (count #spy/p r2))))))

(comment

  (sh/log-info!)
  (midje.repl/autotest)

  (require '[midje.repl])
  (midje.repl/load-facts 'codepair.handler-test)


  (def ds (th/setup-db!))
  (def gname "codepair")
  (def availability {:time :ongoing
                     :title "Need Help Installing Purescript"
                     :description "I'm new to Purescript, and want to get a basic development environment."
                     :tags #{{:name "purescript"} {:name "webdevelopment"} {:name "javascript"}}})

  (def a (av/add-availability ds gname availability))

  (av/list-availabilities ds gname)

  (av/list-availabilities-all ds)

  )
