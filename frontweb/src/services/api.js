import axios  from 'axios';

const api = axios.create({
    baseURL: 'http://chat.marceloratton.com',
});

export default api;