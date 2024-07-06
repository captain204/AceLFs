import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosInstance from "../../Interceptor";
import axiosInstanceAuth from "../../InterceptorAuth";


interface GetCurrentUserState {
  loading: boolean;
  success: boolean;
  error: string | null;
  currentUser: any; // Replace `any` with the appropriate type if known
}

const initialState: GetCurrentUserState = {
  loading: false,
  success: false,
  error: null,
  currentUser: null,
};

export const getCurrentUser = createAsyncThunk(
  "currentuser/getCurrentUser",
  async () => {
    try {
      const response = await axiosInstance.get("/api/v1/admissions/students/me/"); 
      return response.data[0];
    } catch (error: any) {
      if (error.response) {
        toast.error(error?.response?.data?.message);
        console.log(error.response);
        console.log(error)
      } else {
        toast.error("An error occurred!!");
      }
      return error.response?.data?.error || "An error occurred";
    }
  }
);

const currentUserSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    clearCurrentUserState: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
      state.currentUser = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCurrentUser.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.currentUser = action.payload;
      })
      .addCase(getCurrentUser.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearCurrentUserState } = currentUserSlice.actions;
export default currentUserSlice.reducer;
