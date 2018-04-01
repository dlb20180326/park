import axios from 'axios';
import qs from 'qs';

const baseURL = '/api/';

// Add a request interceptor
axios.interceptors.request.use(
    config => {
        // Do something before request is sent
        if (!/^(http(s)?:\/\/|\/)/.test(config.url)) {
            config.url = baseURL + config.url;
        }
        if (config.method.toUpperCase() === 'POST') {
            config.data = qs.stringify(config.data);
            config.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
        }
        return config;
    },
    error => Promise.reject(error)
);

// Add a response interceptor
axios.interceptors.response.use(
    response => {
        // Do something with response data
        if (!response.data.status) {
            return Promise.reject(response.data);
        }
        return response.data;
    },
    error => Promise.reject(error)
);
