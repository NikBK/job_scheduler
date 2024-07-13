const { addNewJob, getAllJobs } = require('../services/jobService');

const createJob = (req, res) => {
    const { name, duration } = req.body;
    if (!name || !duration) {
        return res.status(400).json({ message: 'Job name and duration are required.' });
    }

    const newJob = addNewJob(name, duration);
    res.status(201).json(newJob);
};

const listJobs = (req, res) => {
    const jobs = getAllJobs();
    res.json(jobs);
};


module.exports = {
    createJob,
    listJobs,
};