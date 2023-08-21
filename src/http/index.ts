import axios from 'axios';

export const BASE_URL = 'https://be-marketplace-25yxc.ondigitalocean.app/';

export const $api = axios.create({
  withCredentials: true,
  baseURL: BASE_URL,
});

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});
