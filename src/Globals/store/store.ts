import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import signupReducer from "../Slices/AuthSlice/SignupSlice";
import loginUserReducer from "../Slices/AuthSlice/LoginUserSlice";

import degreesReducer from "../Slices/Degree/DegreesSlice";
import currentUserReducer from "../Slices/AuthSlice/CurrentUserSlice";
import coursesReducer from "../Slices/Degree/CoursesSlice";
import emergencyFormReducer from "../Slices/ApplicationSlice/Emergency";
import submitRefereeFormReducer from "../Slices/ApplicationSlice/Referee";
import submitFirstFormReducer from "../Slices/ApplicationSlice/FirstFormSlice";
import newsFormReducer from "../Slices/ApplicationSlice/News";
import loginAdminReducer from "../Slices/AuthSlice/LoginAdminSlice";
import applicantsReducer from "../Slices/AdminSlices/ApplicantsSlice";
import ApproveadmissionReducer from "../Slices/AdminSlices/ApproveAdmission";
import degreeTypeApplicantsReducer from "../Slices/AdminSlices/DegreeTypeApplicants";
import emergencyContactReducer from "../Slices/ApplicantsSlices/ApplicantsMoreDetail/EmmergencySlice";
import refereeReducer from "../Slices/ApplicantsSlices/ApplicantsMoreDetail/Refeeree";
import applicantInformationReducer from "../Slices/ApplicantsSlices/ApplicantsMoreDetail/personal";
import studentUploadsReducer from "../Slices/ApplicantsSlices/ApplicantsMoreDetail/StudentUpload";
import applicantStatusReducer from "../Slices/ApplicantsSlices/ApplicantsMoreDetail/ApplicantStatus";
import loggedInUserReducer from "../Slices/ApplicantsSlices/AuthSlice/GetLoggedInApplicant";
import EachStudentReducer from "../Slices/ApplicantsSlices/AuthSlice/EachStudent";
import applicantPersonalInformatReducer from "../Slices/ApplicantsSlices/UpdateFiles/personal";
import ApplicantGetEmergencyContactReducer from "../Slices/ApplicantsSlices/UpdateFiles/EmmergencySlice";
import refereeApplicantReducer from "../Slices/ApplicantsSlices/UpdateFiles/Refeeree";
import studentUploadsApplicantReducer from "../Slices/ApplicantsSlices/UpdateFiles/StudentUpload";
import loggedInAdminReducer from "../Slices/AdminSlices/GetLoggedInAdmin"


const rootReducer = combineReducers({
  signup: signupReducer,
  loginUser: loginUserReducer,
  loginAdmin: loginAdminReducer,
  degrees: degreesReducer,
  courses: coursesReducer,
  currentUser: currentUserReducer,
  emergency: emergencyFormReducer,
  referee: submitRefereeFormReducer,
  personal: submitFirstFormReducer,
  newsForm: newsFormReducer,
  applicants: applicantsReducer,
  approve: ApproveadmissionReducer,
  degreetypeapplicants: degreeTypeApplicantsReducer,
  applicantEmmergency: emergencyContactReducer,
  applicantReferee: refereeReducer,
  applicantPersonal: applicantInformationReducer,
  applicantUploads: studentUploadsReducer,
  applicantStatus: applicantStatusReducer,
  loggedInUser: loggedInUserReducer,
  EachStudent: EachStudentReducer,
  getPersonalInfoForApplicant: applicantPersonalInformatReducer,
  getEmergencyContactForApplicant: ApplicantGetEmergencyContactReducer,
  refereeForApplicant: refereeApplicantReducer,
  studentUploadsApplicant: studentUploadsApplicantReducer,
  loggedInAdmin: loggedInAdminReducer
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
