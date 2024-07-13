const { addJob, getJobs, updateJobStatus, getSJFJob } = require('../models/jobModel');
const { broadcastJobUpdate } = require('./websocketService');

// Business logic functions
const addNewJob = (name, duration) => {
    return addJob(name, duration);
};

const getAllJobs = () => {
    return getJobs();
};

// const updateJob = (jobId, status) => {
//     return updateJobStatus(jobId, status);
// };

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
    }, 5000); // Example: Simulate job processing after 5 seconds
};

module.exports = {
    getAllJobs,
    addNewJob,
    // updateJob,
    processJobs,
};