import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosInstance from "../../Interceptor";
import axiosInstanceAuth from "../../InterceptorAuth";
// import axiosInstance from "../../Interceptors";

interface GetDegreesState {
  loading: boolean;
  success: boolean;
  error: string | null;
  degrees: any; // Replace `any` with appropriate type if known
}

const initialState: GetDegreesState = {
  loading: false,
  success: false,
  error: null,
  degrees: null,
};

export const getAllDegrees = createAsyncThunk(
  "degrees/getAllDegrees",
  async () => {
    try {
      const response = await axiosInstanceAuth.get("/api/v1/program/degrees"); 
      return response.data;
    } catch (error: any) {
      if (error.response) {
        toast.error(error?.response?.data?.message);
        console.log(error.response);
      } else {
        toast.error("An error occurred!!");
      }
      return error.response?.data?.error || "An error occurred";
    }
  }
);

const degreesSlice = createSlice({
  name: "degrees",
  initialState,
  reducers: {
    clearDegreesState: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
      state.degrees = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllDegrees.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(getAllDegrees.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.degrees = action.payload;
      })
      .addCase(getAllDegrees.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearDegreesState } = degreesSlice.actions;
export default degreesSlice.reducer;



















// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import axiosInstance from "../../Interceptor";


// interface Degree {
//   // Define the properties of a degree based on your API response
//   id: string;
//   name: string;
//   // Add other relevant properties
// }

// interface GetDegreesState {
//   loading: boolean;
//   success: boolean;
//   error: string | null;
//   degrees: Degree[] | null;
// }

// const initialState: GetDegreesState = {
//   loading: false,
//   success: false,
//   error: null,
//   degrees: null,
// };

// export const getAllDegrees = createAsyncThunk<Degree[], void, { rejectValue: string }>(
//   "degrees/getAllDegrees",
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await axiosInstance.get("/api/v1/program/degrees");
//       return response.data;
//     } catch (error: any) {
//       if (error.response) {
//         toast.error(error.response.data.message);
//         console.error(error.response);
//         return rejectWithValue(error.response.data.error || "An error occurred");
//       } else {
//         toast.error("An error occurred!!");
//         return rejectWithValue("An error occurred");
//       }
//     }
//   }
// );

// const degreesSlice = createSlice({
//   name: "degrees",
//   initialState,
//   reducers: {
//     clearDegreesState: (state) => {
//       state.loading = false;
//       state.success = false;
//       state.error = null;
//       state.degrees = null;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(getAllDegrees.pending, (state) => {
//         state.loading = true;
//         state.success = false;
//         state.error = null;
//       })
//       .addCase(getAllDegrees.fulfilled, (state, action) => {
//         state.loading = false;
//         state.success = true;
//         state.error = null;
//         state.degrees = action.payload;
//       })
//       .addCase(getAllDegrees.rejected, (state, action) => {
//         state.loading = false;
//         state.success = false;
//         state.error = action.payload as string;
//       });
//   },
// });

// export const { clearDegreesState } = degreesSlice.actions;
// export default degreesSlice.reducer;
