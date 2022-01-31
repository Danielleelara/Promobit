import axios from 'axios';

const api = axios.create({
    baseURL: 'https://www.themoviedb.org/settings/api'
});

export default api;