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
import CourseModuleForm from "./CourseModuleForm";

type AppDispatch = ThunkDispatch<RootState, unknown, UnknownAction>;

interface PersonalInfoFormProps {
  formik: any; // Adjust the type if needed
  selectedDegree: any;
  setSelectedDegree: React.Dispatch<React.SetStateAction<any>>;
  selectedCourse: any;
  setSelectedCourse: React.Dispatch<React.SetStateAction<any>>;
}

const DegreesForm: React.FC<PersonalInfoFormProps> = () => {
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

  useEffect(() => {
    dispatch(getAllCourses());
    dispatch(getAllDegrees());
  }, [dispatch]);

  const { degrees } = useSelector((state: RootState) => state.degrees);
  const courses =
    useSelector((state: RootState) => state.courses).courses || [];
  const [degreeCourses, setDegreeCourses] = useState([]);
  const [showCourseDetails, setShowCourseDetails] = useState(false);

  const handleDegreeChange = (event) => {
    const selectedId = event.target.value;
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
  };

  useEffect(() => {
    const { slug } = selectedDegree;
    setDegreeCourses(
      courses.filter((course) => course?.degreeType?.slug === slug)
    );
    console.log(courses);
  }, [selectedDegree]);

  const showDegreeDetails = () => {
    setShowCourseDetails(!showCourseDetails);
  };
  return (
    <Card raised={true}>
      <CardContent>
        <form>
          <FormControl sx={{ m: 1, width: "25ch" }} className="d-flex flex-row">
            <InputLabel id="degreeType-label">Degree Type</InputLabel>
            <Select
              labelId="degreeType-label"
              id="degreeType"
              name="degreeType"
              //   value={formik.values.degreeType}
              onChange={(event) => {
                handleDegreeChange(event);
              }}
              label="Degree Type"
              style={{ width: "100%" }}
            >
              {degrees &&
                degrees.map((degree: any) => (
                  <MenuItem key={degree.id} value={degree.id}>
                    {degree.name}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </form>
        {selectedDegree && (
          <div className="it-signup-btn mb-40">
            <button className="it-btn" type="submit">
              Add Course
            </button>
          </div>
        )}
      </CardContent>
      <CardContent>
      {showCourseDetails == true && <CourseModuleForm />}
        {degreeCourses.map(({ CourseName }) => (
            <div>
          <div className="d-flex flex-row justify-content-between px-5 pb-0 mb-5 pb-5">
            <p>{CourseName}</p>
            <div
              className="d-flex flex-row justify-content-end"
              style={{ width: "50%" }}
            >
              <button
                className="it-btn py-0 px-2 me-2"
                type="submit"
                onClick={() => showDegreeDetails()}
              >
                View
              </button>
              <button
                className="it-btn py-0 px-2"
                type="submit"
                onClick={() => showDegreeDetails()}
              >
                Delete
              </button>
            </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default DegreesForm;
