import { useEffect, useState } from 'react';
import { w3cwebsocket as WebSocket } from 'websocket';
import { WEB_SOCKET_URL } from '../constants/config';

// Set up websocket client
const useWebSocket = () => {
    const [client] = useState(new WebSocket(WEB_SOCKET_URL));

    useEffect(() => {
        client.onopen = () => {
            console.log('WebSocket Client Connected');
        };

        client.onclose = () => {
            console.log('WebSocket Client Closed');
        };

        client.onmessage = (message) => {
            const data = JSON.parse(message.data);
            return data;
        };

        // return () => {
        //     client.close();
        // };
    }, []);

    return client;
};

export default useWebSocket;
