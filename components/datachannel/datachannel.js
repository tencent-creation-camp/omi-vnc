var _class, _temp;

import { WeElement, define, h } from "omi"; // JS

const componentName = ((_temp = _class = class componentName extends WeElement {
  constructor(...args) {
    super(...args);

    this.dataChannelSendRef = e => {
      this.dataChannelSend = e.value;
    };

    this.dataChannelReceiveRef = e => {
      this.dataChannelReceive = e.value;
    };
  }

  render() {
    return h(
      "div",
      null,
      h(
        "div",
        {
          id: "buttons"
        },
        h(
          "button",
          {
            onClick: this.createConnection.bind(this),
            id: "startButton"
          },
          "Start"
        ),
        h(
          "button",
          {
            onClick: this.sendData.bind(this),
            id: "sendButton"
          },
          "Send"
        ),
        h(
          "button",
          {
            id: "closeButton"
          },
          "Stop"
        )
      ),
      h(
        "div",
        {
          id: "sendReceive"
        },
        h(
          "div",
          {
            id: "send"
          },
          h("h2", null, "Send"),
          h("textarea", {
            onKeyup: this.getDataChannelSend.bind(this),
            ref: this.dataChannelSendRef,
            id: "dataChannelSend"
          })
        ),
        h(
          "div",
          {
            id: "receive"
          },
          h("h2", null, "Receive"),
          h("textarea", {
            onKeyup: this.getDataChannelReceive.bind(this),
            ref: this.dataChannelReceiveRef,
            id: "dataChannelReceive"
          })
        )
      )
    );
  }

  install() {
    this.props = {
      name: "yao"
    };
    this.data = {
      dataChannelSendValue: null,
      dataChannelReceiveValue: null,
      title: "omi",
      localConnection: null,
      remoteConnection: null,
      sendChannel: null,
      receiveChannel: null // this.createConnection();
    };
    console.log({ ...this });
  }

  createConnection() {
    const servers = null;
    window.localConnection = this.data.localConnection = new RTCPeerConnection(
      servers
    );
    console.log(
      "Created local peer connection object this.data.localConnection"
    );
    this.data.sendChannel = this.data.localConnection.createDataChannel(
      "sendDataChannel"
    );
    console.log("Created send data channel");

    this.data.localConnection.onicecandidate = e => {
      onIceCandidate(this.data.localConnection, e);
    };

    this.data.sendChannel.onopen = this.onSendChannelStateChange;
    this.data.sendChannel.onclose = this.onSendChannelStateChange;
    window.remoteConnection = this.data.remoteConnection = new RTCPeerConnection(
      servers
    );
    console.log("Created remote peer connection object remoteConnection");

    this.data.remoteConnection.onicecandidate = e => {
      this.onIceCandidate(remoteConnection, e);
    };

    remoteConnection.ondatachannel = this.receiveChannelCallback;
    this.data.localConnection.createOffer().then();
  }

  onSendChannelStateChange() {
    const readyState = this.data.sendChannel.readyState;
    console.log("Send channel state is: " + readyState);
  }

  receiveChannelCallback(event) {
    console.log("Receive Channel Callback"); // receiveChannel = event.channel;
    // receiveChannel.onmessage = onReceiveMessageCallback;
    // receiveChannel.onopen = onReceiveChannelStateChange;
    // receiveChannel.onclose = onReceiveChannelStateChange;
  }

  onIceCandidate(pc, event) {
    // getOtherPc(pc)
    //     .addIceCandidate(event.candidate)
    //     .then(
    //         () => onAddIceCandidateSuccess(pc),
    //         err => onAddIceCandidateError(pc, err)
    //     );
    console.log(
      `${getName(pc)} ICE candidate: ${
        event.candidate ? event.candidate.candidate : "(null)"
      }`
    );
  }

  sendData() {
    console.log(this.data.dataChannelSendValue);
    console.log(this.data.dataChannelReceiveValue);
    const data = this.data.dataChannelSendValue;
    this.data.sendChannel.send(data); // console.log('Sent Data: ' + data);
  }

  getDataChannelSend(e) {
    this.data.dataChannelSendValue = e.target.value;
    console.log(e.target.value);
  }

  getDataChannelReceive(e) {
    this.data.dataChannelReceiveValue = e.target.value;
    console.log(e.target.value);
  }
}),
(_class.css = `textarea{width:200px;height:200px}
`),
_temp);
define("component-name", componentName);
