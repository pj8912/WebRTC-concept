# WebRTC-concept
WebRTC  basic concept with demo

In this demo we will connect two browsers which will be 2 peers and allow them to share data using RTCDataChannel
	
let one browser be peer1 and other be peer2

peer1 will create an "offer" set it as it's "localDescription"
peer2 will get the "offer" and set it to its "remoteDescription"
peer2 creates an "answer" sets it as it's "localDescription" and `SIGNAL` the  answer to peer1
peer1 sets the "answer" as it's  "remoteDescription"
Now the connection is established.
They can exchange data tro data channel
	
peer1.js at one browswer and peer2.js at another browser.
	
	
	
