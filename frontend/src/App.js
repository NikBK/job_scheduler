import React from 'react';
import './App.css';
import useWebSocket from './hooks/useWebSocket';
import { Header, Footer, JobScheduler } from './components/index';


const App = () => {
  const client = useWebSocket();

  return (
    <div className="App">
      <Header />
      <JobScheduler />
      <Footer />
    </div>
  );
};

export default App;
