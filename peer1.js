
const localconnection = new RTCPeerConnection();

// creating datachannel
const dataChannel= localconnection.createDataChannel("channel");

dataChannel.onmessage = e => console.log("Message from remote: "+ e.data)

dataChannel.onopen = e => console.log("Connection Opend");

// ice candidate for localconnection which gives SDP
localconnection.onicecandidate = e => console.log("new candidate: "+ JSON.stringify(localconnection.localDescription));

// creating offer to connect with another peer
localconnection.createOffer()
.then(x => localconnection.setLocalDescription(x))
.then(console.log("created"));

// this generates as "new candidate" string.
// this is peer1's localDescription
// copy the json format(" {} ") inside the string and place it as 'offer' in the new browser
// this is the offer to connect to peer2

// --------------------------------------------------------------------------

// creating 'answer' from another browser
// which is peer2's localDescription
// this is the 'answer' of peer2 to the 'offer' of peer1.

const answer = {} ;

localconnection.setRemoteDescription(answer);


