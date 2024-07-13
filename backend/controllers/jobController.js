const { addNewJob, getAllJobs } = require('../services/jobService');

// Fetch all jobs
const listJobs = (req, res) => {
    const jobs = getAllJobs();
    res.json(jobs);
};

// Create a new Job
const createJob = (req, res) => {
    const { name, duration } = req.body;
    if (!name || !duration) {
        return res.status(400).json({ message: 'Job name and duration are required.' });
    }

    const newJob = addNewJob(name, duration);
    res.status(201).json(newJob);
};


module.exports = {
    createJob,
    listJobs,
};