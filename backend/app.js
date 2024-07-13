const express = require('express');
const cors = require('cors');
const http = require('http');
const { setupWebSocket } = require('./services/websocketService');
const jobRoutes = require('./routes/jobRoutes');
const { processJobs } = require('./services/jobService');
require('dotenv').config();

const app = express();
const server = http.createServer(app);

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/jobs', jobRoutes);

// WebSocket setup
setupWebSocket(server);

processJobs();

module.exports = server;