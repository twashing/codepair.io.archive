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
                      _ (th/setup-db!)

                      ds (-> sh/system :spittoon :db)

                      availability {:time :ongoing
                                    :title "Need Help Installing Purescript"
                                    :description "I'm new to Purescript, and want to get a basic development environment."
                                    :tags #{{:name "purescript"} {:name "webdevelopment"} {:name "javascript"}}}

                      a (av/add-availability ds gname availability)

                      b (mock/request :get "/list-availabilities")

                      r1 (hdl/app b)
                      r2 (-> r1 :body read-string)]

                  (and (= 200 (:status r1))
                       (= 2 (count r2))))))


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
