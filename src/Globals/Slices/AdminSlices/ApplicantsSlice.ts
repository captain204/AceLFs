import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosInstanceAdmin from "../../Interceptoradmin";

interface GetApplicantsState {
  loading: boolean;
  success: boolean;
  error: string | null;
  applicants: any;
}

const initialState: GetApplicantsState = {
  loading: false,
  success: false,
  error: null,
  applicants: null,
};

export const getAllApplicants = createAsyncThunk(
  "applicants/getAllApplicants",
  async () => {
    try {
      const response = await axiosInstanceAdmin.get(
        "/api/v1/admissions/applicants/"
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

const applicantsSlice = createSlice({
  name: "applicants",
  initialState,
  reducers: {
    clearApplicantsState: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
      state.applicants = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllApplicants.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(getAllApplicants.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.applicants = action.payload;
      })
      .addCase(getAllApplicants.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearApplicantsState } = applicantsSlice.actions;
export default applicantsSlice.reducer;
