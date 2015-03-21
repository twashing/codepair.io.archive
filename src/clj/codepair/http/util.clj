(ns codepair.http.util)


(def sessions (atom []))

(defn get-session-handler []

  (let [session-listener (reify javax.servlet.http.HttpSessionListener

                           (sessionCreated [this event]
                             (println (str "sessionCreated CALLED: " event))
                             (swap! sessions #(conj % (.getSession event))))

                           (sessionDestroyed [this event]
                             (println (str "sessionDestroyed CALLED: " event))
                             (swap! sessions (fn [sess]
                                               (remove #(= (.getId (.getSession event))
                                                           (.getId sess))
                                                       sess)))))

        ;; http://git.eclipse.org/c/jetty/org.eclipse.jetty.project.git/tree/jetty-server
        ;; http://git.eclipse.org/c/jetty/org.eclipse.jetty.project.git/
        session-manager (org.eclipse.jetty.server.session.HashSessionManager.)
        session-handler (org.eclipse.jetty.server.session.SessionHandler. session-manager)
        _ (.addEventListener session-handler session-listener)]

    session-handler))
