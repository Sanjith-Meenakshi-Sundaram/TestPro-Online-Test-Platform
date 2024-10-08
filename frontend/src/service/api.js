import axios from "axios"

const api=axios.create({
    baseURL: 'https://test-pro-online-test-platform-j1x69oak0.vercel.app/api/'
    // headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}
});

export default api;