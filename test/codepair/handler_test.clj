(ns codepair.handler-test
  (:import [java.io ByteArrayInputStream])
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
            [codepair.http.handler :as hdl]))


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
                     (sort (keys (with-redefs [client/post (constantly (verify-assertion-response))]
                                   (app #spy/p a))))))))

(comment

  (sh/log-info!)
  (midje.repl/autotest)

  (require '[midje.repl])
  (midje.repl/load-facts 'codepair.handler-test))

(defn create-body-inputstream [input-body-string]
  (let [bytes (.getBytes ^String input-body-string)]
    (ByteArrayInputStream. bytes)))

(defn verify-assertion-request []
  {:assertion "eyJhbGciOiJSUzI1NiJ9.eyJwdWJsaWMta2V5Ijp7ImFsZ29yaXRobSI6IkRTIiwieSI6ImVhMDhlNjAyMTdmOWU1ZWM5YjhiN2QyYzg5YTMxZDhkYjhjY2I2NDQxNTQ4MTNjMGZjMTA5OGNlMjY5NTc3YTE3MTM3N2I1NDU3NDRlYWQzODMwNDdjMzAzZTYyOTcwZjQxMTkwMDcyNmQyZmVhOWRhNDJjMmRjMDYxMjQ4NDNiOTZiMDcxMjc2YjI1ZjAxM2RjZjVmMDU4M2E2Yjk3MjBiMjA1NjdkZWM1ZjEwMzUzMTM3Zjk0M2MzNmM0Y2I1OTcwN2FjMmY5OGMxZTUwMTk3ODE3ZWQ0Mjk0NWNiZjg2OGQwNzBhMDQxMjI0MGZmYWMwNWM2ZmJmZmE4OTBkYTgiLCJwIjoiZmY2MDA0ODNkYjZhYmZjNWI0NWVhYjc4NTk0YjM1MzNkNTUwZDlmMWJmMmE5OTJhN2E4ZGFhNmRjMzRmODA0NWFkNGU2ZTBjNDI5ZDMzNGVlZWFhZWZkN2UyM2Q0ODEwYmUwMGU0Y2MxNDkyY2JhMzI1YmE4MWZmMmQ1YTViMzA1YThkMTdlYjNiZjRhMDZhMzQ5ZDM5MmUwMGQzMjk3NDRhNTE3OTM4MDM0NGU4MmExOGM0NzkzMzQzOGY4OTFlMjJhZWVmODEyZDY5YzhmNzVlMzI2Y2I3MGVhMDAwYzNmNzc2ZGZkYmQ2MDQ2MzhjMmVmNzE3ZmMyNmQwMmUxNyIsInEiOiJlMjFlMDRmOTExZDFlZDc5OTEwMDhlY2FhYjNiZjc3NTk4NDMwOWMzIiwiZyI6ImM1MmE0YTBmZjNiN2U2MWZkZjE4NjdjZTg0MTM4MzY5YTYxNTRmNGFmYTkyOTY2ZTNjODI3ZTI1Y2ZhNmNmNTA4YjkwZTVkZTQxOWUxMzM3ZTA3YTJlOWUyYTNjZDVkZWE3MDRkMTc1ZjhlYmY2YWYzOTdkNjllMTEwYjk2YWZiMTdjN2EwMzI1OTMyOWU0ODI5YjBkMDNiYmM3ODk2YjE1YjRhZGU1M2UxMzA4NThjYzM0ZDk2MjY5YWE4OTA0MWY0MDkxMzZjNzI0MmEzODg5NWM5ZDViY2NhZDRmMzg5YWYxZDdhNGJkMTM5OGJkMDcyZGZmYTg5NjIzMzM5N2EifSwicHJpbmNpcGFsIjp7ImVtYWlsIjoidHdhc2hpbmdAZ21haWwuY29tIn0sImlhdCI6MTQyNDAyNjUzODUwOCwiZXhwIjoxNDI0MDQ4MTQ4NTA4LCJpc3MiOiJnbWFpbC5sb2dpbi5wZXJzb25hLm9yZyJ9.RT7y5qIG5g_9NgIdxM_kO-6_ztYpD6v_qHAF5lh4WVaKj1wSUvtS4DwcWW4hSosN7S3A9vK_WdusgiFr6--hyBaesEZPpVlAGAdoVCe9Bo4yCba8e-l4pejhE7yofdykNdOUyl95Xcv6ngI5YK3R4uWWCfS5_EvoO-p6y43run_UYWDjuX1q3I8LFEIZ37tKDPf__jiIWs_g45MhJhf8uR8L2phkPiMKTzQcXG6sWqWGDj8Av5YA2DCUeNjGGFjdI_D-CRS5jMI_B3afLv2ri6RbOVVzzOdlOJmcRze_J2arGOdgU3Odr4BjNDOSjHquxeDArN7WAYcaW0m5HVKWZw~eyJhbGciOiJEUzEyOCJ9.eyJleHAiOjE0MjQwMzk1NDY3MTcsImF1ZCI6Imh0dHA6Ly8xNzIuMjguMTI4LjM6MzAwMCJ9.1OY3fd75WZsieQ-gJmMBiW6CVOM2bAmguVd50hkGB0XkEAMNvUkpYg"})

(defn verify-assertion-requestS []
  "{:assertion \"eyJhbGciOiJSUzI1NiJ9.eyJwdWJsaWMta2V5Ijp7ImFsZ29yaXRobSI6IkRTIiwieSI6ImVhMDhlNjAyMTdmOWU1ZWM5YjhiN2QyYzg5YTMxZDhkYjhjY2I2NDQxNTQ4MTNjMGZjMTA5OGNlMjY5NTc3YTE3MTM3N2I1NDU3NDRlYWQzODMwNDdjMzAzZTYyOTcwZjQxMTkwMDcyNmQyZmVhOWRhNDJjMmRjMDYxMjQ4NDNiOTZiMDcxMjc2YjI1ZjAxM2RjZjVmMDU4M2E2Yjk3MjBiMjA1NjdkZWM1ZjEwMzUzMTM3Zjk0M2MzNmM0Y2I1OTcwN2FjMmY5OGMxZTUwMTk3ODE3ZWQ0Mjk0NWNiZjg2OGQwNzBhMDQxMjI0MGZmYWMwNWM2ZmJmZmE4OTBkYTgiLCJwIjoiZmY2MDA0ODNkYjZhYmZjNWI0NWVhYjc4NTk0YjM1MzNkNTUwZDlmMWJmMmE5OTJhN2E4ZGFhNmRjMzRmODA0NWFkNGU2ZTBjNDI5ZDMzNGVlZWFhZWZkN2UyM2Q0ODEwYmUwMGU0Y2MxNDkyY2JhMzI1YmE4MWZmMmQ1YTViMzA1YThkMTdlYjNiZjRhMDZhMzQ5ZDM5MmUwMGQzMjk3NDRhNTE3OTM4MDM0NGU4MmExOGM0NzkzMzQzOGY4OTFlMjJhZWVmODEyZDY5YzhmNzVlMzI2Y2I3MGVhMDAwYzNmNzc2ZGZkYmQ2MDQ2MzhjMmVmNzE3ZmMyNmQwMmUxNyIsInEiOiJlMjFlMDRmOTExZDFlZDc5OTEwMDhlY2FhYjNiZjc3NTk4NDMwOWMzIiwiZyI6ImM1MmE0YTBmZjNiN2U2MWZkZjE4NjdjZTg0MTM4MzY5YTYxNTRmNGFmYTkyOTY2ZTNjODI3ZTI1Y2ZhNmNmNTA4YjkwZTVkZTQxOWUxMzM3ZTA3YTJlOWUyYTNjZDVkZWE3MDRkMTc1ZjhlYmY2YWYzOTdkNjllMTEwYjk2YWZiMTdjN2EwMzI1OTMyOWU0ODI5YjBkMDNiYmM3ODk2YjE1YjRhZGU1M2UxMzA4NThjYzM0ZDk2MjY5YWE4OTA0MWY0MDkxMzZjNzI0MmEzODg5NWM5ZDViY2NhZDRmMzg5YWYxZDdhNGJkMTM5OGJkMDcyZGZmYTg5NjIzMzM5N2EifSwicHJpbmNpcGFsIjp7ImVtYWlsIjoidHdhc2hpbmdAZ21haWwuY29tIn0sImlhdCI6MTQyNDAyNjUzODUwOCwiZXhwIjoxNDI0MDQ4MTQ4NTA4LCJpc3MiOiJnbWFpbC5sb2dpbi5wZXJzb25hLm9yZyJ9.RT7y5qIG5g_9NgIdxM_kO-6_ztYpD6v_qHAF5lh4WVaKj1wSUvtS4DwcWW4hSosN7S3A9vK_WdusgiFr6--hyBaesEZPpVlAGAdoVCe9Bo4yCba8e-l4pejhE7yofdykNdOUyl95Xcv6ngI5YK3R4uWWCfS5_EvoO-p6y43run_UYWDjuX1q3I8LFEIZ37tKDPf__jiIWs_g45MhJhf8uR8L2phkPiMKTzQcXG6sWqWGDj8Av5YA2DCUeNjGGFjdI_D-CRS5jMI_B3afLv2ri6RbOVVzzOdlOJmcRze_J2arGOdgU3Odr4BjNDOSjHquxeDArN7WAYcaW0m5HVKWZw~eyJhbGciOiJEUzEyOCJ9.eyJleHAiOjE0MjQwMzk1NDY3MTcsImF1ZCI6Imh0dHA6Ly8xNzIuMjguMTI4LjM6MzAwMCJ9.1OY3fd75WZsieQ-gJmMBiW6CVOM2bAmguVd50hkGB0XkEAMNvUkpYg\"}")

(defn verify-assertion-response []
  {:orig-content-encoding nil,
   :trace-redirects ["https://verifier.login.persona.org/verify"],
   :request-time 6539,
   :status 200,
   :headers
   {"Connection" "Close",
    "Content-Length" "143",
    "X-Powered-By" "Express",
    "Strict-Transport-Security" "max-age=10886400; includeSubdomains",
    "Server" "nginx/1.6.0",
    "Date" "Sun, 15 Feb 2015 22:30:37 GMT",
    "Content-Type" "application/json; charset=utf-8"},
   :body
   "{\"audience\":\"http://172.28.128.3:3000\",\"expires\":1424039546717,\"issuer\":\"gmail.login.persona.org\",\"email\":\"twashing@gmail.com\",\"status\":\"okay\"}"})
