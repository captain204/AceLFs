import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosInstance from "../../../Interceptor";
import axiosInstanceAuth from "../../../InterceptorAuth";


interface GetCoursesState {
  loading: boolean;
  success: boolean;
  error: string | null;
  courses: any; // Replace `any` with the appropriate type if known
}

const initialState: GetCoursesState = {
  loading: false,
  success: false,
  error: null,
  courses: null,
};

export const getAllCourses = createAsyncThunk(
  "courses/getAllCourses",
  async () => {
    try {
      const response = await axiosInstanceAuth.get("/api/v1/program/degreecourse"); 
      return response.data;
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

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    clearCoursesState: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
      state.courses = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCourses.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(getAllCourses.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.courses = action.payload;
      })
      .addCase(getAllCourses.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearCoursesState } = coursesSlice.actions;
export default coursesSlice.reducer;
