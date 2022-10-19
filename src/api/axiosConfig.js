import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.NODE_ENV === 'development' ? 'http://localhost:3001' : 'https://holonowapi.onrender.com'
})

export default axiosInstance