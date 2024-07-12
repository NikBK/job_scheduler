class Job {
  constructor(id, name, duration) {
    this.id = id;
    this.name = name;
    this.duration = duration;
    this.status = 'pending'; // Possible statuses: pending, running, completed
  }
}

let jobs = [];
let jobIdCounter = 1;

function addJob(name, duration) {
  const newJob = new Job(jobIdCounter++, name, duration);
  jobs.push(newJob);
  return newJob;
}

function getJobs() {
  return jobs;
}

function getJobById(id) {
  return jobs.find(job => job.id === id);
}

function updateJobStatus(id, newStatus) {
  const job = getJobById(id);
  if (job) {
    job.status = newStatus;
    return job;
  }
  return null;
}

function getSJFJob() {
  // Sort jobs by duration (SJF - Shortest Job First)
  const sortedJobs = jobs.filter(job => job.status === 'pending').sort((a, b) => a.duration - b.duration);
  return sortedJobs[0]; // Return the shortest job
}

module.exports = { addJob, getJobs, getJobById, updateJobStatus, getSJFJob };
