import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosInstance from "../../../Interceptor";

interface LoggedInUserState {
  loading: boolean;
  success: boolean;
  error: string | null;
  user: any;
}

const initialState: LoggedInUserState = {
  loading: false,
  success: false,
  error: null,
  user: null,
};

export const getLoggedInUser = createAsyncThunk(
  "loggedInUser/getLoggedInUser",
  async () => {
    try {
      const response = await axiosInstance.get("/api/v1/dj-rest-auth/user/");
      console.log(response.data);
      return response.data;
    } catch (error: any) {
      if (error.response) {
        toast.error(error?.response?.data?.message);
        console.log(error.response);
        console.log(error);
      } else {
        toast.error("An error occurred!!");
      }
      throw error;
    }
  }
);

const loggedInUserSlice = createSlice({
  name: "loggedInUser",
  initialState,
  reducers: {
    clearLoggedInUserState: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getLoggedInUser.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(getLoggedInUser.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.user = action.payload;
      })
      .addCase(getLoggedInUser.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.error.message || "An error occurred";
        state.user = null;
      });
  },
});

export const { clearLoggedInUserState } = loggedInUserSlice.actions;
export default loggedInUserSlice.reducer;
