const { addJob, getJobs, updateJobStatus, getSJFJob } = require('../models/jobModel');
const { broadcastJobUpdate } = require('./websocketService');

// Business logic functions
const addNewJob = (name, duration) => {
    return addJob(name, duration);
};

const getAllJobs = () => {
    return getJobs();
};

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