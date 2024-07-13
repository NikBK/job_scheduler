const { addNewJob, getAllJobs, updateJob } = require('../services/jobService');


const listJobs = (req, res) => {
    const jobs = getAllJobs();
    res.json(jobs);
};

const createJob = (req, res) => {
    const { name, duration } = req.body;
    if (!name || !duration) {
        return res.status(400).json({ message: 'Job name and duration are required.' });
    }

    const newJob = addNewJob(name, duration);
    res.status(201).json(newJob);
};

// const updateJobStatus = (req, res) => {
//     const { id, status } = req.body;
//     if (!id && !status) {
//         return res.status(400).json({ message: 'Job ID and status are required.' });
//     }

//     const updatedJob = updateJob(id, status);
//     res.status(201).json(updatedJob);
// };

module.exports = {
    createJob,
    listJobs,
    // updateJobStatus,
};