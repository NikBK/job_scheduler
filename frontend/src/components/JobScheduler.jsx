import React from 'react';
import { JobForm, JobList } from './index';

const JobScheduler = () => {
    return (
        <main className="App-main">
            <JobForm />
            <JobList />
        </main>
    )
}

export default JobScheduler;
