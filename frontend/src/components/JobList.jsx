import React, { useEffect, useState } from "react";
import axios from "axios";

const JobList = ({ jobs, setJobs }) => {
  // const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/jobs"); // Adjust URL as per your backend
      setJobs(response.data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "pending":
        return "orange";
      case "running":
        return "blue";
      case "completed":
        return "green";
      case "failed":
        return "red";
      default:
        return "black";
    }
  };

  return (
    <div>
      <h2>Job List</h2>
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            <span style={{ color: getStatusColor(job.status) }}>
              {job.name}
            </span>
            <span> - Status: {job.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobList;
