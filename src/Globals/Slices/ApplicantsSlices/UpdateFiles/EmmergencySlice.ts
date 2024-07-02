import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosInstance from "../../../Interceptor";


interface GetEmergencyContactState {
  loading: boolean;
  success: boolean;
  error: string | null;
  econtact: any;
}

const initialState: GetEmergencyContactState = {
  loading: false,
  success: false,
  error: null,
  econtact: null,
};

export const ApplicantGetEmergencyContact= createAsyncThunk(
  "contacts/getEmergencyContact",
  async (id: string) => {
    try {
      const response = await axiosInstance.get(
        `/api/v1/admissions/emergency-contacts/${id}`
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

const ApplicantEmergencyContactSlice = createSlice({
  name: "emergencyContact",
  initialState,
  reducers: {
    clearEmergencyContactState: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
      state.econtact = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(ApplicantGetEmergencyContact.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(ApplicantGetEmergencyContact.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.econtact = action.payload;
      })
      .addCase(ApplicantGetEmergencyContact.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearEmergencyContactState } = ApplicantEmergencyContactSlice.actions;
export default ApplicantEmergencyContactSlice.reducer;
