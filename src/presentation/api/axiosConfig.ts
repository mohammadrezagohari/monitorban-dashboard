import axios from "axios";
import { BASE_URL, BASE_URL_FAKE } from "../services/Base_API";
import { getFromLocalStorage, removeFromLocalStorage } from "../utils/utils";

const axiosApi = axios.create({
    baseURL: BASE_URL_FAKE, //TODO:: Fake should be deleted
    headers: {
        "Content-Type": "application/json"
    }
});

axiosApi.interceptors.request.use(
    (config) => {
        const token = getFromLocalStorage('access_token')
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config;
    },
    error => Promise.reject(error)
);

axiosApi.interceptors.response.use(
    response => response,
    (error) => {
        if (error.response?.status === 401) {
            removeFromLocalStorage("access_token");
            window.location.href = "/login";
        }
        return Promise.reject(error)
    }
)

export default axiosApi;