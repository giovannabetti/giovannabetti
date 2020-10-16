import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.15.8:1:3333',
});

export default api;