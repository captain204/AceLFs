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
<<<<<<< HEAD
    const token = localStorage.getItem('token'); // Get token from local storage
    if (token) {
      // Optionally, check if token is expired (requires token payload to contain exp claim)
      config.headers["Authorization"] = `Bearer ${token}`;
=======
    const token = localStorage.getItem('token'); // Retrieve token from localStorage
    if (token) {
      config.headers["Authorization"] = `Token ${token}`; // Set Authorization header with token
>>>>>>> 0ef7533ff447b892104031a82b6ce3dffd294f12
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
<<<<<<< HEAD
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
=======
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
>>>>>>> 0ef7533ff447b892104031a82b6ce3dffd294f12
          toast.error("Resource not found.", {
            position: "top-left",
          });
          break;
        case 500:
<<<<<<< HEAD
=======
          // Server error handling
>>>>>>> 0ef7533ff447b892104031a82b6ce3dffd294f12
          toast.error("Server error. Please try again later.", {
            position: "top-left",
          });
          break;
<<<<<<< HEAD
        // Add more cases as needed
        default:
=======
        default:
          // Default error handling
>>>>>>> 0ef7533ff447b892104031a82b6ce3dffd294f12
          toast.error("An unexpected error occurred.", {
            position: "top-left",
          });
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
<<<<<<< HEAD














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
=======
>>>>>>> 0ef7533ff447b892104031a82b6ce3dffd294f12
