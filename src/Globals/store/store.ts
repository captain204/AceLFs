import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import signupReducer from "../Slices/AuthSlice/SignupSlice";
import loginUserReducer from "../Slices/AuthSlice/LoginUserSlice";

import degreesReducer from "../Slices/Degree/DegreesSlice";
import coursesReducer from "../Slices/Degree/CoursesSlice";
import  emergencyFormReducer from "../Slices/ApplicationSlice/Emergency"
import  submitRefereeFormReducer from "../Slices/ApplicationSlice/Referee"
import submitFirstFormReducer from "../Slices/ApplicationSlice/FirstFormSlice"
import newsFormReducer from "../Slices/ApplicationSlice/News"
import loginAdminReducer from '../Slices/AuthSlice/LoginAdminSlice'


const rootReducer = combineReducers({
  signup: signupReducer,
  loginUser: loginUserReducer,
  loginAdmin: loginAdminReducer,
  degrees: degreesReducer,
  courses: coursesReducer,
  emergency: emergencyFormReducer,
  referee: submitRefereeFormReducer,
  personal: submitFirstFormReducer,
  newsForm: newsFormReducer

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
