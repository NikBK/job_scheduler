const express = require('express');
const router = express.Router();
const { createJob, listJobs } = require('../controllers/jobController');


// GET /api/jobs - Get all jobs
router.get('/', listJobs);

// POST /api/jobs - Add a new job
router.post('/', createJob);


module.exports = router;