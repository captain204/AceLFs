import axios from "axios";
import { toast } from "react-toastify";

const axiosInstanceAdmin = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstanceAdmin.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem('adminToken');
    if (token) {
      config.headers["Authorization"] = `Token ${token}`; 
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstanceAdmin.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      const { status } = error.response;
      switch (status) {
        case 401:
          // Unauthorized access handling
          window.location.href = "/login"; // Redirect to login page
          break;
        case 403:
          // Forbidden access handling
          toast.info("Access forbidden. You do not have permission.", {
            position: "top-left",
          });
          break;
        case 404:
          // Not Found handling
          toast.error("Resource not found.", {
            position: "top-left",
          });
          break;
        case 500:
          // Server error handling
          toast.error("Server error. Please try again later.", {
            position: "top-left",
          });
          break;
        default:
          // Default error handling
          toast.error("An unexpected error occurred.", {
            position: "top-left",
          });
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstanceAdmin;
