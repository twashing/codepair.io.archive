(ns codepair.http.handler-test
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

(comment

  (sh/log-info!)
  (midje.repl/autotest)

  (midje.repl/load-facts 'codepair.http.handler-test))
