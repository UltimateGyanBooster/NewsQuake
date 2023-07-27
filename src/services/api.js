import axios from 'axios';

const API_KEY = '6f24584a150049f7964c87dc15d2b09e';

const api = axios.create({
    baseURL: 'https://newsapi.org/v2',
    params: {
        apiKey: API_KEY,
    },
});

export default api;