(ns codepair.handler-test
  (:import [java.io ByteArrayInputStream])
  (:require [clojure.test :refer :all]
            [clojure.test.check.clojure-test :refer :all]
            [clojure.test.check.generators :as gen]
            [clojure.test.check.properties :as prop]
            [ring.mock.request :as mock]
            [clj-http.client :as client]
            [clojure.data.codec.base64 :as b64]
            [codepair.handler :as hdl]

            [midje.repl]))


(declare verify-assertion-request verify-assertion-response)

(defspec test-verify-assertion
  1
  (prop/for-all [_ gen/int]

                (= #spy/p

                   (with-redefs [client/post (constantly (verify-assertion-response))]
                     (hdl/app (mock/request :post "/verify-assertion" {:assertion "sadf"})))

                   true)))

(comment

  (sh/log-info!)
  (midje.repl/autotest)
  (midje.repl/load-facts 'codepair.handler-test)

  )

(defn create-body-inputstream [input-body-string]
  (let [bytes (.getBytes ^String input-body-string)]
    (ByteArrayInputStream. bytes)))

(defn verify-assertion-request []
  {:ssl-client-cert nil
   :cookies
   {"ring-session" {:value "bf5b028c-d907-4532-8389-f843c79d6177"}}
   :remote-addr "127.0.0.1"
   :params {}
   :flash nil
   :route-params {}
   :headers
   {"origin" "http://127.0.0.1:3000"
    "host" "127.0.0.1:3000"
    "user-agent"
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit/537.36 (KHTML like Gecko) Chrome/40.0.2214.111 Safari/537.36"
    "content-type" "application/edn"
    "cookie" "ring-session=bf5b028c-d907-4532-8389-f843c79d6177"
    "content-length" "1840"
    "referer" "http://127.0.0.1:3000/"
    "connection" "keep-alive"
    "accept" "*/*"
    "accept-language" "en-USen;q=0.8"
    "accept-encoding" "gzip deflate"
    "dnt" "1"}
   :server-port 3000
   :content-length 1840
   :form-params {}
   :session/key nil
   :query-params {}
   :content-type "application/edn"
   :character-encoding nil
   :uri "/verify-assertion"
   :server-name "127.0.0.1"
   :query-string nil
   :body (create-body-inputstream "{:assertion \"eyJhbGciOiJSUzI1NiJ9.eyJwdWJsaWMta2V5Ijp7ImFsZ29yaXRobSI6IkRTIiwieSI6ImVhMDhlNjAyMTdmOWU1ZWM5YjhiN2QyYzg5YTMxZDhkYjhjY2I2NDQxNTQ4MTNjMGZjMTA5OGNlMjY5NTc3YTE3MTM3N2I1NDU3NDRlYWQzODMwNDdjMzAzZTYyOTcwZjQxMTkwMDcyNmQyZmVhOWRhNDJjMmRjMDYxMjQ4NDNiOTZiMDcxMjc2YjI1ZjAxM2RjZjVmMDU4M2E2Yjk3MjBiMjA1NjdkZWM1ZjEwMzUzMTM3Zjk0M2MzNmM0Y2I1OTcwN2FjMmY5OGMxZTUwMTk3ODE3ZWQ0Mjk0NWNiZjg2OGQwNzBhMDQxMjI0MGZmYWMwNWM2ZmJmZmE4OTBkYTgiLCJwIjoiZmY2MDA0ODNkYjZhYmZjNWI0NWVhYjc4NTk0YjM1MzNkNTUwZDlmMWJmMmE5OTJhN2E4ZGFhNmRjMzRmODA0NWFkNGU2ZTBjNDI5ZDMzNGVlZWFhZWZkN2UyM2Q0ODEwYmUwMGU0Y2MxNDkyY2JhMzI1YmE4MWZmMmQ1YTViMzA1YThkMTdlYjNiZjRhMDZhMzQ5ZDM5MmUwMGQzMjk3NDRhNTE3OTM4MDM0NGU4MmExOGM0NzkzMzQzOGY4OTFlMjJhZWVmODEyZDY5YzhmNzVlMzI2Y2I3MGVhMDAwYzNmNzc2ZGZkYmQ2MDQ2MzhjMmVmNzE3ZmMyNmQwMmUxNyIsInEiOiJlMjFlMDRmOTExZDFlZDc5OTEwMDhlY2FhYjNiZjc3NTk4NDMwOWMzIiwiZyI6ImM1MmE0YTBmZjNiN2U2MWZkZjE4NjdjZTg0MTM4MzY5YTYxNTRmNGFmYTkyOTY2ZTNjODI3ZTI1Y2ZhNmNmNTA4YjkwZTVkZTQxOWUxMzM3ZTA3YTJlOWUyYTNjZDVkZWE3MDRkMTc1ZjhlYmY2YWYzOTdkNjllMTEwYjk2YWZiMTdjN2EwMzI1OTMyOWU0ODI5YjBkMDNiYmM3ODk2YjE1YjRhZGU1M2UxMzA4NThjYzM0ZDk2MjY5YWE4OTA0MWY0MDkxMzZjNzI0MmEzODg5NWM5ZDViY2NhZDRmMzg5YWYxZDdhNGJkMTM5OGJkMDcyZGZmYTg5NjIzMzM5N2EifSwicHJpbmNpcGFsIjp7ImVtYWlsIjoidHdhc2hpbmdAZ21haWwuY29tIn0sImlhdCI6MTQyNDAyNjUzODUwOCwiZXhwIjoxNDI0MDQ4MTQ4NTA4LCJpc3MiOiJnbWFpbC5sb2dpbi5wZXJzb25hLm9yZyJ9.RT7y5qIG5g_9NgIdxM_kO-6_ztYpD6v_qHAF5lh4WVaKj1wSUvtS4DwcWW4hSosN7S3A9vK_WdusgiFr6--hyBaesEZPpVlAGAdoVCe9Bo4yCba8e-l4pejhE7yofdykNdOUyl95Xcv6ngI5YK3R4uWWCfS5_EvoO-p6y43run_UYWDjuX1q3I8LFEIZ37tKDPf__jiIWs_g45MhJhf8uR8L2phkPiMKTzQcXG6sWqWGDj8Av5YA2DCUeNjGGFjdI_D-CRS5jMI_B3afLv2ri6RbOVVzzOdlOJmcRze_J2arGOdgU3Odr4BjNDOSjHquxeDArN7WAYcaW0m5HVKWZw~eyJhbGciOiJEUzEyOCJ9.eyJleHAiOjE0MjQwMzk1NDY3MTcsImF1ZCI6Imh0dHA6Ly8xNzIuMjguMTI4LjM6MzAwMCJ9.1OY3fd75WZsieQ-gJmMBiW6CVOM2bAmguVd50hkGB0XkEAMNvUkpYg\"}")
   :multipart-params {}
   :scheme :http
   :request-method :post
   :session {}})

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
