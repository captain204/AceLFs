import axios from "axios";
import { toast } from "react-toastify";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem('token'); // Get token from local storage
    if (token) {
      // Optionally, check if token is expired (requires token payload to contain exp claim)
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      const { status } = error.response;
      switch (status) {
        case 401:
          // toast.info("Unauthorized. Please log in again.", {
          //   position: "top-left",
          // });
          // Optionally redirect user to login page
          window.location.href = "/login";
          break;
        case 403:
          toast.info("Access forbidden. You do not have permission.", {
            position: "top-left",
          });
          // Optionally handle specific forbidden access case
          break;
        case 404:
          toast.error("Resource not found.", {
            position: "top-left",
          });
          break;
        case 500:
          toast.error("Server error. Please try again later.", {
            position: "top-left",
          });
          break;
        // Add more cases as needed
        default:
          toast.error("An unexpected error occurred.", {
            position: "top-left",
          });
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;














// import axios from "axios";
// import { toast } from "react-toastify";
// import Cookies from "js-cookie";

// const axiosInstance = axios.create({
//   baseURL: process.env.NEXT_PUBLIC_BASE_URL,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// axiosInstance.interceptors.request.use(
//   async (config) => {
//     const token = Cookies.get('authToken'); // Get token from Cookies
//     if (token) {
//       // Optionally, check if token is expired (requires token payload to contain exp claim)
//       config.headers["Authorization"] = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// axiosInstance.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     if (error.response) {
//       const { status } = error.response;
//       switch (status) {
//         case 401:
//           // toast.info("Unauthorized. Please log in again.", {
//           //   position: "top-left",
//           // });
//           // Optionally redirect user to login page
//           window.location.href = "/login";
//           break;
//         case 403:
//           toast.info("Access forbidden. You do not have permission.", {
//             position: "top-left",
//           });
//           // Optionally handle specific forbidden access case
//           break;
//         case 404:
//           toast.error("Resource not found.", {
//             position: "top-left",
//           });
//           break;
//         case 500:
//           toast.error("Server error. Please try again later.", {
//             position: "top-left",
//           });
//           break;
//         // Add more cases as needed
//         default:
//           toast.error("An unexpected error occurred.", {
//             position: "top-left",
//           });
//       }
//     }
//     return Promise.reject(error);
//   }
// );

// export default axiosInstance;
