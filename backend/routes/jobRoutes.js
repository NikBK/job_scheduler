const express = require('express');
const router = express.Router();
const { createJob, listJobs, updateJobStatus } = require('../controllers/jobController');


// GET /api/jobs - Get all jobs
router.get('/', listJobs);

// POST /api/jobs - Add a new job
router.post('/', createJob);

// PUT /api/jobs/update/status - update job status
// router.put('/update/status', updateJobStatus);


module.exports = router;