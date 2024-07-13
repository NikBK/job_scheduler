const { addJob, getJobs, updateJobStatus, getSJFJob } = require('../models/jobModel');
const { broadcastJobUpdate } = require('./websocketService');

// Service to add new Job
const addNewJob = (name, duration) => {
    return addJob(name, duration);
};

// Service to get all existing jobs
const getAllJobs = () => {
    return getJobs();
};

// Service that changes the status of Shortest Job
const processJobs = () => {
    setTimeout(() => {
        const job = getSJFJob();
        if (job) {
            updateJobStatus(job.id, 'running');
            broadcastJobUpdate(job);
            setTimeout(() => {
                updateJobStatus(job.id, 'completed');
                broadcastJobUpdate(job);
            }, job.duration * 1000);
        }
    }, 5000);
};

module.exports = {
    getAllJobs,
    addNewJob,
    processJobs,
};