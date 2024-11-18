import axios from "axios"

const api=axios.create({
    baseURL: ' http://localhost:5000/api/',
    //https://test-pro-online-test-platform.vercel.app/api/
    // headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}
});

export default api;