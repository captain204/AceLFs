import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosInstanceAdmin from "../../Interceptoradmin";

interface GetDegreeTypeApplicantsState {
  loading: boolean;
  success: boolean;
  error: string | null;
  applicants: any;
}

const initialState: GetDegreeTypeApplicantsState = {
  loading: false,
  success: false,
  error: null,
  applicants: null,
};

export const getDegreeTypeApplicants = createAsyncThunk(
  "applicants/getDegreeTypeApplicants",
  async (applicationType_slug: string) => {
    try {
      const response = await axiosInstanceAdmin.get(
        `/api/v1/admissions/program-type/${applicationType_slug}/`
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

const degreeTypeApplicantsSlice = createSlice({
  name: "degreeTypeApplicants",
  initialState,
  reducers: {
    clearDegreeTypeApplicantsState: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
      state.applicants = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDegreeTypeApplicants.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(getDegreeTypeApplicants.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.applicants = action.payload;
      })
      .addCase(getDegreeTypeApplicants.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearDegreeTypeApplicantsState } =
  degreeTypeApplicantsSlice.actions;
export default degreeTypeApplicantsSlice.reducer;
