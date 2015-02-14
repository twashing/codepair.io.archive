(ns codepair.shell
  (:require [clojure.pprint :as pp]

            [alembic.still]
            [taoensso.timbre :as timbre]
            [hara.component :as hco]

            [bkell.spittoon :as spit]
            [bkell.config :as config]

            [codepair.component.shell :as csh]
            [codepair.component.spittoon :as css]))


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
(def topology {:shell [csh/map->Shell :spittoon]
               :spittoon [css/map->Spittoon]})
(def file-config (config/load-edn "config-codepair.edn"))
(def component-config   {:shell {}
                         :spittoon {:env (environment-mode file-config)
                                    :recreate? false}})

(defn start
  ([] (start component-config))
  ([config]
   (alter-var-root #'system (constantly (hco/start (hco/system topology config))))))

(defn stop []
  (alter-var-root #'system (fn [s] (when s (hco/stop system)))))

(defn reset []
  (stop)
  (start))


(defn db-create
  ([] (db-create (:dev (config/load-edn "config-codepair.edn"))))
  ([env]
   (spit/db-create env)))

(defn db-init
  ([] (db-init (:dev (config/load-edn "config-codepair.edn"))))
  ([env]
   (spit/db-init env)))


(comment

  (def env (config/load-edn "config-codepair.edn"))
  (def r1 (db-create (:dev env)))
  (def r2 (db-init (:dev env)))

  )
