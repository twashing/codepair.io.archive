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
            [codepair.shell :as sh]
            [codepair.domain.user :as us]))


(defn charge [req ds stripe-sk]

  (let [params (-> req :body slurp read-string)
        charge-token (-> params :stripeToken)
        stripe-email (-> params :stripeEmail)
        account-level (-> params :accountlevel)
        account-level-kw (keyword account-level)

        result (common/with-token stripe-sk
                 (common/execute
                  (customers/create-customer
                   (common/card charge-token)
                   (customers/email stripe-email)
                   (common/plan account-level))))
        stripe-customer-id (:id result)

        session (:session req)]

    (timbre/info (str "Stripe Result: " (with-out-str (pp/pprint (keys result)))))

    ;; if successful, update user
    (if-not (:delinquent result)
      (us/update-user ds stripe-email {:accountlevel account-level-kw}))

    (assoc (:authentication-data session)
      :stripe-customer-id stripe-customer-id
      :accountlevel account-level-kw)))
