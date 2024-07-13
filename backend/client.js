const WebSocket = require('websocket').client;

const client = new WebSocket();

client.on('connectFailed', (error) => {
    console.log(`Connection Error: ${error.toString()}`);
});

client.on('connect', (connection) => {
    console.log('WebSocket Client Connected');

    connection.on('error', (error) => {
        console.log(`Connection Error: ${error.toString()}`);
    });

    connection.on('close', () => {
        console.log('WebSocket Client Closed');
    });

    connection.on('message', (message) => {
        if (message.type === 'utf8') {
            console.log(`Received: ${message.utf8Data}`);
        }
    });

    // Example: Sending a message
    // connection.sendUTF(JSON.stringify({ type: 'ADD_JOB', name: 'Task A', duration: 5000 }));

    // Example: Closing the connection after sending a message
    // setTimeout(() => {
    //     connection.close();
    // }, 1000);
});

client.connect('ws://localhost:5000/ws');
