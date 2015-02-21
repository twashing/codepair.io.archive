(ns codepair.activity.activity
  (:require [taoensso.timbre :as timbre]
            [codepair.util :as ul]
            [codepair.domain.group :as gp]
            [codepair.domain.session :as ss]
            [codepair.domain.availability :as av]))


(defn request-connection [ds availability gname userb]

  ;; ** for HTTP namespace, a way to notify owner of request

  ;; userb is requester
  ;; usera is owner
  ;; i) add :request to an availability
  ;; ii) set its :state to :connection-requested
  (let [title (:title availability)
        availabilityN (update-in availability
                                 [:requests]
                                 #(conj % {:user [[(-> userb :db :id)]]
                                           :state :connection-requested}))]

    (av/update-availability ds gname title availabilityN)))


(defn ensureuser-ownsavailability [ds availability owner]
  (= (get-in owner [:user :username])
     (-> (av/find-user-for-availability ds availability)
         first :user :username)))

(defn ensureuser-ownsrequest [ds request owner]
  (= (get-in owner [:user :username])
     (-> (av/find-user-for-request ds request)
         first :user :username)))

(defn ensureuser-issessionguest [ds session guest]
  (not (empty? (ss/find-participant-insession ds session guest))))

(defn respondto-request [ds request usera responsekw]
  {:pre [(ensureuser-ownsrequest ds request usera)]}

  ;; ** for HTTP namespace, a way to notify requester of response

  ;; ensure usera owns availability/request
  ;; set [:request :state] to either [:connection-accepted | :connection-rejected]
  (let [nrequest (update-in request [:state] (fn [_] responsekw))
        gname (ul/groupname-fromuser usera)
        id (av/yank-genericid nrequest)]
    (av/update-request ds gname id nrequest)))


(defn list-incoming-requests [ds user]
  (av/list-incoming-requests ds user))

(defn list-submitted-requests [ds user]
  (av/list-submitted-requests ds user))


(defn establish-session [ds user availability & participants]
  {:pre [(ensureuser-ownsavailability ds availability user)]}

  ;; ** for HTTP namespace, notify owner and participants to start the UI session

  ;; ensure user is owner of availability
  ;; create a session, tied to incoming availability
  ;; set [:session :state] to either [:session-active | :session-exited | :session-ended]
  ;; set [:session :participant :state] to :active
  (let [gname (ul/groupname-fromuser user)
        group (-> (gp/find-group-by-name ds gname) first :group)
        session {:begin #inst "2014-12-10T09:00:00.00Z"
                 :availability (av/yank-genericid availability)
                 :state :session-active
                 :participants (into [] (map (fn [inp]
                                               {:user (-> inp :db :id)
                                                :state :participant-active})
                                             participants))}
        ngroup (update-in group [:sessions] (fn [inp]
                                              (into [] (conj inp session))))]
    (gp/update-group ds gname ngroup)))


(defn exit-session [ds session user]
  {:pre [(ensureuser-issessionguest ds session user)]}

  ;; ** for HTTP namespace, notify owner that a participant has left

  ;; ** TODO
  ;; ensure user is the guest
  ;; set [:session :participant :state] to :participant-exited
  (ss/update-session ds {:participants
                         [{:state :participant-exited :+ {:db {:id 17592186045430}}}]
                         :state (:state session)
                         :begin (:begin session)
                         :end (:end session)}))

(defn end-session [ds session user]

  ;; ** for HTTP namespace, notify partcipants that the session has been ended

  ;; ensure user is the owner
  ;; set all [:session :participant :state] to :participant-session-ended
  ;; set [:session :state] to :session-ended

  )
