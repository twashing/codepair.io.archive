(ns codepair.shell
  (:require [clojure.pprint :as pp]

            [alembic.still]
            [taoensso.timbre :as timbre]
            [hara.component :as hco]

            [codepair.component.server :as cs]))


(defn reload-project []
  (alembic.still/load-project))

;; Codepair Log config
(timbre/set-config! [:shared-appender-config :spit-filename] "logs/codepair.log")
(timbre/set-config! [:appenders :spit :enabled?] true)

(defn log-trace! [] (timbre/set-level! :trace))
(defn log-debug! [] (timbre/set-level! :debug))
(defn log-info! [] (timbre/set-level! :info))
(defn log-warn! [] (timbre/set-level! :warn))
(defn log-error! [] (timbre/set-level! :error))
(defn log-fatal! [] (timbre/set-level! :fatal))
(defn log-report! [] (timbre/set-level! :report))


(def environment-mode :dev)
(def system nil)
(def topology {})
(def component-config   {})

(defn start
  ([] (start component-config))
  ([config]
   (alter-var-root #'system (constantly (hco/start (hco/system topology config))))))

(defn stop []
  (alter-var-root #'system (fn [s] (when s (hco/stop system)))))

(defn reset []
  (stop)
  (start))
