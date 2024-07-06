import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosInstance from "../../Interceptor";
import axiosInstanceAuth from "../../InterceptorAuth";
// import axiosInstance from "../../Interceptors";

interface GetModulesState {
  loading: boolean;
  success: boolean;
  error: string | null;
  modules: any; // Replace `any` with appropriate type if known
}

const initialState: GetModulesState = {
  loading: false,
  success: false,
  error: null,
  modules: null,
};

export const getAllModules = createAsyncThunk(
  "modules/getAllModules",
  async () => {
    try {
      const response = await axiosInstance.get("api/v1/coursemodule"); 
      return response.data;
    } catch (error: any) {
      if (error.response) {
        toast.error(error?.response?.data?.message);
        console.log(error.response);
      } else {
        toast.error("An error occurred!!");
      }
      return error.response?.data?.error || "An error occurred";
    }
  }
);

const modulesSlice = createSlice({
  name: "modules",
  initialState,
  reducers: {
    clearModulesState: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
      state.modules = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllModules.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(getAllModules.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.modules = action.payload;
      })
      .addCase(getAllModules.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearModulesState } = modulesSlice.actions;
export default modulesSlice.reducer;
