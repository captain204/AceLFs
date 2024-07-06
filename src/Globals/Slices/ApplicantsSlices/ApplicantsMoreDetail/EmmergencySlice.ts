import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosInstanceAdmin from "../../../Interceptoradmin";

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

export const getEmergencyContact = createAsyncThunk(
  "contacts/getEmergencyContact",
  async (id: string) => {
    try {
      const response = await axiosInstanceAdmin.get(
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

const emergencyContactSlice = createSlice({
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
      .addCase(getEmergencyContact.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(getEmergencyContact.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.econtact = action.payload;
      })
      .addCase(getEmergencyContact.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearEmergencyContactState } = emergencyContactSlice.actions;
export default emergencyContactSlice.reducer;
