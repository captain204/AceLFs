// signupSlice.ts
import axiosInstanceAuth from "@/Globals/Interceptor";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface SignupData {
  username: string;
  email: any;
  password1: string;
  password2: string;
}

interface SignupState {
  loading: boolean;
  success: boolean;
  error: string | null;
  signupData: SignupData | null;
  response: any | null;
}

const initialState: SignupState = {
  loading: false,
  success: false,
  error: null,
  signupData: null,
  response: null,
};

export const signupUser = createAsyncThunk(
  "signup/signupUser",
  async (signupData: SignupData, { rejectWithValue }) => {
    try {
      const response = await axiosInstanceAuth.post(
        "/api/v1/dj-rest-auth/registration/",
        signupData
      );
      if (response.status >= 200 && response.status < 300) {
        toast.success("Signup successful! Welcome aboard!");
        console.log(response);

        const token = response.data.token;
        localStorage.setItem("token", token);
      }
      return response.data;
    } catch (error: any) {
      if (error.response) {
        // Server responded with an error
        const nonFieldErrors = error.response.data.non_field_errors;
        if (Array.isArray(nonFieldErrors)) {
          nonFieldErrors.forEach((errorMessage) => {
            toast.error(errorMessage); // Show each error message from the array
          });
        } else {
          toast.error("An unknown error occurred"); // Show a generic error message if non_field_errors is not an array
        }
        console.log(error.response);
      } else {
        // An error occurred before reaching the server
        toast.error("An error occurred"); // Show a generic error message
      }
      return rejectWithValue(
        error.response?.data?.error || "An error occurred"
      );
    }
  }
);

const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    resetSignupState: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.signupData = action.meta.arg;
        state.response = action.payload;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload as string;
      });
  },
});

export const { resetSignupState } = signupSlice.actions;
export default signupSlice.reducer;
