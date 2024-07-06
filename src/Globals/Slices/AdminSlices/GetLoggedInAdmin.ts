import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosInstanceAdmin from "../../Interceptoradmin";

interface LoggedInAdminState {
  loading: boolean;
  success: boolean;
  error: string | null;
  admin: any;
}

const initialState: LoggedInAdminState = {
  loading: false,
  success: false,
  error: null,
  admin: null,
};

export const getLoggedInAdmin = createAsyncThunk(
  "loggedInAdmin/getLoggedInAdmin",
  async () => {
    try {
      const response = await axiosInstanceAdmin.get(
        "/api/v1/useradmin/admin-auth/me/"
      );
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

const loggedInAdminSlice = createSlice({
  name: "loggedInAdmin",
  initialState,
  reducers: {
    clearLoggedInAdminState: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
      state.admin = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getLoggedInAdmin.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(getLoggedInAdmin.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.admin = action.payload;
      })
      .addCase(getLoggedInAdmin.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.error.message || "An error occurred";
        state.admin = null;
      });
  },
});

export const { clearLoggedInAdminState } = loggedInAdminSlice.actions;
export default loggedInAdminSlice.reducer;
