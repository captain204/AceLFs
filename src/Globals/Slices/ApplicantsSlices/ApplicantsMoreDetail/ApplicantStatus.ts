import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosInstance from "../../../Interceptor";

interface ApplicantStatusState {
  loading: boolean;
  success: boolean;
  error: string | null;
  status: any;
}

const initialState: ApplicantStatusState = {
  loading: false,
  success: false,
  error: null,
  status: null,
};

export const getApplicantStatus = createAsyncThunk(
  "applicantStatus/getApplicantStatus",
  async () => {
    try {
      const response = await axiosInstance.get(
        "/api/v1/admissions/students/admission-status/"
      );
      console.log(response.data);
      return response.data;
    } catch (error: any) {
      if (error.response) {
        // toast.error(error?.response?.data?.message);
        console.log(error.response);
        console.log(error);
      } else {
        toast.error("An error occurred!!");
      }
      throw error;
    }
  }
);

const applicantStatusSlice = createSlice({
  name: "applicantStatus",
  initialState,
  reducers: {
    clearApplicantStatusState: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
      state.status = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getApplicantStatus.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(getApplicantStatus.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.status = action.payload;
      })
      .addCase(getApplicantStatus.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.error.message || "An error occurred";
        state.status = null;
      });
  },
});

export const { clearApplicantStatusState } = applicantStatusSlice.actions;
export default applicantStatusSlice.reducer;
