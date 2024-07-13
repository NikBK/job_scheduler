import React from 'react';
import useJobs from '../hooks/useJobs';

const JobList = () => {
  const { jobs } = useJobs();

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending':
        return 'orange';
      case 'running':
        return 'blue';
      case 'completed':
        return 'green';
      case 'failed':
        return 'red';
      default:
        return 'black';
    }
  };

  return (
    <div className="job-list-container">
      <h2>Job List</h2>
      <ul className="job-list">
        {jobs.length === 0 ? (
          <li className="empty-list">No jobs available</li>
        ) : (
          jobs.map((job) => (
            <li key={job.id} className="job-item">
              <div>
                <span className="job-name">{job.name}</span>
                <span className="job-status" style={{ color: getStatusColor(job.status) }}>
                  {job.status}
                </span>
              </div>
              <div className="job-details">
                <span className="job-duration">Duration: {job.duration} seconds</span>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default JobList;
