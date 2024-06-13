import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosInstanceAuth from "../../InterceptorAuth";
import axiosInstance from "../../Interceptor";

interface EmergencyFormData {
  firstname: string;
  lastname: string;
  email: string;
  contactAddress: string;
  phoneNumber: string;
  student: any;
}

interface EmergencyFormState {
  loading: boolean;
  success: boolean;
  error: string | null;
  response: any | null;
}

const initialState: EmergencyFormState = {
  loading: false,
  success: false,
  error: null,
  response: null,
};

export const submitEmergencyForm = createAsyncThunk(
  "emergencyForm/submitEmergencyForm",
  async (formData: EmergencyFormData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(
        "/api/v1/admissions/emergency-contacts",
        formData
      );
      if (response.status >= 200 && response.status < 300) {
        toast.success(response?.data?.message || "Form submitted successfully");
        return response.data;
      }
    } catch (error: any) {
        console.log(error)
      if (error.response?.data) {
        const errorMessages = Object.values(error.response.data);
        errorMessages.forEach((errorMessage:any) => {
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

const emergencyFormSlice = createSlice({
  name: "emergencyForm",
  initialState,
  reducers: {
    resetEmergencyFormState: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitEmergencyForm.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(submitEmergencyForm.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.response = action.payload;
      })
      .addCase(submitEmergencyForm.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload as string;
      });
  },
});

export const { resetEmergencyFormState } = emergencyFormSlice.actions;
export default emergencyFormSlice.reducer;
