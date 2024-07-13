import React from 'react';
import './App.css';
import JobList from './components/JobList';
import JobForm from './components/JobForm';
import useWebSocket from './hooks/useWebSocket';


const App = () => {
  const client = useWebSocket();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Job Scheduler App</h1>
      </header>

      <main className="App-main">
        <JobForm />
        <JobList />
      </main>

      <footer className="App-footer">
        <p>&copy; {new Date().getFullYear()} Job Scheduler App</p>
      </footer>
    </div>
  );
};

export default App;
