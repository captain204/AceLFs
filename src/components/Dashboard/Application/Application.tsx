import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import {
  Box,
  TextField,
  Card,
  CardContent,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Button,
  Stepper,
  Step,
  StepLabel,
  Typography,
} from "@mui/material";
import Modal from "@mui/material/Modal";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../Globals/store/store";
import { ThunkDispatch, UnknownAction } from "@reduxjs/toolkit";
import { getAllCourses } from "../../../Globals/Slices/ApplicantsSlices/Degree/CoursesSlice";
import { getAllDegrees } from "../../../Globals/Slices/ApplicantsSlices/Degree/DegreesSlice";
import { submitEmergencyForm } from "../../../Globals/Slices/ApplicantsSlices/ApplicationSlice/Emergency";
import { submitRefereeForm } from "../../../Globals/Slices/ApplicantsSlices/ApplicationSlice/Referee";
import FileUpload from "./FileUpload";
import axiosInstance from "../../../Globals/Interceptor";
import axiosInstanceUpload from "../../../Globals/InterceptorUpload";
import axios from "axios";
import { useRouter } from "next/navigation";
import animationData from "../../../../public/img/success.json";
import Lottie from "react-lottie";

type AppDispatch = ThunkDispatch<RootState, unknown, UnknownAction>;

interface PersonalInfoFormProps {
  formik: any; // Adjust the type if needed
  selectedDegree: any;
  setSelectedDegree: React.Dispatch<React.SetStateAction<any>>;
  selectedCourse: any;
  setSelectedCourse: React.Dispatch<React.SetStateAction<any>>;
}

interface RefereeFormProps {
  formik: any;
}

interface EmergencyFormProps {
  formik: any;
}

const PersonalInfoForm: React.FC<PersonalInfoFormProps> = ({
  formik,
  selectedDegree,
  setSelectedDegree,
  selectedCourse,
  setSelectedCourse,
}) => {
  const dispatch: AppDispatch = useDispatch();
  const degrees = useSelector((state: RootState) => state?.degrees?.degrees);
  const courses = useSelector((state: RootState) => state?.courses?.courses);
  const [states, setStates] = useState([]);
  const [lgas, setLgas] = useState([]);

  useEffect(() => {
    dispatch(getAllCourses());
    dispatch(getAllDegrees());

    const fetchStates = async () => {
      try {
        const response = await axios.get(
          "https://nga-states-lga.onrender.com/fetch"
        );
        console.log(response);
        setStates(response.data);
      } catch (error) {
        console.error("Error fetching states:", error);
      }
    };

    fetchStates();
  }, [dispatch]);

  const handleStateChange = async (event: any) => {
    const selectedState = event.target.value;
    formik.setFieldValue("state", selectedState);

    try {
      const response = await axios.get(
        `https://nga-states-lga.onrender.com/?state=${selectedState}`
      );
      setLgas(response.data);
    } catch (error) {
      console.error("Error fetching LGAs:", error);
    }
  };

  return (
    <Box sx={{ "& > :not(style)": { m: 1, width: "25ch" }, marginTop: "2em" }}>
      <TextField
        id="firstName"
        name="firstName"
        label="First Name"
        color="success"
        value={formik.values.firstName}
        onChange={formik.handleChange}
        error={formik.touched.firstName && Boolean(formik.errors.firstName)}
        helperText={formik.touched.firstName && formik.errors.firstName}
      />

      <TextField
        id="surname"
        name="surname"
        label="Surname"
        color="success"
        value={formik.values.surname}
        onChange={formik.handleChange}
        error={formik.touched.surname && Boolean(formik.errors.surname)}
        helperText={formik.touched.surname && formik.errors.surname}
      />
      <TextField
        id="otherName"
        name="otherName"
        label="Other Name"
        color="success"
        value={formik.values.otherName}
        onChange={formik.handleChange}
        error={formik.touched.otherName && Boolean(formik.errors.otherName)}
        helperText={formik.touched.otherName && formik.errors.otherName}
      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          value={formik.values.dateOfBirth}
          onChange={(value) => formik.setFieldValue("dateOfBirth", value)}
          slotProps={{
            textField: {
              id: "dateOfBirth",
              name: "dateOfBirth",
              label: "Date of Birth",
              color: "success",
              error:
                formik.touched.dateOfBirth &&
                Boolean(formik.errors.dateOfBirth),
              helperText:
                formik.touched.dateOfBirth && formik.errors.dateOfBirth,
            },
          }}
        />
      </LocalizationProvider>

      <FormControl sx={{ m: 1, width: "25ch" }}>
        <InputLabel id="gender-label" color="success">
          Gender
        </InputLabel>
        <Select
          color="success"
          labelId="gender-label"
          id="gender"
          name="gender"
          value={formik.values.gender}
          onChange={formik.handleChange}
          label="Gender"
          error={formik.touched.gender && Boolean(formik.errors.gender)}
        >
          <MenuItem value="M">Male</MenuItem>
          <MenuItem value="F">Female</MenuItem>
        </Select>
        {formik.touched.gender && formik.errors.gender && (
          <p
            style={{
              color: "#d32f2f",
              fontSize: "0.75rem",
              margin: "3px 0 0 14px",
            }}
          >
            {formik.errors.gender}
          </p>
        )}
      </FormControl>
      <FormControl sx={{ m: 1, width: "25ch" }}>
        <InputLabel id="marital-status-label" color="success">
          Marital Status
        </InputLabel>
        <Select
          color="success"
          labelId="marital-status-label"
          id="maritalStatus"
          name="maritalStatus"
          value={formik.values.maritalStatus}
          onChange={formik.handleChange}
          label="Marital Status"
          error={
            formik.touched.maritalStatus && Boolean(formik.errors.maritalStatus)
          }
        >
          <MenuItem value="S">Single</MenuItem>
          <MenuItem value="M">Married</MenuItem>
          <MenuItem value="D">Divorced</MenuItem>
          <MenuItem value="W">Widowed</MenuItem>
          <MenuItem value="P">Prefer Not to Say</MenuItem>
        </Select>
        {formik.touched.maritalStatus && formik.errors.maritalStatus && (
          <p
            style={{
              color: "#d32f2f",
              fontSize: "0.75rem",
              margin: "3px 0 0 14px",
            }}
          >
            {formik.errors.maritalStatus}
          </p>
        )}
      </FormControl>
      <FormControl sx={{ m: 1, width: "25ch" }}>
        <InputLabel id="religion-label" color="success">
          Religion
        </InputLabel>
        <Select
          color="success"
          labelId="religion-label"
          id="religion"
          name="religion"
          value={formik.values.religion}
          onChange={formik.handleChange}
          label="Religion"
          error={formik.touched.religion && Boolean(formik.errors.religion)}
        >
          <MenuItem value="C">Christianity</MenuItem>
          <MenuItem value="I">Islam</MenuItem>
          <MenuItem value="O">Other</MenuItem>
          <MenuItem value="N">No Religion</MenuItem>
          <MenuItem value="P">Prefer Not to Say</MenuItem>
        </Select>
        {formik.touched.religion && formik.errors.religion && (
          <p
            style={{
              color: "#d32f2f",
              fontSize: "0.75rem",
              margin: "3px 0 0 14px",
            }}
          >
            {formik.errors.religion}
          </p>
        )}
      </FormControl>
      <TextField
        id="nationality"
        name="nationality"
        label="Nationality"
        color="success"
        value={formik.values.nationality}
        onChange={formik.handleChange}
        error={formik.touched.nationality && Boolean(formik.errors.nationality)}
        helperText={formik.touched.nationality && formik.errors.nationality}
      />
      {/* <TextField
        id="state"
        name="state"
        label="State"
        color="success"
        value={formik.values.state}
        onChange={formik.handleChange}
        error={formik.touched.state && Boolean(formik.errors.state)}
        helperText={formik.touched.state && formik.errors.state}
      /> */}

      <FormControl sx={{ m: 1, width: "25ch" }}>
        <InputLabel id="state-label" color="success">
          State
        </InputLabel>
        <Select
          color="success"
          labelId="state-label"
          id="state"
          name="state"
          value={formik.values.state}
          onChange={handleStateChange}
          label="State"
          error={formik.touched.state && Boolean(formik.errors.state)}
        >
          {states &&
            states.map((state) => (
              <MenuItem key={state} value={state}>
                {state}
              </MenuItem>
            ))}
        </Select>
        {formik.touched.state && formik.errors.state && (
          <p
            style={{
              color: "#d32f2f",
              fontSize: "0.75rem",
              margin: "3px 0 0 14px",
            }}
          >
            {formik.errors.state}
          </p>
        )}
      </FormControl>

      {/* 
      <TextField
        id="lga"
        name="lga"
        label="LGA"
        color="success"
        value={formik.values.lga}
        onChange={formik.handleChange}
        error={formik.touched.lga && Boolean(formik.errors.lga)}
        helperText={formik.touched.lga && formik.errors.lga}
      /> */}

      <FormControl sx={{ m: 1, width: "25ch" }}>
        <InputLabel id="lga-label" color="success">
          LGA
        </InputLabel>
        <Select
          color="success"
          labelId="lga-label"
          id="lga"
          name="lga"
          value={formik.values.lga}
          onChange={formik.handleChange}
          label="LGA"
          error={formik.touched.lga && Boolean(formik.errors.lga)}
        >
          {lgas &&
            lgas.map((lga) => (
              <MenuItem key={lga} value={lga}>
                {lga}
              </MenuItem>
            ))}
        </Select>
        {formik.touched.lga && formik.errors.lga && (
          <p
            style={{
              color: "#d32f2f",
              fontSize: "0.75rem",
              margin: "3px 0 0 14px",
            }}
          >
            {formik.errors.lga}
          </p>
        )}
      </FormControl>

      <TextField
        id="contactAddress"
        name="contactAddress"
        label="Contact Address"
        color="success"
        value={formik.values.contactAddress}
        onChange={formik.handleChange}
        error={
          formik.touched.contactAddress && Boolean(formik.errors.contactAddress)
        }
        helperText={
          formik.touched.contactAddress && formik.errors.contactAddress
        }
      />
      <TextField
        type="number"
        id="phoneNumber"
        name="phoneNumber"
        label="Phone Number"
        color="success"
        value={formik.values.phoneNumber}
        onChange={formik.handleChange}
        error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
        helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
      />
      <FormControl sx={{ m: 1, width: "25ch" }}>
        <InputLabel id="physicalChallenge-label" color="success">
          Physical Challenge
        </InputLabel>
        <Select
          color="success"
          labelId="physicalChallenge-label"
          id="physicalChallenge"
          name="physicalChallenge"
          value={formik.values.physicalChallenge}
          onChange={formik.handleChange}
          label="Physical Challenge"
          error={
            formik.touched.physicalChallenge &&
            Boolean(formik.errors.physicalChallenge)
          }
        >
          <MenuItem value="VI">Visually Impaired</MenuItem>
          <MenuItem value="HI">Hearing Impaired</MenuItem>
          <MenuItem value="MI">Mobility Impaired</MenuItem>
          <MenuItem value="OI">Other</MenuItem>
          <MenuItem value="NA">None</MenuItem>
        </Select>
        {formik.touched.physicalChallenge &&
          formik.errors.physicalChallenge && (
            <p
              style={{
                color: "#d32f2f",
                fontSize: "0.75rem",
                margin: "3px 0 0 14px",
              }}
            >
              {formik.errors.physicalChallenge}
            </p>
          )}
      </FormControl>

      <FormControl sx={{ m: 1, width: "25ch" }}>
        <InputLabel id="degreeType-label" color="success">
          Degree Type
        </InputLabel>
        <Select
          labelId="degreeType-label"
          id="degreeType"
          name="degreeType"
          value={formik.values.degreeType}
          onChange={(event) => {
            const selectedId = event.target.value;
            formik.handleChange(event);
            const degree = degrees.find((d: any) => d.id === selectedId);
            if (degree) {
              setSelectedDegree({
                name: degree.name,
                slug: degree.slug,
                category: degree.category,
                description: degree.description,
                coursesCount: degree.coursesCount,
                duration: degree.duration,
                id: degree.id,
              });
            }
          }}
          label="Degree Type"
          error={formik.touched.degreeType && Boolean(formik.errors.degreeType)}
          color="success"
        >
          {degrees &&
            degrees.map((degree: any) => (
              <MenuItem key={degree.id} value={degree.id}>
                {degree.name}
              </MenuItem>
            ))}
        </Select>
        {formik.touched.degreeType && formik.errors.degreeType && (
          <p
            style={{
              color: "#d32f2f",
              fontSize: "0.75rem",
              margin: "3px 0 0 14px",
            }}
          >
            {formik.errors.degreeType}
          </p>
        )}
      </FormControl>

      <FormControl sx={{ m: 1, width: "25ch" }}>
        <InputLabel id="courses-label" color="success">
          Courses
        </InputLabel>
        <Select
          labelId="courses-label"
          id="courses"
          name="courses"
          value={formik.values.courses}
          onChange={(event) => {
            const selectedId = event.target.value;
            formik.handleChange(event);
            const course = courses.find((c: any) => c.id === selectedId);
            if (course) {
              setSelectedCourse({
                CourseName: course.CourseName,
                description: course.description,
                id: course.id,
              });
            }
          }}
          label="Courses"
          error={formik.touched.courses && Boolean(formik.errors.courses)}
          color="success"
        >
          {courses &&
            courses.map((course) => (
              <MenuItem key={course.id} value={course.id}>
                {course.CourseName}
              </MenuItem>
            ))}
        </Select>
        {formik.touched.courses && formik.errors.courses && (
          <p
            style={{
              color: "#d32f2f",
              fontSize: "0.75rem",
              margin: "3px 0 0 14px",
            }}
          >
            {formik.errors.courses}
          </p>
        )}
      </FormControl>
    </Box>
  );
};

const RefereeForm: React.FC<RefereeFormProps> = ({ formik }) => (
  <Box sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}>
    <TextField
      id="refereeFirstName"
      name="refereeFirstName"
      label="Referee First Name"
      color="success"
      value={formik.values.refereeFirstName}
      onChange={formik.handleChange}
      error={
        formik.touched.refereeFirstName &&
        Boolean(formik.errors.refereeFirstName)
      }
      helperText={
        formik.touched.refereeFirstName && formik.errors.refereeFirstName
      }
    />
    <TextField
      id="refereeLastName"
      name="refereeLastName"
      label="Referee Last Name"
      color="success"
      value={formik.values.refereeLastName}
      onChange={formik.handleChange}
      error={
        formik.touched.refereeLastName && Boolean(formik.errors.refereeLastName)
      }
      helperText={
        formik.touched.refereeLastName && formik.errors.refereeLastName
      }
    />
    <TextField
      type="email"
      id="refereeEmail"
      name="refereeEmail"
      label="Referee Email"
      color="success"
      value={formik.values.refereeEmail}
      onChange={formik.handleChange}
      error={formik.touched.refereeEmail && Boolean(formik.errors.refereeEmail)}
      helperText={formik.touched.refereeEmail && formik.errors.refereeEmail}
    />
    <TextField
      id="refereeContactAddress"
      name="refereeContactAddress"
      label="Referee Contact Address"
      color="success"
      value={formik.values.refereeContactAddress}
      onChange={formik.handleChange}
      error={
        formik.touched.refereeContactAddress &&
        Boolean(formik.errors.refereeContactAddress)
      }
      helperText={
        formik.touched.refereeContactAddress &&
        formik.errors.refereeContactAddress
      }
    />
    <TextField
      type="number"
      id="refereePhoneNumber"
      name="refereePhoneNumber"
      label="Referee Phone Number"
      color="success"
      value={formik.values.refereePhoneNumber}
      onChange={formik.handleChange}
      error={
        formik.touched.refereePhoneNumber &&
        Boolean(formik.errors.refereePhoneNumber)
      }
      helperText={
        formik.touched.refereePhoneNumber && formik.errors.refereePhoneNumber
      }
    />
  </Box>
);

const EmergencyContactForm: React.FC<EmergencyFormProps> = ({ formik }) => (
  <Box sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}>
    <TextField
      id="emergencyFirstName"
      name="emergencyFirstName"
      label="First Name"
      color="success"
      value={formik.values.emergencyFirstName}
      onChange={formik.handleChange}
      error={
        formik.touched.emergencyFirstName &&
        Boolean(formik.errors.emergencyFirstName)
      }
      helperText={
        formik.touched.emergencyFirstName && formik.errors.emergencyFirstName
      }
    />
    <TextField
      id="emergencyLastName"
      name="emergencyLastName"
      label="Last Name"
      color="success"
      value={formik.values.emergencyLastName}
      onChange={formik.handleChange}
      error={
        formik.touched.emergencyLastName &&
        Boolean(formik.errors.emergencyLastName)
      }
      helperText={
        formik.touched.emergencyLastName && formik.errors.emergencyLastName
      }
    />
    <TextField
      type="email"
      id="emergencyEmail"
      name="emergencyEmail"
      label="Email"
      color="success"
      value={formik.values.emergencyEmail}
      onChange={formik.handleChange}
      error={
        formik.touched.emergencyEmail && Boolean(formik.errors.emergencyEmail)
      }
      helperText={formik.touched.emergencyEmail && formik.errors.emergencyEmail}
    />
    <TextField
      id="emergencyContactAddress"
      name="emergencyContactAddress"
      label="Contact Address"
      color="success"
      value={formik.values.emergencyContactAddress}
      onChange={formik.handleChange}
      error={
        formik.touched.emergencyContactAddress &&
        Boolean(formik.errors.emergencyContactAddress)
      }
      helperText={
        formik.touched.emergencyContactAddress &&
        formik.errors.emergencyContactAddress
      }
    />
    <TextField
      type="number"
      id="emergencyPhoneNumber"
      name="emergencyPhoneNumber"
      label="Phone Number"
      color="success"
      value={formik.values.emergencyPhoneNumber}
      onChange={formik.handleChange}
      error={
        formik.touched.emergencyPhoneNumber &&
        Boolean(formik.errors.emergencyPhoneNumber)
      }
      helperText={
        formik.touched.emergencyPhoneNumber &&
        formik.errors.emergencyPhoneNumber
      }
    />
  </Box>
);

const StepForm = () => {
  const [personalResponseError, setPersonalResponseError] = useState<
    string | null
  >(null);
  const [fileUploadError, setFileUploadError] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const steps = [
    "Personal Information",
    "Referee Information",
    "Emergency Contact",
    "Files Uploads",
  ];
  const [activeStep, setActiveStep] = React.useState(0);
  const dispatch: AppDispatch = useDispatch();

  const [selectedDegree, setSelectedDegree] = useState({
    name: "",
    slug: "",
    category: "",
    description: "",
    coursesCount: 0,
    duration: "",
    id: "",
  });

  const [selectedCourse, setSelectedCourse] = useState({
    CourseName: "",
    description: "",
    id: "",
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      surname: "",
      otherName: "",
      dateOfBirth: null,
      gender: "",
      maritalStatus: "",
      religion: "",
      nationality: "",
      state: "",
      lga: "",
      contactAddress: "",
      phoneNumber: "",
      physicalChallenge: "",
      degreeType: "",
      courses: "",
      refereeFirstName: "",
      refereeLastName: "",
      refereeEmail: "",
      refereeContactAddress: "",
      refereePhoneNumber: "",
      emergencyFirstName: "",
      emergencyLastName: "",
      emergencyEmail: "",
      emergencyContactAddress: "",
      emergencyPhoneNumber: "",
      student: "",
      birthCertificate: null,
      firstDegree: null,
      mastersDegree: null,
      studentImage: null,
      IdentityImage: null,
      // birthCertificate: pdf,
      // firstDegree: pdf,
      // mastersDegree: pdf,
      studentNysc: null,
      otherCertificate: null,
      phdProposal: null,
      postGraduateDiploma: null,
      resume: null,
      transcript: null,
      nceCertificate: null,
    },

    validate: (values) => {
      const errors: any = {};

      // Validate fields specific to the current step
      switch (activeStep) {
        case 0:
          // Step 1: Personal Information
          if (!values.firstName) {
            errors.firstName = "Required";
          }
          if (!values.surname) {
            errors.surname = "Required";
          }
          if (!values.otherName) {
            errors.otherName = "Required";
          }
          if (!values.dateOfBirth) {
            errors.dateOfBirth = "Required";
          }
          if (!values.gender) {
            errors.gender = "Required";
          }
          if (!values.maritalStatus) {
            errors.maritalStatus = "Required";
          }
          if (!values.religion) {
            errors.religion = "Required";
          }
          if (!values.nationality) {
            errors.nationality = "Required";
          }
          if (!values.state) {
            errors.state = "Required";
          }
          if (!values.lga) {
            errors.lga = "Required";
          }
          if (!values.contactAddress) {
            errors.contactAddress = "Required";
          }
          if (!values.phoneNumber) {
            errors.phoneNumber = "Required";
          }
          if (!values.physicalChallenge) {
            errors.physicalChallenge = "Required";
          }
          break;
        case 1:
          // Step 2: Referee Information
          if (!values.refereeFirstName) {
            errors.refereeFirstName = "Required";
          }
          if (!values.refereeLastName) {
            errors.refereeLastName = "Required";
          }
          if (!values.refereeEmail) {
            errors.refereeEmail = "Required";
          }
          if (!values.refereeContactAddress) {
            errors.refereeContactAddress = "Required";
          }
          if (!values.refereePhoneNumber) {
            errors.refereePhoneNumber = "Required";
          }
          break;
        case 2:
          // Step 3: Emergency Contact Information
          if (!values.emergencyFirstName) {
            errors.emergencyFirstName = "Required";
          }
          if (!values.emergencyLastName) {
            errors.emergencyLastName = "Required";
          }
          if (!values.emergencyEmail) {
            errors.emergencyEmail = "Required";
          }
          if (!values.emergencyContactAddress) {
            errors.emergencyContactAddress = "Required";
          }
          if (!values.emergencyPhoneNumber) {
            errors.emergencyPhoneNumber = "Required";
          }
          break;

        default:
          break;
      }

      return errors;
    },

    onSubmit: async (values) => {
      console.log(values);
    },
  });

  const handleNext = () => {
    // Trigger validation for the current step
    formik.validateForm().then((errors) => {
      // If there are no errors, move to the next step
      if (Object.keys(errors).length === 0) {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      } else {
        // Set all fields as touched to display validation messages
        Object.keys(formik.values).forEach((field) => {
          formik.setFieldTouched(field, true);
        });
      }
    });
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const isLastStep = () => {
    return activeStep === steps.length - 1;
  };





  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    
    const requiredFiles = ["IdentityImage", "transcript", "studentImage"];

    // Check if any required file field is null or undefined
    const missingFiles = requiredFiles.filter((file) => !formik.values[file]);

    if (activeStep === 3 && missingFiles.length > 0) {
      alert("Please upload all required files.");
      setLoading(false);
      return;
    }

    if (isLastStep()) {
      try {
        // Submit the first form data
        const personalResponse = await axiosInstance.post(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/admissions/students`,
          {
            firstName: formik.values.firstName,
            surName: formik.values.surname,
            otherNames: formik.values.otherName,
            dateofBirth: formik.values.dateOfBirth.toISOString().split("T")[0],
            gender: formik.values.gender,
            marital_status: formik.values.maritalStatus,
            religion: formik.values.religion,
            nationality: formik.values.nationality,
            state: formik.values.state,
            lga: formik.values.lga,
            contactAddress: formik.values.contactAddress,
            phoneNumber: formik.values.phoneNumber,
            physicalChallenge: formik.values.physicalChallenge,
            applicationType: +selectedDegree.id,
            choiceofCourse: +selectedCourse.id,
          }
        );

        const personalId = personalResponse.data.id;
        console.log(personalId);

        try {
          // Submit the referee form
          await dispatch(
            submitRefereeForm({
              firstname: formik.values.refereeFirstName,
              lastname: formik.values.refereeLastName,
              email: formik.values.refereeEmail,
              contactAddress: formik.values.refereeContactAddress,
              phoneNumber: formik.values.refereePhoneNumber,
            })
          );
        } catch (refereeError) {
          console.error("Error submitting referee form:", refereeError);
          alert("Failed to submit referee form. Please try again.");
          return;
        }

        try {
          // Submit the emergency form
          await dispatch(
            submitEmergencyForm({
              firstname: formik.values.emergencyFirstName,
              lastname: formik.values.emergencyLastName,
              email: formik.values.emergencyEmail,
              contactAddress: formik.values.emergencyContactAddress,
              phoneNumber: formik.values.emergencyPhoneNumber,
              student: personalId,
            })
          );
        } catch (emergencyError) {
          console.error("Error submitting emergency form:", emergencyError);
          return;
        }

        const formData = new FormData();
        formData.append("student", personalId);
        // Append required files
        requiredFiles.forEach((fileKey) => {
          formData.append(fileKey, formik.values[fileKey]);
        });
        // Append optional files
        const optionalFiles = [
          "birthCertificate",
          "firstDegree",
          "mastersDegree",
          "studentNysc",
          "otherCertificate",
          "phdProposal",
          "postGraduateDiploma",
          "resume",
          "nceCertificate",
        ];
        optionalFiles.forEach((fileKey) => {
          if (formik.values[fileKey]) {
            formData.append(fileKey, formik.values[fileKey]);
          }
        });

        try {
          // Upload files
          const response = await axiosInstanceUpload.post(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/admissions/student-uploads`,
            formData
          );

          if (
            response.status === 201 ||
            (response.status >= 200 && response.status <= 204)
          ) {
            setModalOpen(true); // Open modal for success message
            setTimeout(() => {
              setModalOpen(false); // Close modal after 3 seconds
              setTimeout(() => {
                window.location.href = "/applicant/dashboard"; // Redirect to /dashboard after 5 seconds
              }, 1000);
            }, 3000);
          }

          if (response.status == 200) {
            setModalOpen(true);
          }
        } catch (fileUploadError) {
          console.error("Error uploading files:", fileUploadError);
          setFileUploadError("Failed to upload files. Please try again.");
        }
      } catch (personalError) {
        console.error("Error submitting personal information:", personalError);
        setPersonalResponseError(
          "Failed to submit personal information. Please try again."
        );
      }
    } else {
      // Move to the next step if it's not the last step
      handleNext();
    }
    setLoading(false);
  };












  // const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   setLoading(true);
  //   // console.log(formik.values);

  //   const requiredFiles = [
  //     "birthCertificate",
  //     "firstDegree",
  //     "mastersDegree",
  //     "studentImage",
  //     "IdentityImage",
  //     "studentNysc",
  //     "otherCertificate",
  //     "phdProposal",
  //     "postGraduateDiploma",
  //     "resume",
  //     "transcript",
  //     "nceCertificate",
  //   ];

    
  //   const missingFiles = requiredFiles.filter((file) => !formik.values[file]);

  //   if (activeStep === 3 && missingFiles.length > 0) {
  //     alert("Please upload all required files.");
  //     setLoading(false);
  //     return;
  //   }

  //   if (isLastStep()) {
  //     try {
  //       // Submit the first form data
  //       const personalResponse = await axiosInstance.post(
  //         `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/admissions/students`,
  //         {
  //           firstName: formik.values.firstName,
  //           surName: formik.values.surname,
  //           otherNames: formik.values.otherName,
  //           dateofBirth: formik.values.dateOfBirth.toISOString().split("T")[0],
  //           gender: formik.values.gender,
  //           marital_status: formik.values.maritalStatus,
  //           religion: formik.values.religion,
  //           nationality: formik.values.nationality,
  //           state: formik.values.state,
  //           lga: formik.values.lga,
  //           contactAddress: formik.values.contactAddress,
  //           phoneNumber: formik.values.phoneNumber,
  //           physicalChallenge: formik.values.physicalChallenge,
  //           applicationType: +selectedDegree.id,
  //           choiceofCourse: +selectedCourse.id,
  //         }
  //       );

  //       const personalId = personalResponse.data.id;
  //       console.log(personalId);

  //       try {
  //         // Submit the referee form
  //         await dispatch(
  //           submitRefereeForm({
  //             firstname: formik.values.refereeFirstName,
  //             lastname: formik.values.refereeLastName,
  //             email: formik.values.refereeEmail,
  //             contactAddress: formik.values.refereeContactAddress,
  //             phoneNumber: formik.values.refereePhoneNumber,
  //           })
  //         );
  //       } catch (refereeError) {
  //         console.error("Error submitting referee form:", refereeError);
  //         alert("Failed to submit referee form. Please try again.");
  //         return;
  //       }

  //       try {
  //         // Submit the emergency form
  //         await dispatch(
  //           submitEmergencyForm({
  //             firstname: formik.values.emergencyFirstName,
  //             lastname: formik.values.emergencyLastName,
  //             email: formik.values.emergencyEmail,
  //             contactAddress: formik.values.emergencyContactAddress,
  //             phoneNumber: formik.values.emergencyPhoneNumber,
  //             student: personalId,
  //           })
  //         );
  //       } catch (emergencyError) {
  //         console.error("Error submitting emergency form:", emergencyError);
  //         // alert("Failed to submit emergency form. Please try again.");
  //         return;
  //       }

  //       const formData = new FormData();
  //       formData.append("student", personalId);
  //       requiredFiles.forEach((fileKey) => {
  //         formData.append(fileKey, formik.values[fileKey]);
  //       });

  //       try {
  //         // Upload files
  //         const response = await axiosInstanceUpload.post(
  //           `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/admissions/student-uploads`,
  //           formData
  //         );

  //         if (
  //           response.status === 201 ||
  //           (response.status >= 200 && response.status <= 204)
  //         ) {
  //           setModalOpen(true); // Open modal for success message
  //           setTimeout(() => {
  //             setModalOpen(false); // Close modal after 3 seconds
  //             setTimeout(() => {
  //               window.location.href = "/applicant/dashboard"; // Redirect to /dashboard after 5 seconds
  //             }, 1000);
  //           }, 3000);
  //         }

  //         if (response.status == 200) {
  //           setModalOpen(true);
  //         }

  //         // alert("Form submitted successfully!");
  //       } catch (fileUploadError) {
  //         console.error("Error uploading files:", fileUploadError);
  //         // alert("Failed to upload files. Please try again.");
  //         setFileUploadError("Failed to upload files. Please try again.");
  //       }
  //     } catch (personalError) {
  //       console.error("Error submitting personal information:", personalError);
  //       // alert("Failed to submit personal information. Please try again.");
  //       setPersonalResponseError(
  //         "Failed to submit personal information. Please try again."
  //       );
  //     }
  //   } else {
  //     // Move to the next step if it's not the last step

  //     handleNext();
  //   }
  //   setLoading(false);
  // };

  const handleCloseModal = () => {
    setModalOpen(false);
    window.location.href = "/applicant/dashboard";
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Card raised={true}>
      <CardContent>
        <Typography variant="h5" gutterBottom sx={{ color: "#0AB99D" }}>
          Student Application Form
        </Typography>
        <Stepper
          activeStep={activeStep}
          alternativeLabel
          sx={{
            "& .MuiStepConnector-line": {
              borderTopWidth: "2px",
            },
            "& .MuiStepLabel-root .Mui-completed": {
              color: "#0AB99D",
            },
            "& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel":
              {
                color: "#0AB99D",
              },
            "& .MuiStepLabel-root .Mui-active": {
              color: "#0AB99D",
            },
            "& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel": {
              color: "#0AB99D",
            },
            "& .MuiStepLabel-root .Mui-active .MuiStepIcon-text": {
              fill: "white",
            },
          }}
        >
          {steps.map((label) => (
            <Step
              key={label}
              sx={{
                ".MuiMobileStepper-dot": { backgroundColor: "red" },
                ".MuiMobileStepper-dotActive": { backgroundColor: "#666666" },
              }}
            >
              <StepLabel sx={{ bcolor: "red" }}>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <form onSubmit={handleSubmit}>
          {activeStep === 0 && (
            <div style={{ marginTop: "20px" }}>
              <PersonalInfoForm
                formik={formik}
                selectedDegree={selectedDegree}
                setSelectedDegree={setSelectedDegree}
                selectedCourse={selectedCourse}
                setSelectedCourse={setSelectedCourse}
              />
            </div>
          )}
          {activeStep === 1 && (
            <div style={{ marginTop: "20px" }}>
              <RefereeForm formik={formik} />
            </div>
          )}
          {activeStep === 2 && (
            <div style={{ marginTop: "20px" }}>
              <EmergencyContactForm formik={formik} />
            </div>
          )}
          {activeStep === 3 && (
            <div style={{ marginTop: "20px" }}>
              <FileUpload
                fieldName="studentImage"
                accept=".jpg, .jpeg, .png"
                formik={formik}
                required
              />
              <FileUpload
                fieldName="birthCertificate"
                accept=".pdf"
                formik={formik}
              />
              <FileUpload
                fieldName="firstDegree"
                accept=".pdf"
                formik={formik}
              />
              <FileUpload
                fieldName="mastersDegree"
                accept=".pdf"
                formik={formik}
              />

              <FileUpload
                fieldName="IdentityImage"
                accept=".pdf"
                formik={formik}
                required
              />
              <FileUpload
                fieldName="studentNysc"
                accept=".pdf"
                formik={formik}
              />
              <FileUpload
                fieldName="otherCertificate"
                accept=".pdf"
                formik={formik}
              />
              <FileUpload
                fieldName="phdProposal"
                accept=".pdf"
                formik={formik}
              />
              <FileUpload
                fieldName="postGraduateDiploma"
                accept=".pdf"
                formik={formik}
              />
              <FileUpload fieldName="resume" accept=".pdf" formik={formik} />
              <FileUpload
                fieldName="transcript"
                accept=".pdf"
                formik={formik}
                required
              />
              <FileUpload
                fieldName="nceCertificate"
                accept=".pdf"
                formik={formik}
              />
            </div>
          )}

          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ color: "#0AB99D" }}
            >
              Back
            </Button>
            {/* <Button
              type="submit"
              variant="contained"
              sx={{
                bgcolor: "#0AB99D",
                "&:hover": {
                  bgcolor: "#0AB99D",
                },
              }}
            >
              {activeStep === steps.length - 1 ? "Submit" : "Next"}
            </Button> */}

            <Button
              type="submit"
              variant="contained"
              sx={{
                bgcolor: "#0AB99D",
                "&:hover": {
                  bgcolor: "#0AB99D",
                },
              }}
              disabled={loading}
            >
              {loading
                ? "Loading..."
                : activeStep === steps.length - 1
                  ? "Submit"
                  : "Next"}
            </Button>
          </Box>
        </form>
      </CardContent>

      <Modal open={modalOpen} onClose={handleCloseModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            textAlign: "center",
          }}
        >
          <Lottie options={defaultOptions} height={200} width={200} />
          <Typography variant="h6" gutterBottom>
            Form submitted successfully!
          </Typography>

          <Button
            onClick={handleCloseModal}
            variant="contained"
            sx={{ bgcolor: "#0AB99D", color: "white", mt: 2 }}
          >
            Close
          </Button>
        </Box>
      </Modal>
    </Card>
  );
};

export default StepForm;
