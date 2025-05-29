import axios from "axios";

const instance = axios.create({
    baseURL: "https://fakestoreapi.com/",
});

// Add a request interceptor
instance.interceptors.request.use(
    function (config) {
        config.chutiya = "Ha hai bhai tu";
        console.log("REQUEST >>>", config);
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

// Add a response interceptor
instance.interceptors.response.use(
    function (response) {
        console.log("RESPONSE >>>", response);
        return response.data;
    },
    function (error) {
        return Promise.reject(error);
    }
);

export default instance;
