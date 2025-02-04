import axios from "axios";
import { getUserProfile } from "@/services/auth/login";

const axiosInstance = axios.create({
  baseURL: "/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const userProfile = getUserProfile();
    if (userProfile) {
      config.headers["Client-Id"] = userProfile.clientId;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("userProfile");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
