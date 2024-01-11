import axios from "axios";

axios.defaults.baseURL = isDev
  ? "/"
  : "http://mangosteen2.hunger-valley.com/api/v1";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.timeout = 10000;

export const ajax = {
  get: (path: string) => {
    return axios.get(path);
  },
  post: () => {},
  patch: () => {},
  delete: () => {},
};
