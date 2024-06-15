// loginSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";
import axiosInstanceAuth from "../../Interceptor";
// import axiosInstanceAuth from "@/Globals/Interceptor";
import axios from "axios";

interface AdminLoginData {
  username: any;
  password: string;
}

interface LoginState {
  loading: boolean;
  success: boolean;
  error: string | null;
  signupData: AdminLoginData | null;
  response: any | null;
  token: string | null;
}

const initialState: LoginState = {
  loading: false,
  success: false,
  error: null,
  signupData: null,
  response: null,
  token: null,
};

export const loginAdmin = createAsyncThunk( "login/admin",
  async (loginData: AdminLoginData, { rejectWithValue }) => {
    try {
      const response = await axiosInstanceAuth.post(
        "/api/v1/useradmin/admin-auth/login/",
        loginData
      );
      if (response.status >= 200 && response.status < 300) {
        toast.success(response?.data?.message || "Login successful");
        console.log(response);
        const token = response.data.token;
        localStorage.setItem("token", token);
        const oneHour = 1 / 24;
        Cookies.set("authToken", token, { expires: oneHour });
      }
      return response.data;
    } catch (error: any) {
      const nonFieldErrors = error.response.data.non_field_errors;
        if (Array.isArray(nonFieldErrors)) {
          nonFieldErrors.forEach((errorMessage) => {
            toast.error(errorMessage); // Show each error message from the array
          });
        } else {
        toast.error("An error occurred");
      }
      return rejectWithValue(
        error.response?.data?.error || "An error occurred"
      );
    }
  }
);


const loginAdminSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    resetSignupState: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAdmin.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(loginAdmin.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.signupData = action.meta.arg;
        state.response = action.payload;
      })
      .addCase(loginAdmin.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload as string;
      });
  },
});

export const { resetSignupState } = loginAdminSlice.actions;
export default loginAdminSlice.reducer;
