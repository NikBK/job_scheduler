import { useEffect } from "react";
import { w3cwebsocket as WebSocket } from "websocket";
const wsURL = 'ws://localhost:5000/ws';

const WebSocketClient = ({ onJobUpdate }) => {
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

    return () => {
      client.close();
    };
  }, [onJobUpdate]);

  return null; // This component doesn't render anything visible
};

export default WebSocketClient;
