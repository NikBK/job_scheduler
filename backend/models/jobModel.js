const { v4: uuidv4 } = require('uuid');

// let jobs = [];
let jobs = [
    { id: 1, status: 'pending', duration: 10, name: 'job1', type: 'JOBS_LIST' },
    { id: 2, status: 'pending', duration: 10, name: 'job2', type: 'JOBS_LIST' }
];


const addJob = (name, duration) => {
    const newJob = {
        id: uuidv4(),
        name,
        duration,
        status: 'pending',
    };
    jobs.push(newJob);
    return newJob;
};

const getJobs = () => {
    return jobs;
};

const updateJobStatus = (jobId, status) => {
    const job = jobs.find(j => j.id === jobId);
    if (job) {
        job.status = status;
    }
    return job;
};

const getSJFJob = () => {
    // Example implementation of SJF algorithm
    return jobs.filter(job => job.status === 'pending')
        .reduce((prev, current) => {
            return (!prev || current.duration < prev.duration) ? current : prev;
        }, null);
};

module.exports = {
    addJob,
    getJobs,
    updateJobStatus,
    getSJFJob,
};
