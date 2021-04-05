// !!new browser

// taking the localDescription of peer1 we create the 'offer'


const offer = {}; //{....}

//peer2 as remote
const remoteconnection = new RTCPeerConnection();

// peer2 ice candidate
remoteconnection.onicecandidate = e => console.log("ice candidate: " + JSON.stringify(remoteconnection.localDescription));


remoteconnection.ondatachannel = e => {

    const receiverChannel = e.channel;
    receiverChannel.onmessage = e => console.log("message from local: " + e.data);
    receiverChannel.onopen = e => console.log("opend!");
    // closing....
    receiverChannel.oncolse = e => alert('closed')
}



// peer2's remoteDescription which intakes 'offer'
remoteconnection.setRemoteDescription(offer)
    .then(x => console.log("done"))

// creating answer for 'offer'
remoteconnection.createAnswer()
    .then(x => remoteconnection.setLocalDescription(x))
    .then(x => console.log('success'))

// ........................
// back to peer1.js(1'st browswer)

