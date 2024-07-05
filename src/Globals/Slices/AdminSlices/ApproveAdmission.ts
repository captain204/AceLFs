import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosInstanceAdmin from "../../Interceptoradmin";

interface ApproveAdmissionState {
  loading: boolean;
  success: boolean;
  error: string | null;
  response: any | null;
}

const initialState: ApproveAdmissionState = {
  loading: false,
  success: false,
  error: null,
  response: null,
};

interface ApproveAdmissionParams {
  applicantId: string;
  is_admitted: boolean;
}

export const approveAdmission = createAsyncThunk(
    "admission/approveAdmission",
    async ({ applicantId, is_admitted }: ApproveAdmissionParams, { rejectWithValue }) => {
      try {
        const response = await axiosInstanceAdmin.patch(
          `/api/v1/admissions/applicants/${applicantId}/approve_admission/`,
          { is_admitted: !is_admitted } 
        );
        if (response.status >= 200 && response.status < 300) {
          toast.success(`Admission ${!is_admitted ? 'approved' : 'unapproved'} successfully`);
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
  

const ApproveadmissionSlice = createSlice({
  name: "admission",
  initialState,
  reducers: {
    resetAdmissionState: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(approveAdmission.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(approveAdmission.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.response = action.payload;
      })
      .addCase(approveAdmission.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload as string;
      });
  },
});

export const { resetAdmissionState } = ApproveadmissionSlice.actions;
export default ApproveadmissionSlice.reducer;
