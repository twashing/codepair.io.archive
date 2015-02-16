(ns landing
  (:require [util :as ul]))

(def user-state (atom nil))

(defn ^:export printUserState []
  (ul/console-log (str @user-state)))
