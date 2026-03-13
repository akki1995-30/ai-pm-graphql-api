import axios from "axios";

const api = axios.create({});

// Resolve baseURL at request time so dotenv is guaranteed to have loaded
api.interceptors.request.use((config) => {
    if (!config.baseURL) {
      console.log("NODE_API----->>>>>",  process.env.NODE_API )
    config.baseURL = process.env.NODE_API;
  }
  return config;
});

export default api;