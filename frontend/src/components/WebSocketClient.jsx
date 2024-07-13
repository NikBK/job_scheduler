import { useEffect } from "react";
// import { client as WebSocketClientClass } from "websocket";
// const WebSocket = require('websocket').w3cwebsocket;
import { w3cwebsocket as WebSocket } from "websocket";
const wsURL = 'ws://localhost:5000/ws';

const WebSocketClient = ({ onJobUpdate }) => {
  // useEffect(() => {
  //   console.log("job updated");
  //   var client = new WebSocketClientClass();

  //   client.on("connectFailed", function (error) {
  //     console.log("Connect Error: " + error.toString());
  //   });

  //   client.on("connect", function (connection) {
  //     console.log("WebSocket Client Connected");
  //     connection.on("error", function (error) {
  //       console.log("Connection Error: " + error.toString());
  //     });
  //     connection.on("close", function () {
  //       console.log("echo-protocol Connection Closed");
  //     });
  //     connection.on("message", function (message) {
  //       if (message.type === "utf8") {
  //         console.log("Received: '" + message.utf8Data + "'");
  //       }
  //     });

  //     function sendNumber() {
  //       if (connection.connected) {
  //         var number = Math.round(Math.random() * 0xffffff);
  //         connection.sendUTF(number.toString());
  //         setTimeout(sendNumber, 1000);
  //       }
  //     }
  //     sendNumber();
  //   });
  //   client.connect("ws://localhost:5000/", "echo-protocol");

  //   client.on("jobUpdate", (updatedJob) => {
  //     onJobUpdate(updatedJob);
  //   });

  //   return () => client.disconnect();
  // }, [onJobUpdate]);

  // WebSocket connection
  useEffect(() => {
    const client = new WebSocket(wsURL);

    client.onopen = () => {
      console.log('WebSocket Client Connected');
    };

    client.onclose = () => {
      console.log('WebSocket Client Closed');
    };

    client.onmessage = (message) => {
      const data = JSON.parse(message.data);
      if (data.type === 'JOBS_LIST') {
        onJobUpdate(data);
      }
    };

    // return () => {
    //   client.close();
    // };
  }, [onJobUpdate]);

  return null; // This component doesn't render anything visible
};

export default WebSocketClient;
