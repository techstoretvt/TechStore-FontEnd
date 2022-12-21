import axios from 'axios';
// require('dotenv').config()

const instance = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
    // withCredentials: true
});

instance.interceptors.response.use(
    (response) => {
        return response.data;
    },

);

export default instance;
