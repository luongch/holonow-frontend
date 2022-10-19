import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.NODE_ENV === 'development' ? '' : 'https://holonowapi.onrender.com',
    withCredentials: true
})

export default axiosInstance