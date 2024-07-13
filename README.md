# Full Stack Job Scheduler Assignment - Node, React, and WebSockets

## Overview

This project implements a job scheduler with a React frontend that visualizes job statuses and allows users to submit new jobs. The scheduler uses the Shortest Job First (SJF) algorithm to prioritize jobs, and real-time updates are achieved using WebSockets.

## Project Structure

The project consists of two main components:

1. **Node.js Backend**
   - Manages job scheduling logic.
   - Provides REST API endpoints for job management.
   - Uses WebSockets to broadcast job status updates.

2. **React Frontend**
   - Displays job statuses and provides a form for job submission.
   - Utilizes WebSockets to receive real-time updates from the backend.

## Tasks Implemented

### Node.js Backend

- **Job Representation:**
  - Created a JavaScript object structure to represent jobs with `name` (string) and `duration` (number).

- **SJF Implementation:**
  - Implemented the Shortest Job First algorithm to prioritize jobs based on duration.

- **REST API:**
  - Implemented endpoints:
    - `POST /jobs` to submit a new job.
    - `GET /jobs` to retrieve the list of jobs.

- **WebSocket Server:**
  - Implemented a WebSocket endpoint (`/ws`) to broadcast job status updates to connected clients.

### React Frontend

- **Job Display:**
  - Designed React components to display job lists with clear visual indicators for different statuses.

- **Job Submission:**
  - Implemented a form to submit new jobs to the backend via REST API.

- **WebSocket Client:**
  - Established a WebSocket connection with the backend `/ws` endpoint to receive real-time updates.

## Setup Instructions

### Prerequisites

- Node.js and npm should be installed on your machine.

### Backend Setup

1. **Install dependencies:**
   ```bash
   cd backend
   npm install

2. **Start the backend server:**
    ```bash
    npm start

    The backend will run at http://localhost:5000.

### Frontend Setup

1. **Install dependencies:**
   ```bash
   cd frontend
   npm install

2. **Start the frontend server:**
    ```bash
    npm start

    The frontend will run at http://localhost:3000.

## Technologies used

- Backend:

    - Node.js
    - WebSocket (websocket library)
    - Express.js (for REST API)

- Frontend:

    - React.js
    - WebSocket API (for WebSocket client)

## Design Choices and Approaches

- Backend:

    - Job Representation: Used a simple JavaScript object to represent jobs with name and duration.
    - SJF Implementation: Implemented the Shortest Job First algorithm to prioritize jobs based on their duration.
    - REST API: Designed basic endpoints (POST /jobs, GET /jobs) for job submission and retrieval.
    - WebSocket: Established WebSocket communication to provide real-time updates to connected clients about job status changes.

- Frontend:

    - Component Design: Created React components to display job lists and status indicators using conditional rendering based on job status.
    - Form Handling: Implemented form submission for adding new jobs, sending requests to the backend API.
    - WebSocket Integration: Set up WebSocket listeners to update the UI instantly upon receiving job status updates from the backend.
