import axios  from 'axios';

const api = axios.create({
    baseURL: 'http://chat.marceloratton.com',
    // withCredentials: false, 
});

export default api;