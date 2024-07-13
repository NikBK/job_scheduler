const express = require('express');
const http = require('http');
const WebSocket = require('websocket');
const cors = require('cors');
const { addJob, getJobs, updateJobStatus, getSJFJob } = require('./jobs');

const app = express();
const server = http.createServer(app);
const port = 5000;

// Configure CORS
app.use(cors());

// Body parsing middleware
app.use(express.json());

// Routes
app.post('/api/jobs', (req, res) => {
  const { name, duration } = req.body;
  if (!name || !duration) {
    return res.status(400).json({ message: 'Job name and duration are required.' });
  }

  const newJob = addJob(name, duration);
  res.status(201).json(newJob);
});

app.get('/api/jobs', (req, res) => {
  const jobs = getJobs();
  res.json(jobs);
});

// WebSocket Server setup
const wsServer = new WebSocket.server({
  httpServer: server,
  autoAcceptConnections: false
});

wsServer.on('request', (request) => {
  const connection = request.accept(null, request.origin);
  console.log('WebSocket connection accepted.');

  connection.on('close', () => {
    console.log('WebSocket connection closed.');
  });

  // connection.sendUTF(JSON.stringify({ type: 'ADD_JOB', name: 'Task A', duration: 5000 }));

  connection.on('message', (message) => {
    if (message.type === 'utf8') {
      console.log(`Received: ${message.utf8Data}`);
    }
  });

});

// Function to broadcast job updates via WebSocket
function broadcastJobUpdate(updatedJob) {
  wsServer.broadcast(JSON.stringify(updatedJob));
}

// Example of updating job status and broadcasting
setTimeout(() => {
  const job = getSJFJob();
  console.log({ job });
  if (job) {
    updateJobStatus(job.id, 'running');
    broadcastJobUpdate(job);
    setTimeout(() => {
      updateJobStatus(job.id, 'completed');
      broadcastJobUpdate(job);
    }, job.duration * 1000);
  }
}, 5000); // Example: Simulate job processing after 5 seconds

// Start server
server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
