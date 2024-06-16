import React, { useEffect, useState } from "react";
import { useFormik, Formik, Form } from "formik";
import {
  Card,
  CardContent,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../Globals/store/store";
import { ThunkDispatch, UnknownAction } from "@reduxjs/toolkit";
import { getAllCourses } from "../../../Globals/Slices/Degree/CoursesSlice";
import { getAllDegrees } from "../../../Globals/Slices/Degree/DegreesSlice";
import CourseModuleForm from "./CourseModuleForm";
import axios from "axios";

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
  const [openDialog, setOpenDialog] = useState(false);
  const [showCourseForm, setShowCourseForm] = useState(false);
  const [formData, setFormData] = useState({})

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

  const getCourses = () => {
    const { slug } = selectedDegree;
    setDegreeCourses(
      courses.filter((course) => course?.degreeType?.slug === slug)
    );
  };
  useEffect(() => getCourses(), [selectedDegree]);


  const deleteCourse = async (id: number) => {
    await axios
      .delete(`http://localhost:8000/api/v1/program/degreecourse/${id}`)
      .then((response) => {
       setDegreeCourses(degreeCourses.filter(course => course.id !== id))
      }
      )
      .catch((response) => console.log(response));
    setOpenDialog(false);
  };
  const confirmDeletion = () => {
    // handles popup to confirm deletion of that course
    setOpenDialog(true);
  };

  const [buttonContent, setButtonContent] = useState("Add course");
  useEffect(() => {
    showCourseForm === true
      ? setButtonContent("Close")
      : setButtonContent("Add course");
  }, [showCourseForm]);

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
        {selectedDegree.name !== "" && (
          <div className="it-signup-btn">
            <button
              className="it-btn"
              onClick={() => {
                setFormData(null)
                setShowCourseForm(!showCourseForm)}}
            >
              {buttonContent}
            </button>
          </div>
        )}
      </CardContent>
      <CardContent>
          {showCourseForm==true && <CourseModuleForm degree={selectedDegree} formHandler={setShowCourseForm} formData={formData}/>}
        {degreeCourses.map((course) => (
          <div>
            <div>
              <div className="row">
                <p className="mb-4 col-5 col-sm-4 col-lg-5">{course.CourseName}</p>
                <div className="d-flex flex-wrap justify-content-end col-7 col-sm-8 col-lg-7">
                  <button
                    className="it-btn px-2 me-2"
                    type="submit"
                    onClick={() => {
                      // pass the course to the form for viewing and editing
                      showCourseForm===false && setFormData(course)
                      setShowCourseForm(!showCourseForm)
                    }}
                  >
                    View
                  </button>
                  <button
                    className="it-btn px-2 me-2"
                    type="submit"
                    onClick={() => confirmDeletion()}
                  >
                    Delete
                  </button>
                  {/* <button
                    className="it-btn px-2"
                    type="submit"
                    onClick={() => confirmDeletion()}
                  >
                    Edit
                  </button> */}
                </div>
              </div>
            </div>
            <Dialog
              open={openDialog}
              // TransitionComponent={Transition}
              keepMounted
              aria-describedby="alert-dialog-slide-description"
            >
              <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                  Are you sure you want to delete this course?
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
                <Button onClick={() => deleteCourse(course.id)}>Yes</Button>
              </DialogActions>
            </Dialog>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default DegreesForm;
