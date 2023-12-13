import api_config from "./Api";
import axios from "./Api";

const listCategories = () => {
  return axios.get(`/api/category/get-list-all?page=1&size=100`);
};

const saveCate = (name, symbol, translate, description) => {
  return axios.post("/api/category/insert", {
    name,
    symbol,
    translate,
    description,
  });
};

api_config.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
export { listCategories, saveCate };
