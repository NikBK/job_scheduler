import React, { useState } from 'react';
import './App.css'; // Assuming you have a CSS file for styling
import JobList from './components/JobList';
import JobForm from './components/JobForm';
import WebSocketClient from './components/WebSocketClient';

const App = () => {
  const [jobs, setJobs] = useState([]);

  const handleJobUpdate = (updatedJob) => {
    // Update jobs array with the updated job from WebSocket
    setJobs((prevJobs) =>
      prevJobs.map((job) => (job.id === updatedJob.id ? updatedJob : job))
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Job Scheduler App</h1>
      </header>
      <main className="App-main">
        <JobForm />
        <JobList jobs={jobs} />
        <WebSocketClient onJobUpdate={handleJobUpdate} />
      </main>
      <footer className="App-footer">
        <p>&copy; 2024 Job Scheduler App</p>
      </footer>
    </div>
  );
};

export default App;
