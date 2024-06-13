import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import axiosInstanceAuth from "../../InterceptorAuth";
import axiosInstance from "../../Interceptor";

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
        console.log(response)
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
