import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000/api",
});

api.interceptors.request.use((config) => {
    const token = sessionStorage.getItem("token");
    if (token) {
        config.params = {
            ...config.params,
            api_token: token
        };
    }
    return config;
});

export default api;