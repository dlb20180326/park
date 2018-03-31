import axios from 'axios';

const baseURL = '/api/';

// Add a request interceptor
axios.interceptors.request.use(
    config => {
        // Do something before request is sent
        if (!/^(http(s)?:\/\/|\/)/.test(config.url)) {
            config.url = baseURL + config.url;
        }
        return config;
    },
    error => Promise.reject(error)
);

// Add a response interceptor
axios.interceptors.response.use(
    response => {
        // Do something with response data
        if (response.data.code) {
            return Promise.reject(response.data);
        }
        return response.data;
    },
    error => Promise.reject(error)
);
