import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8000', // Changed to localhost to match frontend domain
    withCredentials: true, // Important for cookies
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;
