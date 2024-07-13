const express = require('express');
const router = express.Router();
const { createJob, listJobs } = require('../controllers/jobController');


// POST /api/jobs - Add a new job
router.post('/', createJob);

// GET /api/jobs - Get all jobs
router.get('/', listJobs);


module.exports = router;