import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosInstanceAdmin from "../../../Interceptoradmin";

interface GetRefereeState {
  loading: boolean;
  success: boolean;
  error: string | null;
  referee: any;
}

const initialState: GetRefereeState = {
  loading: false,
  success: false,
  error: null,
  referee: null,
};

export const getReferee = createAsyncThunk(
  "referee/getReferee",
  async (id: string) => {
    try {
      const response = await axiosInstanceAdmin.get(
        `/api/v1/admissions/referee/${id}`
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

const refereeSlice = createSlice({
  name: "referee",
  initialState,
  reducers: {
    clearRefereeState: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
      state.referee = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getReferee.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(getReferee.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.referee = action.payload;
      })
      .addCase(getReferee.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearRefereeState } = refereeSlice.actions;
export default refereeSlice.reducer;
