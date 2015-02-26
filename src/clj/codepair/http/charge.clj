(ns codepair.http.charge
  (:require [clojure.java.io :as io]
            [clojure.pprint :as pp]
            [ring.util.response :as ring-resp]
            [taoensso.timbre :as timbre]
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
            [codepair.shell :as sh]))


(defn charge [req]

  ;; tie together with existing account
  ;; can't do this unless logged in
  ;; can only change plans if already under a plan
  (let [sktest (-> sh/file-config sh/environment-mode :stripe-key-secret)
        charge-token (-> req :params :stripeToken)
        stripe-email (-> req :params :stripeEmail)
        account-level (-> req :params :accountlevel)
        result (common/with-token sktest
                 (common/execute
                  (customers/create-customer
                   (common/card charge-token)
                   (customers/email stripe-email)
                   (common/plan "professional"))))
        stripe-customer-id (:id result)

        ;; if successful, update user
        ;; ...

        session (:session req)]

    (timbre/debug (str "/charge result[" (with-out-str (pp/pprint result)) "]"))

    (assoc (:authentication-data session)
      :stripe-customer-id stripe-customer-id)))
