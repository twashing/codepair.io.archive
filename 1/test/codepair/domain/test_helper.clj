(ns codepair.domain.test-helper
  (:require [adi.core :as adi]))


(defn setup-db! []
  (let [schema-codepair (read-string (slurp "resources/db/schema-adi.edn"))
        data-codepair (read-string (slurp "resources/db/default.edn"))

        ds (adi/connect! "datomic:mem://adi-examples-codepair" schema-codepair true true)
        _ (adi/insert! ds data-codepair)]
    ds))
