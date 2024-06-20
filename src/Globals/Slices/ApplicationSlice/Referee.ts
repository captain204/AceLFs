import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosInstanceAuth from "../../InterceptorAuth";
import axiosInstance from "../../Interceptor";

interface RefereeFormData {
  firstname: string;
  lastname: string;
  email: string;
  contactAddress: string;
  phoneNumber: string;
}

interface RefereeFormState {
  loading: boolean;
  success: boolean;
  error: string | null;
  response: any | null;
}

const initialState: RefereeFormState = {
  loading: false,
  success: false,
  error: null,
  response: null,
};

export const submitRefereeForm = createAsyncThunk(
  "refereeForm/submitRefereeForm",
  async (formData: RefereeFormData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(
        "/api/v1/admissions/referee",
        formData
      );
      // if (response.status >= 200 && response.status < 300) {
      //   toast.success("referee submitted successfully");
      //   console.log(response)
      //   return response.data;
      // }
    } catch (error: any) {
      console.log(error);
      if (error.response?.data) {
        const errorMessages = Object.values(error.response.data);
        errorMessages.forEach((errorMessage: any) => {
          toast.error(errorMessage);
        });
      } else {
        toast.error("An error occurred");
      }
      return rejectWithValue(
        error.response?.data?.error || "An error occurred"
      );
    }
  }
);

const refereeFormSlice = createSlice({
  name: "refereeForm",
  initialState,
  reducers: {
    resetRefereeFormState: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitRefereeForm.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(submitRefereeForm.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.response = action.payload;
      })
      .addCase(submitRefereeForm.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload as string;
      });
  },
});

export const { resetRefereeFormState } = refereeFormSlice.actions;
export default refereeFormSlice.reducer;
