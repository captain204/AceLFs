// loginSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";
import axiosInstance from "../../../Interceptor";

export const logoutUser = createAsyncThunk(
  "login/logoutUser",
  async (_, { rejectWithValue }) => {
    try {
      await axiosInstance.post("/api/v1/dj-rest-auth/logout/");
      localStorage.removeItem("token");
      Cookies.remove("token");
      window.location.href = "/applicant/signin";
      return true;
    } catch (error: any) {
      toast.error("Failed to logout");
      return rejectWithValue("Failed to logout");
    }
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState: {
    loading: false,
    success: false,
    error: null,
    signupData: null,
    response: null,
    token: null,
  },
  reducers: {
    resetSignupState: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(logoutUser.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.loading = false;
        state.success = false;
        state.error = null;
        state.signupData = null;
        state.response = null;
        state.token = null;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload as string;
      });
  },
});

export const { resetSignupState } = loginSlice.actions;
export default loginSlice.reducer;
