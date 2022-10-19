import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.NODE_ENV === 'development' ? '' : 'https://holonowapi.onrender.com'
})

export default axiosInstance