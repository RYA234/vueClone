import axios from "axios";
// axios.defaults.withCredentials = false;

const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    xsrfHeaderName: 'X-XSRF-TOKEN',
    withCredentials: true
})

export default api;