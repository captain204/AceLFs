import axios from "axios";
import { toast } from "react-toastify";

const axiosInstanceUpload = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

axiosInstanceUpload.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("token"); // Retrieve token from localStorage
    if (token) {
      config.headers["Authorization"] = `Token ${token}`; // Set Authorization header with token
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstanceUpload.interceptors.response.use(
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
          toast.info(
            "Your Files are missing, re-upload the required files and any other again!",
            {
              position: "top-left",
            }
          );
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstanceUpload;
