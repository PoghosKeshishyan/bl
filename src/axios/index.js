import axios from 'axios';

export default axios.create({
    baseURL: 'https://bl-backend-weld.vercel.app/',
})