# WebRTC-concept
WebRTC  basic concept with demo

In this demo we will connect two browsers which will be 2 peers and allow them to share data using RTCDataChannel
	
- let one browser be peer1 and other be peer2

- `peer1` will `create` an `offer` set it as it's `localDescription`
- `peer2` will `get` the `offer` and set it to its `remoteDescription`
- `peer2` `create` an `answer` set it as it's `localDescription` and `SIGNAL` the answer to `peer1`
- `peer1` `receives` the `answer` sets the `answer` as it's  `remoteDescription`

Now the connection is established. They can exchange data through data channel
	
`peer1.js` at one browswer and `peer2.js` at another browser.
	
	
	
