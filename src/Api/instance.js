import axios from 'axios'
import {getToken} from '../Api/services/AuthService'

const BASE_URL = process.env.REACT_APP_API_URL;


export const instance = axios.create({
    baseURL: BASE_URL,
});

/**
 * Interceps all http request from app
 */
instance.interceptors.request.use(
    (request) => {
        const token = getToken();
        request.headers['Authorization'] = token ? `Bearer ${token}` : '';
        return request;
    },
    (error) => error
)

