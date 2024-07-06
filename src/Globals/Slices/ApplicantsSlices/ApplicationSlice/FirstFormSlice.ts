import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosInstance from "../../../Interceptor";

interface FirstFormData {
  firstName: string;
  surName: string;
  otherNames: string;
  dateofBirth: string;
  gender: string;
  marital_status: string;
  religion: string;
  nationality: string;
  state: string;
  lga: string;
  contactAddress: string;
  phoneNumber: string;
  physicalChallenge: string;
  applicationType: any;
  choiceofCourse: any;
}

interface FirstFormState {
  loading: boolean;
  success: boolean;
  error: string | null;
  response: any | null;
}

const initialState: FirstFormState = {
  loading: false,
  success: false,
  error: null,
  response: null,
};

export const submitFirstForm = createAsyncThunk(
  "firstForm/submitFirstForm",
  async (formData: FirstFormData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(
        "/api/v1/admissions/students",
        formData
      );
      if (response.status >= 200 && response.status < 300) {
        console.log(response);
        toast.success(response?.data?.message || "Form submitted successfully");
        return response.data;
      }
    } catch (error: any) {
      console.log(error);
      if (error.response?.data) {
        const errorData = error.response.data;

        // Create an array to hold all error messages
        const errorMessages: string[] = [];

        // Check and push individual field errors to the array
        if (errorData.firstName) errorMessages.push(...errorData.firstName);
        if (errorData.surName) errorMessages.push(...errorData.surName);
        if (errorData.otherNames) errorMessages.push(...errorData.otherNames);
        if (errorData.dateofBirth) errorMessages.push(...errorData.dateofBirth);
        if (errorData.gender) errorMessages.push(...errorData.gender);
        if (errorData.marital_status)
          errorMessages.push(...errorData.marital_status);
        if (errorData.religion) errorMessages.push(...errorData.religion);
        if (errorData.nationality) errorMessages.push(...errorData.nationality);
        if (errorData.state) errorMessages.push(...errorData.state);
        if (errorData.lga) errorMessages.push(...errorData.lga);
        if (errorData.contactAddress)
          errorMessages.push(...errorData.contactAddress);
        if (errorData.phoneNumber) errorMessages.push(...errorData.phoneNumber);
        if (errorData.physicalChallenge)
          errorMessages.push(...errorData.physicalChallenge);
        if (errorData.applicationType)
          errorMessages.push(...errorData.applicationType);
        if (errorData.choiceofCourse)
          errorMessages.push(...errorData.choiceofCourse);

        // Show each error message using toast
        errorMessages.forEach((errorMessage: string) => {
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

const firstFormSlice = createSlice({
  name: "firstForm",
  initialState,
  reducers: {
    resetFirstFormState: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitFirstForm.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(submitFirstForm.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.response = action.payload;
      })
      .addCase(submitFirstForm.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload as string;
      });
  },
});

export const { resetFirstFormState } = firstFormSlice.actions;
export default firstFormSlice.reducer;
