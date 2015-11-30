(ns codepair.webrtc
  (:require [clj-http.client :as client]
            [bkell.config :as config]))


(comment
  
  (def one (config/load-edn "config-codepair.edn"))

  (def two (client/get
            "https://service.xirsys.com/ice"
            {:ident "twashing"
             :secret (-> one :dev :xirsys-token)
             :domain "codepair.io"
             :application "main"
             :room "main"
             :secure 1}))
  
  )


