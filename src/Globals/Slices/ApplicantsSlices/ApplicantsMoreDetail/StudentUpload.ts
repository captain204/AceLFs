import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosInstanceAdmin from "../../../Interceptoradmin";


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

export const getStudentUploads = createAsyncThunk(
  "uploads/getStudentUploads",
  async (id: string) => {
    try {
      const response = await axiosInstanceAdmin.get(
        `/api/v1/admissions/student-uploads/${id}`
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

const studentUploadsSlice = createSlice({
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
      .addCase(getStudentUploads.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(getStudentUploads.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.uploads = action.payload;
      })
      .addCase(getStudentUploads.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearStudentUploadsState } = studentUploadsSlice.actions;
export default studentUploadsSlice.reducer;
