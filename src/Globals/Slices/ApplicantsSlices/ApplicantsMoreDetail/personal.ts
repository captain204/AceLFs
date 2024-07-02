import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosInstanceAdmin from "../../../Interceptoradmin";

interface GetApplicantInformationState {
  loading: boolean;
  success: boolean;
  error: string | null;
  personal: any;
}

const initialState: GetApplicantInformationState = {
  loading: false,
  success: false,
  error: null,
  personal: null,
};

export const getApplicantInformation = createAsyncThunk(
  "applicants/getApplicantInformation",
  async (id: string) => {
    try {
      const response = await axiosInstanceAdmin.get(
        `/api/v1/admissions/applicants/${id}/`
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

const applicantInformationSlice = createSlice({
  name: "applicantInformation",
  initialState,
  reducers: {
    clearApplicantInformationState: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
      state.personal = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getApplicantInformation.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(getApplicantInformation.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.personal = action.payload;
      })
      .addCase(getApplicantInformation.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearApplicantInformationState } =
  applicantInformationSlice.actions;
export default applicantInformationSlice.reducer;
