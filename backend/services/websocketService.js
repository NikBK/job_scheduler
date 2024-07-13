const WebSocket = require('websocket');

let wsServer;

// Set up websocket server
const setupWebSocket = (server) => {
    wsServer = new WebSocket.server({
        httpServer: server,
        autoAcceptConnections: false,
    });

    wsServer.on('request', (request) => {
        const connection = request.accept(null, request.origin);
        console.log('WebSocket connection accepted.');

        connection.on('close', () => {
            console.log('WebSocket connection closed.');
        });

        connection.on('message', (message) => {
            if (message.type === 'utf8') {
                console.log(`Received: ${message.utf8Data}`);
            }
        });
    });
};

// Broadcast the job to the client
const broadcastJobUpdate = (updatedJob) => {
    if (wsServer) {
        wsServer.broadcast(JSON.stringify(updatedJob));
    }
};

module.exports = {
    setupWebSocket,
    broadcastJobUpdate,
};