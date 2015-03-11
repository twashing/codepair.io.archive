
function errorHandler(err) {
    endCall();
}

navigator.getUserMedia = navigator.webkitGetUserMedia;
streamConfig = {video: true};
streamHandler = function(stream) {
    pc.onaddstream({stream: stream});
    pc.addStream(stream);

    pc.setRemoteDescription(new RTCSessionDescription(data), function() {
	pc.createAnswer(function(answer) {
	    pc.setLocalDescription(new RTCSessionDescription(answer), function() {
		$.get("/rtc1");
	    }, errorHandler);
	}, errorHandler);
    }, errorHandler);
}

$.get( "/rtcack", function(data, textStatus, jqXHR) {
    console.log("data: " + data + " / status: " + textStatus);
    navigator.getUserMedia(streamConfig, streamHandler, errorHandler);
});
