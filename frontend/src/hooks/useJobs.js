import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../constants/config';

const useJobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/api/jobs`);
                setJobs(response.data);
            } catch (error) {
                console.error('Error fetching jobs:', error);
            }
        };

        fetchJobs();
    }, [jobs]);

    const addJob = async (name, duration) => {
        try {
            const newJob = await axios.post(`${API_BASE_URL}/api/jobs`, { name, duration });
            setJobs(prev => [...prev, newJob]);
        } catch (error) {
            console.error('Error submitting job:', error);
        }
    };

    return {
        jobs,
        addJob,
    };
};

export default useJobs;
