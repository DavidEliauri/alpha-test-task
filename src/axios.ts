import axios from 'axios';

const AxiosInstance = axios.create({
    baseURL: 'https://flems.github.io/test/api',
    headers: {
        Accept: 'application/json',
    },
});

export default AxiosInstance;

