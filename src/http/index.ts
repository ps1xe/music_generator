import axios from 'axios';

export const BASE_URL = 'http://localhost:4000';

const $api = axios.create({
  baseURL: BASE_URL,
});

$api.interceptors.request.use((config) => {
  config.headers!.Authorization = `Bearer ${localStorage.getItem('access_token')}`;
  return config;
});

export default $api;