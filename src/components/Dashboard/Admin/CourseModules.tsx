import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Dialog,
  DialogContent,
  DialogActions,
  DialogContentText,
  Button,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../Globals/store/store";
import { ThunkDispatch, UnknownAction } from "@reduxjs/toolkit";
import { getAllCourses } from "../../../Globals/Slices/Degree/CoursesSlice";
import { getAllDegrees } from "../../../Globals/Slices/Degree/DegreesSlice";
import axios from "axios";
import CourseModuleForm from "./CourseModuleForm";
import { toast } from "react-toastify";

type AppDispatch = ThunkDispatch<RootState, unknown, UnknownAction>;

const DegreesForm = () => {
  const dispatch: AppDispatch = useDispatch();
  const [selectedDegree, setSelectedDegree] = useState<number>();
  const [selectedCourse, setSelectedCourse] = useState();
  const [degreeCourses, setDegreeCourses] = useState([]);
  const [courseModules, setCourseModules] = useState([]);
  const [authToken, setauthToken] = useState<string>();
  const [openDialog, setOpenDialog] = useState(false);
  const [formData, setFormData] = useState(null);

  const [showCourseModuleForm, setShowCourseModuleForm] = useState(false);
  useEffect(() => {
    setauthToken(localStorage.getItem("token"));
  }, []);

  useEffect(() => {
    dispatch(getAllCourses());
    dispatch(getAllDegrees());
  }, [dispatch]);

  const { degrees } = useSelector((state: RootState) => state.degrees);
  const courses =
    useSelector((state: RootState) => state.courses).courses || [];
  const handleDegreeChange = (event) => {
    const selectedId = event.target.value;
    const degree = degrees.find((d: any) => d.id === selectedId);
    setSelectedDegree(degree.id);
  };

  useEffect(() => {
    const filteredCourses = courses.filter(
      (course) => course?.degreeType?.id === selectedDegree
    );
    // console.log(filteredCourses)
    setDegreeCourses(filteredCourses);
  }, [selectedDegree]);

  const getCourseModules = async () => {
    await axios
      .get("http://localhost:8000/api/v1/coursemodule", {
        headers: {
          Authorization: `token ${authToken}`,
        },
      })
      .then((response) => {
        // course modules for the selected degree
        const modules = response.data;
        const filteredModules = modules.filter(
          (module) => module.course === selectedCourse
        );
        setCourseModules(filteredModules);
      })
      .catch((error) => console.error(error.response.data));
  };

  const deleteModule = async (id) => {
    setOpenDialog(false);
    await axios
      .delete(`http://localhost:8000/api/v1/coursemodule${id}`, {
        headers: {
          Authorization: `token ${authToken}`,
        },
      })
      .then((response) => {
        toast.success("Deleted successfully");
        const filteredModules = courseModules.filter(
          (module) => module.id !== id
        );
        setCourseModules(filteredModules);
      })
      .catch((error) => {
        toast.error("Unable to delete module");
        console.error(error.response.data);
      });
  };
  useEffect(() => {
    getCourseModules();
  }, [selectedCourse]);

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
          <FormControl sx={{ m: 1, width: "25ch" }} className="d-flex flex-row">
            <InputLabel id="degreeType-label">Course</InputLabel>
            <Select
              labelId="courseType-label"
              id="courseType"
              name="Course Type"
              onChange={(event) => {
                setSelectedCourse(event.target.value);
              }}
              label="Course Type"
              style={{ width: "100%" }}
            >
              {degreeCourses &&
                degreeCourses.map((course: any) => (
                  <MenuItem key={course.id} value={course.id}>
                    {course.CourseName}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </form>
      </CardContent>
      {selectedCourse && (
        <button
          className="it-btn px-2 m-2"
          type="submit"
          onClick={() => {
            setFormData(null);
            setShowCourseModuleForm(!showCourseModuleForm);
          }}
        >
          {showCourseModuleForm ? "Close" : "Add Module"}
        </button>
      )}
      <CardContent>
        {showCourseModuleForm && (
          <CourseModuleForm
            formState={setShowCourseModuleForm}
            degree={selectedDegree}
            course={selectedCourse}
            modules={courseModules}
            modulesHandler={setCourseModules}
            formData={formData}
            getModules={getCourseModules}
          />
        )}
        {courseModules.map((module) => (
          <div>
            <div className="mb-4 px-1 d-flex flex-wrap justify-content-evenly align-items-center">
              <p className="me-2 mb-0 me-md-5">{module.name}</p>
              <p className="me-2 mb-0 me-md-3">{module.courseCode}</p>
              <p className="me-2 mb-0 me-md-3">{module.courseUnits} units</p>
              <div className="d-flex ms-auto mt-2 mt-md-0">
                <button
                  className="it-btn me-2"
                  onClick={() => {
                    setFormData(module);
                    setShowCourseModuleForm((prev) => !prev);
                  }}
                >
                  Edit
                </button>
                <button className="it-btn" onClick={() => setOpenDialog(true)}>
                  Delete
                </button>
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
                  Are you sure you want to delete this module?
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
                <Button
                  onClick={() => {
                    deleteModule(module.id);
                  }}
                >
                  Yes
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default DegreesForm;
