(ns server-sent-events.service
  (:require [io.pedestal.http :as bootstrap]
            [io.pedestal.http.sse :as sse]
            [io.pedestal.http.route :as route]
            [io.pedestal.http.route.definition :refer [defroutes]]
            [ring.util.response :as ring-resp]
            [clojure.core.async :as async]))

(defn about-page
  [request]
  (ring-resp/response "Server Sent Service"))

(defn send-counter
  "Counts down to 0, sending value of counter to sse context and
  recursing on a different thread; ends event stream when counter
  is 0."
  [event-ch count-num]

  (async/put! event-ch {:name "count"
                        :data (str count-num ", thread: " (.getId (Thread/currentThread)))})

  (Thread/sleep 1500)
  (if (> count-num 0)
    (recur event-ch (dec count-num))
    (do
      (async/put! event-ch {:name "close" :data ""})
      (async/close! event-ch))))

(defn sse-stream-ready
  "Starts sending counter events to client."
  [event-ch ctx]
  (let [{:keys [request response-channel]} ctx]
    (send-counter event-ch 10)))


;; ======
(declare rtc-client rtc-recieve)
(def rtc1-channel (atom nil))
(def rtc2-channel (atom nil))

(defn rtc1 [request]
  (rtc-client rtc1-channel {}))

(defn rtc2[request]
  (rtc-recieve rtc2-channel {}))

;; ======
(defn rtc-client [event-ch data]  
  (async/put! event-ch {:ok "ack"}))

(defn rtc-client-ready
  [event-ch ctx]
  (let [{:keys [request response-channel]} ctx]

    (swap! rtc1-channel (constantly event-ch))
    (rtc-client event-ch {:ok "recieve-established"})))

;; ======
(defn rtc-recieve [event-ch data]
  (async/put! event-ch data)
  (async/close! event-ch))

(defn rtc-recieve-ready [event-ch ctx]
  (let [{:keys [request response-channel]} ctx]

    #_(swap! rtc2-channel (constantly event-ch))
    (rtc-recieve event-ch {:name "a"
                           :data "b"})))

;; Wire root URL to sse event stream
(defroutes routes
  [[["/" {:get [::send-counter (sse/start-event-stream sse-stream-ready)]}
     ["/about" {:get about-page}]]
    
    ["/rtc"    {:get [::rtc (sse/start-event-stream rtc-client-ready)]}]
    ["/rtcack" {:get [::rtcack (sse/start-event-stream rtc-recieve-ready)]}]

    ["/rtc1"   {:get rtc1}]
    ["/rtc2"   {:get rtc2}]]])

;; You can use this fn or a per-request fn via io.pedestal.service.http.route/url-for
(def url-for (route/url-for-routes routes))

;; Consumed by server-sent-events.server/create-server
(def service {:env :prod
              ;; You can bring your own non-default interceptors. Make
              ;; sure you include routing and set it up right for
              ;; dev-mode. If you do, many other keys for configuring
              ;; default interceptors will be ignored.
              ;; :bootstrap/interceptors []
              ::bootstrap/routes routes
              ;; Root for resource interceptor that is available by default.
              ::bootstrap/resource-path "/public"
              ;; Either :jetty or :tomcat (see comments in project.clj
              ;; to enable Tomcat)
              ::bootstrap/type :jetty
              ::bootstrap/port 8080})
