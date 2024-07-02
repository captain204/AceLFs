import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";

// Validation schema
const schema = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  surname: yup.string().required("Surname is required"),
  otherName: yup.string().required("Other name is required"),
  dateOfBirth: yup.date().required("Date of Birth is required"),
  gender: yup.string().required("Gender is required"),
  maritalStatus: yup.string().required("Marital Status is required"),
  religion: yup.string().required("Religion is required"),
  nationality: yup.string().required("Nationality is required"),
  state: yup.string().required("State is required"),
  lga: yup.string().required("LGA is required"),
  contactAddress: yup.string().required("Contact Address is required"),
  phoneNumber: yup.string().required("Phone Number is required"),
  physicalChallenge: yup.string().required("Physical Challenge is required"),
  degreeType: yup.string().required("Degree Type is required"),
  courses: yup.string().required("Courses are required"),
});
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../Globals/store/store";
import { ThunkDispatch, UnknownAction } from "@reduxjs/toolkit";
import { getAllCourses } from "../../../Globals/Slices/ApplicantsSlices/Degree/CoursesSlice";
import { useEffect } from "react";
import { getAllDegrees } from "../../../Globals/Slices/ApplicantsSlices/Degree/DegreesSlice";

type AppDispatch = ThunkDispatch<RootState, unknown, UnknownAction>;


interface PersonalInfoProps {
  onValidate: React.Dispatch<React.SetStateAction<boolean>>;
  formRef: React.RefObject<HTMLFormElement>;
}

export default function PersonalInfo({ onValidate, formRef }: PersonalInfoProps) {
  const dispatch: AppDispatch = useDispatch();
  const [selectedDate, setSelectedDate] = React.useState(null);
  const degrees = useSelector((state: RootState) => state?.degrees?.degrees);
  const courses = useSelector((state: RootState) => state?.courses?.courses);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    dispatch(getAllCourses());
    dispatch( getAllDegrees())
  }, []);


 

  return (
    <>
      <Card raised={true} sx={{ marginTop: "30px" }}>
        <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <Box
                sx={{
                  "& > :not(style)": { m: 1, width: "25ch" },
                }}
              >
                <Controller
                  name="firstName"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="First Name"
                      color="success"
                      error={!!errors.firstName}
                      helperText={errors.firstName?.message}
                      // FormHelperTextProps={{
                      //   style: {
                      //     color: "red",
                      //     fontSize: "14px",
                      //   },
                      // }}
                    />
                  )}
                />
                <Controller
                  name="surname"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Surname"
                      color="success"
                      error={!!errors.surname}
                      helperText={errors.surname?.message}
                    />
                  )}
                />
                <Controller
                  name="otherName"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Other Name"
                      color="success"
                      error={!!errors.otherName}
                      helperText={errors.otherName?.message}
                    />
                  )}
                />
              </Box>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <Box
                sx={{
                  "& > :not(style)": { m: 1, width: "25ch" },
                }}
              >
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    value={selectedDate}
                    onChange={handleDateChange}
                    // sx={{ color: "#1b5e20" }}
                  />
                </LocalizationProvider>

                {/* <Controller
                  name="dateOfBirth"
                  control={control}
                  render={({ field }) => (
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        {...field}
                        onChange={(date) => field.onChange(date)}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Date of Birth"
                            color="success"
                            error={!!errors.dateOfBirth}
                            helperText={errors.dateOfBirth?.message}
                          />
                        )}
                      />
                    </LocalizationProvider>
                  )}
                /> */}
                <FormControl sx={{ m: 1, width: "25ch" }}>
                  <InputLabel id="gender-label">Gender</InputLabel>
                  <Controller
                    name="gender"
                    control={control}
                    render={({ field }) => (
                      <Select
                        {...field}
                        labelId="gender-label"
                        id="gender"
                        label="Gender"
                        error={!!errors.gender}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value="male">Male</MenuItem>
                        <MenuItem value="female">Female</MenuItem>
                        <MenuItem value="other">Other</MenuItem>
                      </Select>
                    )}
                  />
                  {errors.gender && (
                    <p
                      style={{
                        color: "#d32f2f",
                        fontSize: "0.75rem",
                        fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                        fontWeight: 400,
                        lineHeight: 1.66,
                        letterSpacing: "0.03333em",
                        textAlign: "left",
                        marginTop: 3,
                        marginRight: 14,
                        marginBottom: 0,
                        marginLeft: 14,
                      }}
                    >
                      {errors.gender.message}
                    </p>
                  )}
                </FormControl>
                <FormControl sx={{ m: 1, width: "25ch" }}>
                  <InputLabel id="marital-status-label">
                    Marital Status
                  </InputLabel>
                  <Controller
                    name="maritalStatus"
                    control={control}
                    render={({ field }) => (
                      <Select
                        {...field}
                        labelId="marital-status-label"
                        id="marital-status"
                        label="Marital Status"
                        error={!!errors.maritalStatus}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value="single">Single</MenuItem>
                        <MenuItem value="married">Married</MenuItem>
                        <MenuItem value="divorced">Divorced</MenuItem>
                        <MenuItem value="widowed">Widowed</MenuItem>
                      </Select>
                    )}
                  />
                  {errors.maritalStatus && (
                    <p
                      style={{
                        color: "#d32f2f",
                        fontSize: "0.75rem",
                        fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                        fontWeight: 400,
                        lineHeight: 1.66,
                        letterSpacing: "0.03333em",
                        textAlign: "left",
                        marginTop: 3,
                        marginRight: 14,
                        marginBottom: 0,
                        marginLeft: 14,
                      }}
                    >
                      {errors.maritalStatus.message}
                    </p>
                  )}
                </FormControl>
              </Box>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <Box
                sx={{
                  "& > :not(style)": { m: 1, width: "25ch" },
                }}
              >
                <FormControl sx={{ m: 1, width: "25ch" }}>
                  <InputLabel id="religion-label">Religion</InputLabel>
                  <Controller
                    name="religion"
                    control={control}
                    render={({ field }) => (
                      <Select
                        {...field}
                        labelId="religion-label"
                        id="religion"
                        label="Religion"
                        error={!!errors.religion}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value="christianity">Christianity</MenuItem>
                        <MenuItem value="islam">Islam</MenuItem>
                        <MenuItem value="hinduism">Hinduism</MenuItem>
                        <MenuItem value="buddhism">Buddhism</MenuItem>
                        <MenuItem value="judaism">Judaism</MenuItem>
                        <MenuItem value="other">Other</MenuItem>
                      </Select>
                    )}
                  />
                  {errors.religion && (
                    <p
                      style={{
                        color: "#d32f2f",
                        fontSize: "0.75rem",
                        fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                        fontWeight: 400,
                        lineHeight: 1.66,
                        letterSpacing: "0.03333em",
                        textAlign: "left",
                        marginTop: 3,
                        marginRight: 14,
                        marginBottom: 0,
                        marginLeft: 14,
                      }}
                    >
                      {errors.religion.message}
                    </p>
                  )}
                </FormControl>
                <Controller
                  name="nationality"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Nationality"
                      color="success"
                      error={!!errors.nationality}
                      helperText={errors.nationality?.message}
                    />
                  )}
                />
                <Controller
                  name="state"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="State"
                      color="success"
                      error={!!errors.state}
                      helperText={errors.state?.message}
                    />
                  )}
                />
              </Box>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <Box
                sx={{
                  "& > :not(style)": { m: 1, width: "25ch" },
                }}
              >
                <Controller
                  name="lga"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="LGA"
                      color="success"
                      error={!!errors.lga}
                      helperText={errors.lga?.message}
                    />
                  )}
                />
                <Controller
                  name="contactAddress"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Contact Address"
                      color="success"
                      error={!!errors.contactAddress}
                      helperText={errors.contactAddress?.message}
                    />
                  )}
                />
                <Controller
                  name="phoneNumber"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Phone Number"
                      color="success"
                      error={!!errors.phoneNumber}
                      helperText={errors.phoneNumber?.message}
                    />
                  )}
                />
              </Box>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <Box
                sx={{
                  "& > :not(style)": { m: 1, width: "25ch" },
                }}
              >
                <FormControl sx={{ m: 1, width: "25ch" }} color="success">
                  <InputLabel id="physical-challenge-label">
                    Physical Challenge
                  </InputLabel>
                  <Controller
                    name="physicalChallenge"
                    control={control}
                    render={({ field }) => (
                      <Select
                        {...field}
                        labelId="physical-challenge-label"
                        id="physical-challenge"
                        label="Physical Challenge"
                        error={!!errors.physicalChallenge}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value="none">None</MenuItem>
                        <MenuItem value="visual">Visual Impairment</MenuItem>
                        <MenuItem value="hearing">Hearing Impairment</MenuItem>
                        <MenuItem value="mobility">
                          Mobility Impairment
                        </MenuItem>
                        <MenuItem value="other">Other</MenuItem>
                      </Select>
                    )}
                  />
                  {errors.physicalChallenge && (
                    <p
                      style={{
                        color: "#d32f2f",
                        fontSize: "0.75rem",
                        fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                        fontWeight: 400,
                        lineHeight: 1.66,
                        letterSpacing: "0.03333em",
                        textAlign: "left",
                        marginTop: 3,
                        marginRight: 14,
                        marginBottom: 0,
                        marginLeft: 14,
                      }}
                    >
                      {errors.physicalChallenge.message}
                    </p>
                  )}
                </FormControl>
                <FormControl sx={{ m: 1, width: "25ch" }} color="success">
                  <InputLabel id="degree-type-label">Degree Type</InputLabel>
                  <Controller
                    name="degreeType"
                    control={control}
                    render={({ field }) => (
                      <Select
                        {...field}
                        labelId="degree-type-label"
                        id="degree-type"
                        label="Degree Type"
                        error={!!errors.degreeType}
                      >
                        <MenuItem value="">
                          {/* <em>None</em> */}
                        </MenuItem>
                        {degrees?.map((degree:any) => (
                          <MenuItem key={degree?.id} value={degree?.name}>
                            {degree?.name}
                          </MenuItem>
                        ))}
                      </Select>
                    )}
                  />
                  {errors.degreeType && (
                    <p
                      style={{
                        color: "#d32f2f",
                        fontSize: "0.75rem",
                        fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                        fontWeight: 400,
                        lineHeight: 1.66,
                        letterSpacing: "0.03333em",
                        textAlign: "left",
                        marginTop: 3,
                        marginRight: 14,
                        marginBottom: 0,
                        marginLeft: 14,
                      }}
                    >
                      {errors.degreeType.message}
                    </p>
                  )}
                </FormControl>
                
                <FormControl sx={{ m: 1, width: "25ch" }} color="success">
                  <InputLabel id="courses-label">Courses</InputLabel>
                  <Controller
                    name="courses"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <Select
                        {...field}
                        labelId="courses-label"
                        id="courses"
                        label="Courses"
                        error={!!errors.courses}
                        value={field.value || ""}
                        onChange={(e) => field.onChange(e.target.value)}
                      >
                        <MenuItem value="">
                          {/* <em>None</em> */}
                        </MenuItem>
                        {courses?.map((course:any) => (
                          <MenuItem key={course?.slug} value={course?.CourseName}>
                            {course.CourseName}
                          </MenuItem>
                        ))}
                      </Select>
                    )}
                  />
                  {errors.courses && (
                    <p
                      style={{
                        color: "#d32f2f",
                        fontSize: "0.75rem",
                        fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                        fontWeight: 400,
                        lineHeight: 1.66,
                        letterSpacing: "0.03333em",
                        textAlign: "left",
                        marginTop: 3,
                        marginRight: 14,
                        marginBottom: 0,
                        marginLeft: 14,
                      }}
                    >
                      {errors.courses.message}
                    </p>
                  )}
                </FormControl>
              </Box>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <Button type="submit" variant="contained" color="success">
                Submit
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </>
  );
}




