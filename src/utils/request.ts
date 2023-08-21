import axios from "axios";

const API_URL = "https://api.chucknorris.io/";

const axiosApiInstance = axios.create({
    baseURL: API_URL,
});

axiosApiInstance.interceptors.request.use(
    async (config) => {
        config.headers = {
            "Content-Type": "application/json",
            Accept: "application/json",
        };
        return config;
    },
    (error) => {
        Promise.reject(error);
    }
);

// axiosApiInstance.interceptors.response.use(
//     (response) => response,
//     async function (error) => Promise.reject(error)
// );

export async function get(url, config = {}) {
    return await axiosApiInstance
        .get(url, config)
        .then((response) => response.data)
}

export async function post(url, data, config = {}) {
    return await axiosApiInstance
        .post(url, data, config)
        .then((response) => response.data)
}