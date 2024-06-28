import axios from "axios";
import { API_TARGET, API_URL } from "../constants";

const getUserToken = () => {
  const savedCustomer = JSON.parse(
    localStorage.getItem("rolands-app-customer")
  );
  return savedCustomer ? savedCustomer.token : "";
};

const api = axios.create({
  baseURL: `${API_TARGET}/${API_URL}`,
});

api.defaults.headers.post["Content-Type"] = "application/json";
api.defaults.headers.common["Authorization"] = getUserToken();

api.interceptors.request.use(
  (config) => {
    const token = getUserToken();
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common["Authorization"];
  }
};

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401 && error.response.data.error) {
      // Todo display user friendly message for unauthorized.
      console.log(error);
    } else if (error.response.status === 403) {
      // Can be an expired JWT token.
      console.log(
        "From api.utils.js... Try logging in again.",
        error.response.data
      );
      // Todo display user friendly message for forbidden.
      console.log(error);
    }

    if (error.response.status === 500) {
      // Todo display user friendly message for server error.
      console.log(error);
    }
    return Promise.reject(error);
  }
);

export default api;
