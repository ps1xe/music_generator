import axios from "axios";

export const BASE_URL = "http://localhost:4000";

const $api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export default $api;
