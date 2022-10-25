import axios from 'axios';

export const app = axios.create({
    timeout: 0,
    baseURL: 'http://localhost:5000',
    headers: {
        "Content-Type": "application/json"
    },
    withCredentials: false
});