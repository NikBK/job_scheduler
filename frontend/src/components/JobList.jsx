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

  // Filter jobs by status
  const pendingJobs = jobs.filter(job => job.status === 'pending');
  const runningJobs = jobs.filter(job => job.status === 'running');
  const completedJobs = jobs.filter(job => job.status === 'completed');

  return (
    <div className="job-list-container">
      <h2>Job List</h2>
      <div className="job-columns">
        {/* Column for Pending Jobs */}
        <div className="job-column">
          <h3>Pending Jobs</h3>
          <ul className="job-list">
            {pendingJobs.length === 0 ? (
              <li className="empty-list">No pending jobs</li>
            ) : (
              pendingJobs.map((job) => (
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

        {/* Column for Running Jobs */}
        <div className="job-column">
          <h3>Running Jobs</h3>
          <ul className="job-list">
            {runningJobs.length === 0 ? (
              <li className="empty-list">No running jobs</li>
            ) : (
              runningJobs.map((job) => (
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

        {/* Column for Completed Jobs */}
        <div className="job-column">
          <h3>Completed Jobs</h3>
          <ul className="job-list">
            {completedJobs.length === 0 ? (
              <li className="empty-list">No completed jobs</li>
            ) : (
              completedJobs.map((job) => (
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
      </div>
    </div>
  );
};

export default JobList;
