import axios from "axios";

const api_config = axios.create({
  baseURL: "http://10.2.22.108:8080",
});
export default api_config;
