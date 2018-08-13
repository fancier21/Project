import axios from 'axios'
import { getUser } from '../storage'
import stringify from 'qs/lib/stringify'

export const API_URL = 'http://35.228.223.175/api/';

// use this instance for all API requests
export const API = axios.create({
    baseURL: API_URL
});

API.interceptors.request.use((cfg) => {
    const { access_token } = getUser();
    if (access_token) {
        cfg.headers.common['Authorization'] =  `Bearer ${access_token}`
    }
    return cfg
});

export const URLENCODED = { 'Content-Type': 'application/x-www-form-urlencoded' };

export const APIUrlencoded = axios.create({
    baseURL: API_URL,
    headers: URLENCODED,
    transformRequest: [data => stringify(data)]
});

APIUrlencoded.interceptors.request.use((cfg) => {
    const { access_token } = getUser();
    if (access_token) {
        cfg.headers.common['Authorization'] =  `Bearer ${access_token}`
    }
    return cfg
});
