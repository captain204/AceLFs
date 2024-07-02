import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosInstance from "../../../Interceptor";

interface EachStudentState {
  loading: boolean;
  success: boolean;
  error: string | null;
  student: any;
}

const initialState: EachStudentState = {
  loading: false,
  success: false,
  error: null,
  student: null,
};

export const getEachStudent = createAsyncThunk(
  "eachStudent/getEachStudent",
  async (id: string) => {
    try {
      const response = await axiosInstance.get(
        `/api/v1/admissions/students/${id}`
      );

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

const eachStudentSlice = createSlice({
  name: "eachStudent",
  initialState,
  reducers: {
    clearEachStudentState: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
      state.student = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getEachStudent.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(getEachStudent.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.student = action.payload;
      })
      .addCase(getEachStudent.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.error.message || "An error occurred";
        state.student = null;
      });
  },
});

export const { clearEachStudentState } = eachStudentSlice.actions;
export default eachStudentSlice.reducer;
