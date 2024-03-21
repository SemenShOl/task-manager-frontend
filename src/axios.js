import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3001",
  // baseURL: "http://31.129.107.71:3001",
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = window.localStorage.getItem("token");
  return config;
});

export default instance;
