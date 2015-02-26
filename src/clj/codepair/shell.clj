(ns codepair.shell
  (:require [clojure.pprint :as pp]

            [alembic.still]
            [taoensso.timbre :as timbre]
            [hara.component :as hco]
            [clj-stripe.util :as util]
            [clj-stripe.common :as common]
            [clj-stripe.plans :as plans]
            [clj-stripe.coupons :as coupons]
            [clj-stripe.charges :as charges]
            [clj-stripe.cards :as cards]
            [clj-stripe.subscriptions :as subscriptions]
            [clj-stripe.customers :as customers]
            [clj-stripe.invoices :as invoices]
            [clj-stripe.invoiceitems :as invoiceitems]

            [bkell.spittoon :as spit]
            [bkell.config :as config]

            [codepair.component.shell :as csh]
            [codepair.component.spittoon :as css]
            [codepair.http.server :as sv]
            [codepair.http.handler :as hl]))


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
(def file-config (config/load-edn "config-codepair.edn"))

(def topology {:shell [csh/map->Shell :spittoon]
               :spittoon [css/map->Spittoon]})

(def component-config {:shell {}
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


(defn start-server []
  (sv/start-server 3000 hl/app))


(comment

  (def env (config/load-edn "config-codepair.edn"))
  (def r1 (db-create (:dev env)))
  (def r2 (db-init (:dev env)))


  ;; list available plans
  (common/with-token sktest
    (common/execute (plans/get-all-plans)))

  ;; create a new customer on a subscription plan
  (common/with-token sktest
    (common/execute
     (customers/create-customer
      (common/card "A card token obtained with stripe.js")
      (customers/email "twashing@gmail.com")
      (common/plan "professional"))))

  )
