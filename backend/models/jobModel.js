const { v4: uuidv4 } = require('uuid');

let jobs = [
    { id: 1, status: 'pending', duration: 10, name: 'job1' },
    { id: 2, status: 'pending', duration: 10, name: 'job2' }
];

// Adds new job
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

// Fetch all jobs
const getJobs = () => {
    return jobs;
};

// Updates status of a given jobId
const updateJobStatus = (jobId, status) => {
    const job = jobs.find(j => j.id === jobId);
    if (job) {
        job.status = status;
    }
    return job;
};

// SJF algorithm (Shortest Job First)
const getSJFJob = () => {
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
