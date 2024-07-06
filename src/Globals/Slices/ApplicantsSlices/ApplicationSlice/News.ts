import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosInstance from "../../../Interceptor";
// import axiosInstanceAuth from "../../InterceptorAuth";
// import axiosInstance from "../../Interceptor";

interface FirstFormData {
  slug: string;
  title: string;
  content: string;
  image: string;
  detailsImage: string;
  category: string;
  commentsCount: any;
  publishedDate: any;
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

export const newsFormAction = createAsyncThunk(
  "firstForm/submitFirstForm",
  async (formData: FirstFormData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/api/v1/news", formData);
      if (response.status >= 200 && response.status < 300) {
        console.log(response);
        toast.success(response?.data?.message || "Form submitted successfully");
        return response.data;
      }
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

const newsFormSlice = createSlice({
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
      .addCase(newsFormAction.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(newsFormAction.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.response = action.payload;
      })
      .addCase(newsFormAction.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload as string;
      });
  },
});

export const { resetFirstFormState } = newsFormSlice.actions;
export default newsFormSlice.reducer;
