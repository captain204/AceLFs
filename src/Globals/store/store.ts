import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import signupReducer from "../Slices/AuthSlice/SignupSlice";
import loginUserReducer from "../Slices/AuthSlice/LoginUserSlice";

const rootReducer = combineReducers({
  signup: signupReducer,
  loginUser: loginUserReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
