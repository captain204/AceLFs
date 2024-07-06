import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosInstance from "../../../Interceptor";

interface GetStudentUploadsState {
  loading: boolean;
  success: boolean;
  error: string | null;
  uploads: any;
}

const initialState: GetStudentUploadsState = {
  loading: false,
  success: false,
  error: null,
  uploads: null,
};

export const getStudentUploadsApplicant = createAsyncThunk(
  "uploads/getStudentUploads",
  async (id: string) => {
    try {
      const response = await axiosInstance.get(
        `/api/v1/admissions/student-uploads/student/${id}/`
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
      return error.response?.data?.error || "An error occurred";
    }
  }
);

const studentUploadsApplicantSlice = createSlice({
  name: "studentUploads",
  initialState,
  reducers: {
    clearStudentUploadsState: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
      state.uploads = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getStudentUploadsApplicant.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(getStudentUploadsApplicant.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.uploads = action.payload;
      })
      .addCase(getStudentUploadsApplicant.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearStudentUploadsState } =
  studentUploadsApplicantSlice.actions;
export default studentUploadsApplicantSlice.reducer;
