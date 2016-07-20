(ns codepair.core
  (:require [weasel.repl :as repl]
            [ajax.core :refer [GET POST]]
            [chord.client :refer [ws-ch]]
            [cljs.core.async :refer [<! >! put! close!]]
            [cognitect.transit :as t])
  (:require-macros [cljs.core.async.macros :refer [go]]))


(defn ice-handler [response]

  (let [_ (.log js/console (str response))

        reader (t/reader :json)
        ice-data (t/read reader response)
        webrtc (new js/SimpleWebRTC #js {;;:url "ws://172.28.128.3:8080/chatroom"
                                         :localVideoEl "localVideo"
                                         :remoteVideosEl "remotesVideos"
                                         :autoRequestMedia true
                                         :debug false
                                         :detectSpeakingEvents true
                                         :autoAdjustMic false
                                         :peerConnectionConfig (get ice-data "d")})]
    (.on webrtc
         "readyToCall"
         (fn []
           (.joinRoom webrtc "main")))

    (.on webrtc
         "createdPeer"
         (fn [peer]
           (.log js/console (str "created peer: " peer))
           (def peer peer)))

    (.on webrtc
         "videoAdded"
         (fn [video peer]

           (.log js/console (str "video added: " video))

           (let [remotes (.getElementById js/document "remotes")
                 container (.createElement js/document "div")]

             ;; container.className = 'videoContainer';
             ;; container.id = 'container_' + webrtc.getDomId(peer);

             (.appendChild container video)
             (.appendChild remotes container))
           ))))

(defn ice-error-handler [{:keys [status status-text]}]
  (.log js/console (str "something bad happened: [" status "] " status-text)))

(defn ice-call []
  (GET "/ice" {:handler ice-handler
               :error-handler ice-error-handler}))

(defn join-chatroom []
  (go
    (let [{:keys [ws-channel]} (<! (ws-ch "wss://127.0.0.1:8080/chatroom"))
          {:keys [message error]} (<! ws-channel)]

      (def latest-message message)

      (if error
        (js/console.log "Uh oh:" error)
        (js/console.log "Hooray! Message:" (pr-str message))))))


#_(do

    (.log js/console "a")
    (join-chatroom)
    (ice-call)

    (def wrtc (new js/SimpleWebRTC #js {:localVideoEl "localVideo"
                                        :remoteVideosEl "remotesVideos"
                                        :autoRequestMedia true
                                        :debug false
                                        :detectSpeakingEvents true
                                        :autoAdjustMic false
                                        :peerConnectionConfig (get ice-data "d")}))

    (def one (.shareScreen wrtc (fn [err]
                                  (.log js/console (str  "Error: " err)))))

    ;; ====

    var wrtc = new SimpleWebRTC({localVideoEl : "localVideo",
			     remoteVideosEl : "remotesVideos",
			     autoRequestMedia : true,
			     debug : false,
			     detectSpeakingEvents : true,
			     autoAdjustMic : false})

    var one = wrtc.shareScreen(function (err) {
                                               console.log("Error: " + err)})


    )
