(ns codepair.activity.activity)


(defn request-connection [ds availability userb usera]

  ;; userb is requester
  ;; usera is owner
  ;; i) add :request to an availability
  ;; ii) set its :state to :connection-requested

  ;; ** for HTTP namespace, a way to notify owner of request

  )

(defn respondto-request [ds availability usera responsekw]

  ;; ensure usera owns availability
  ;; set [:availability :request :state] to either [:connection-accepted | :connection-rejected]

  ;; ** for HTTP namespace, a way to notify requester of response

  )

(defn list-incoming-requests [ds user] )

(defn list-submitted-requests [ds user] )


(defn establish-session [ds user availability & participants]

  ;; ensure user is owner of availability
  ;; create a session, tied to incoming availability
  ;; set [:session :state] to either [:session-active | :session-exited | :session-ended]
  ;; set [:session :participant :state] to :active

  ;; ** for HTTP namespace, notify owner and participants to start the UI session

  )

(defn exit-session [ds session user]

  ;; ensure user is the guest
  ;; set [:session :participant :state] to :participant-exited

  ;; ** for HTTP namespace, notify owner that a participant has left

  )

(defn end-session [ds session user]

  ;; ensure user is the owner
  ;; set all [:session :participant :state] to :participant-session-ended
  ;; set [:session :state] to :session-ended

  ;; ** for HTTP namespace, notify partcipants that the session has been ended

  )
