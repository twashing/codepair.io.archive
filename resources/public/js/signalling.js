
// 1.
var PeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
var SessionDescription = window.RTCSessionDescription || window.mozRTCSessionDescription || window.webkitRTCSessionDescription;
var GET_USER_MEDIA = navigator.getUserMedia ? "getUserMedia" :
    navigator.mozGetUserMedia ? "mozGetUserMedia" :
    navigator.webkitGetUserMedia ? "webkitGetUserMedia" : "getUserMedia";
var v = document.createElement("video");
var SRC_OBJECT = 'srcObject' in v ? "srcObject" :
    'mozSrcObject' in v ? "mozSrcObject" :
    'webkitSrcObject' in v ? "webkitSrcObject" : "srcObject";

// 2.
var pc = new webkitRTCPeerConnection({ "iceServers": [{ "url": "stun:stun.l.google.com:19302" }] });
pc.onaddstream = function(obj) {
    var vid = document.getElementById("localVideo");
    vid.srcObject = obj.stream;
}

// Helper functions
function endCall() {
    
    var videos = document.getElementsByTagName("video");
    for (var i = 0; i < videos.length; i++) {
        videos[i].pause();
    }
    pc.close();
}

function errorHandler(err) {
    endCall();
}

// 3.
function streamHandler(stream) {
    
    pc.onaddstream({stream: stream});

    // Adding a local stream won't trigger the onaddstream callback
    pc.addStream(stream);

    pc.createOffer(function(offer) {
	pc.setLocalDescription(new RTCSessionDescription(offer), function() {
	    // send the offer to a server to be forwarded to the friend you're calling.
	    console.log("foo");
	}, errorHandler);
    }, errorHandler);
};

var streamConfig = {video: true};

navigator.getUserMedia = navigator.webkitGetUserMedia
navigator.getUserMedia(streamConfig, streamHandler, errorHandler);

