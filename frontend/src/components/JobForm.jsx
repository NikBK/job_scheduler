import React, { useState } from 'react';
import useJobs from '../hooks/useJobs';

const JobForm = () => {
  const [jobName, setJobName] = useState('');
  const [duration, setDuration] = useState('');
  const { addJob } = useJobs();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!jobName.trim() || isNaN(duration)) {
      alert('Please enter valid values for job name and duration.');
      return;
    }
    await addJob(jobName.trim(), parseInt(duration, 10));
    setJobName('');
    setDuration('');
  };

  return (
    <div className="job-form-container">
      <h2>Submit Job</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="jobName">Job Name:</label>
          <input
            type="text"
            id="jobName"
            value={jobName}
            onChange={(e) => setJobName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="duration">Duration (seconds):</label>
          <input
            type="number"
            id="duration"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit Job</button>
      </form>
    </div>
  );
};

export default JobForm;
