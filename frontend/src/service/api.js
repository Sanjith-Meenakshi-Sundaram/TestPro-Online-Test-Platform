import axios from "axios"

const api=axios.create({
    baseURL: 'https://test-pro-online-test-57jq9yttk-surjeet-dhakads-projects.vercel.app/api/'
    // headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}
});

export default api;