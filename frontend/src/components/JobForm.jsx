import React, { useState } from "react";
import axios from "axios";

const JobForm = () => {
  const [jobName, setJobName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/jobs", {
        name: jobName,
        duration: 10,
      }); // Adjust URL as per your backend
      setJobName("");
      alert("Job submitted successfully!");
    } catch (error) {
      console.error("Error submitting job:", error);
      alert("Failed to submit job");
    }
  };

  return (
    <div>
      <h2>Submit Job</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Job Name:
          <input
            type="text"
            value={jobName}
            onChange={(e) => setJobName(e.target.value)}
            required
          />
        </label>
        <button type="submit">Submit Job</button>
      </form>
    </div>
  );
};

export default JobForm;
