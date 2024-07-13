const { addJob, getJobs, updateJobStatus, getSJFJob } = require('../models/jobModel');
const { broadcastJobUpdate } = require('./websocketService');

// Service to add new Job
const addNewJob = (name, duration) => {
    const newJob = addJob(name, duration);
    processJobs();
    return newJob;
};

// Service to get all existing jobs
const getAllJobs = () => {
    return getJobs();
};

// Service that changes the status of Shortest Job
let runningJobTime = 1;
const processJobs = () => {
    if (runningJobTime == 1) {
        setTimeout(() => {
            const job = getSJFJob();
            if (job) {
                updateJobStatus(job.id, 'running');
                broadcastJobUpdate(job);
                runningJobTime = job.duration;
                setTimeout(() => {
                    updateJobStatus(job.id, 'completed');
                    broadcastJobUpdate(job);
                    runningJobTime = 1;
                    processJobs(); // Continue processing jobs recursively
                }, job.duration * 1000);
            } else {
                runningJobTime = 1; // Reset runningJobTime when no jobs are available
            }
        }, runningJobTime * 1000);
    }
};

module.exports = {
    getAllJobs,
    addNewJob,
    processJobs,
};