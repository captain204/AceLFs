import React, { useEffect, useState } from "react";
import { useFormik, Formik, Form } from "formik";
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
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../Globals/store/store";
import { ThunkDispatch, UnknownAction } from "@reduxjs/toolkit";
import { getAllCourses } from "../../../Globals/Slices/Degree/CoursesSlice";
import { getAllDegrees } from "../../../Globals/Slices/Degree/DegreesSlice";
import { submitEmergencyForm } from "../../../Globals/Slices/ApplicationSlice/Emergency";
import { submitRefereeForm } from "../../../Globals/Slices/ApplicationSlice/Referee";
import { submitFirstForm } from "../../../Globals/Slices/ApplicationSlice/FirstFormSlice";

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

  useEffect(() => {
    dispatch(getAllCourses());
    dispatch(getAllDegrees());
  }, [dispatch]);

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
        <InputLabel id="gender-label">Gender</InputLabel>
        <Select
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
        <InputLabel id="marital-status-label">Marital Status</InputLabel>
        <Select
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
        <InputLabel id="religion-label">Religion</InputLabel>
        <Select
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
      <TextField
        id="state"
        name="state"
        label="State"
        color="success"
        value={formik.values.state}
        onChange={formik.handleChange}
        error={formik.touched.state && Boolean(formik.errors.state)}
        helperText={formik.touched.state && formik.errors.state}
      />
      <TextField
        id="lga"
        name="lga"
        label="LGA"
        color="success"
        value={formik.values.lga}
        onChange={formik.handleChange}
        error={formik.touched.lga && Boolean(formik.errors.lga)}
        helperText={formik.touched.lga && formik.errors.lga}
      />
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
        <InputLabel id="physicalChallenge-label">Physical Challenge</InputLabel>
        <Select
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
        <InputLabel id="degreeType-label">Degree Type</InputLabel>
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
        <InputLabel id="courses-label">Courses</InputLabel>
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
    {/* <TextField
      id="student"
      name="student"
      label="Student"
      color="success"
      value={formik.values.student}
      onChange={formik.handleChange}
      error={formik.touched.student && Boolean(formik.errors.student)}
      helperText={formik.touched.student && formik.errors.student}
    /> */}
  </Box>
);

const StepForm = () => {
  const loading = useSelector((state: RootState) => state?.loginUser?.loading);
  const personal = useSelector((state: RootState) => state?.personal?.response);

  const steps = [
    "Personal Information",
    "Referee Information",
    "Emergency Contact",
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
    },

    validate: (values) => {
      const errors: any = {};

      // Validate personal info form fields
      // if (activeStep === 0) {
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
      if (!values.degreeType) {
        errors.degreeType = "Required";
      }
      if (!values.courses) {
        errors.courses = "Required";
      }
      // }

      // if (activeStep === 1) {
      //   if (!values.refereeFirstName) {
      //     errors.refereeFirstName = "Required";
      //   }
      //   if (!values.refereeLastName) {
      //     errors.refereeLastName = "Required";
      //   }
      //   if (!values.refereeEmail) {
      //     errors.refereeEmail = "Required";
      //   }
      //   if (!values.refereeContactAddress) {
      //     errors.refereeContactAddress = "Required";
      //   }
      //   if (!values.refereePhoneNumber) {
      //     errors.refereePhoneNumber = "Required";
      //   }
      // }

      // Validate emergency contact form fields
      // if (activeStep === 2) {
      //   if (!values.emergencyFirstName) {
      //     errors.emergencyFirstName = "Required";
      //   }
      //   if (!values.emergencyLastName) {
      //     errors.emergencyLastName = "Required";
      //   }
      //   if (!values.emergencyEmail) {
      //     errors.emergencyEmail = "Required";
      //   }
      //   if (!values.emergencyContactAddress) {
      //     errors.emergencyContactAddress = "Required";
      //   }
      //   if (!values.emergencyPhoneNumber) {
      //     errors.emergencyPhoneNumber = "Required";
      //   }
      //   if (!values.student) {
      //     errors.student = "Required";
      //   }
      // }

      // Validate referee info form fields

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
    console.log(formik.values)

    if (isLastStep()) {
      // const {
      //   emergencyFirstName,
      //   emergencyLastName,
      //   emergencyEmail,
      //   emergencyContactAddress,
      //   emergencyPhoneNumber,
      //   student,
      // } = formik.values;

      try {
        await dispatch(
          submitFirstForm({
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
          })
        );

        await dispatch(
          submitRefereeForm({
            firstname: formik.values.refereeFirstName,
            lastname: formik.values.refereeLastName,
            email: formik.values.refereeEmail,
            contactAddress: formik.values.refereeContactAddress,
            phoneNumber: formik.values.refereePhoneNumber,
          })
        );

        await dispatch(
          submitEmergencyForm({
            firstname: formik.values.emergencyFirstName,
            lastname: formik.values.emergencyLastName,
            email: formik.values.emergencyEmail,
            contactAddress: formik.values.emergencyContactAddress,
            phoneNumber: formik.values.emergencyPhoneNumber,
            student: personal?.id,
          })
        );

        // alert(JSON.stringify(formik.values, null, 2));
      } catch (error) {
        console.error("Error submitting forms:", error);
        // Handle the error appropriately, maybe show an error message to the user
      }
    } else {
      // Move to the next step if it's not the last step
      handleNext();
    }
  };

  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();

  //   if (isLastStep()) {
  //     const {
  //       emergencyFirstName,
  //       emergencyLastName,
  //       emergencyEmail,
  //       emergencyContactAddress,
  //       emergencyPhoneNumber,
  //       student,
  //     } = formik.values;

  //     dispatch(
  //       submitFirstForm({
  //         firstName: formik.values.firstName,
  //         surName: formik.values.surname,
  //         otherNames: formik.values.otherName,
  //         dateofBirth: formik.values.dateOfBirth.toISOString().split("T")[0],
  //         gender: formik.values.gender,
  //         marital_status: formik.values.maritalStatus,
  //         religion: formik.values.religion,
  //         nationality: formik.values.nationality,
  //         state: formik.values.state,
  //         lga: formik.values.lga,
  //         contactAddress: formik.values.contactAddress,
  //         phoneNumber: formik.values.phoneNumber,
  //         physicalChallenge: formik.values.physicalChallenge,
  //         applicationType: +selectedDegree.id,

  //         // {
  //         //   slug: selectedDegree.slug,
  //         //   name: selectedDegree.name,
  //         //   category: selectedDegree.category,
  //         //   description: selectedDegree.description,
  //         //   coursesCount: selectedDegree.coursesCount,
  //         //   duration: selectedDegree.duration,
  //         // },
  //         choiceofCourse: +selectedCourse.id,

  //         // {
  //         //   CourseName: selectedCourse.CourseName,
  //         //   description: selectedCourse.description,
  //         //   degreeType: {
  //         //     slug: selectedDegree.slug,
  //         //     name: selectedDegree.name,
  //         //     category: selectedDegree.category,
  //         //     description: selectedDegree.description,
  //         //     coursesCount: selectedDegree.coursesCount,
  //         //     duration: selectedDegree.duration,
  //         //   },
  //         // },
  //       })
  //     );

  //     dispatch(
  //       submitRefereeForm({
  //         firstname: formik.values.refereeFirstName,
  //         lastname: formik.values.refereeLastName,
  //         email: formik.values.refereeEmail,
  //         contactAddress: formik.values.refereeContactAddress,
  //         phoneNumber: formik.values.refereePhoneNumber,
  //       })
  //     );

  //     dispatch(
  //       submitEmergencyForm({
  //         firstname: emergencyFirstName,
  //         lastname: emergencyLastName,
  //         email: emergencyEmail,
  //         contactAddress: emergencyContactAddress,
  //         phoneNumber: emergencyPhoneNumber,
  //         student,
  //       })
  //     );

  //     alert(JSON.stringify(formik.values, null, 2));
  //   } else {
  //     // Move to the next step if it's not the last step
  //     handleNext();
  //   }
  // };

  return (
    <Card raised={true}>
      <CardContent>
        <Typography variant="h5" gutterBottom sx={{ color: "#0AB99D" }}>
          Student Application Form
        </Typography>
        <Stepper
          activeStep={activeStep}
          alternativeLabel
          // sx={{
          // "& .MuiStepConnector-line": {
          //   borderTopWidth: "2px",
          // },
          //   "& .MuiStepConnector-root.Mui-active .MuiStepConnector-line": {
          //     borderColor: "red",
          //   },
          //   "& .MuiStepConnector-root.Mui-completed .MuiStepConnector-line": {
          //     borderColor: "red",
          //   },
          // }}

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
            <PersonalInfoForm
              formik={formik}
              selectedDegree={selectedDegree}
              setSelectedDegree={setSelectedDegree}
              selectedCourse={selectedCourse}
              setSelectedCourse={setSelectedCourse}
            />
          )}
          {activeStep === 1 && <RefereeForm formik={formik} />}
          {activeStep === 2 && <EmergencyContactForm formik={formik} />}
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
            <Button disabled={activeStep === 0} onClick={handleBack}>
              Back
            </Button>
            <Button
              type="submit"
              variant="contained"
              sx={{ bgcolor: "#0AB99D" }}
            >
              {activeStep === steps.length - 1 ? "Submit" : "Next"}
            </Button>
          </Box>
        </form>
      </CardContent>
    </Card>
  );
};

export default StepForm;
