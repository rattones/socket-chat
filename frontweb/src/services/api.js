import axios  from 'axios';

const api = axios.create({
    headers: {'Access-Control-Allow-Origin': '*',
                "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, DELETE" },
    baseURL: 'http://localhost:8090',
});

export default api;