import { TextField, TextareaAutosize, InputLabel, Card , Dialog, DialogContent, DialogContentText, DialogActions, Button} from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

interface CourseInfo {
  CourseName: string;
  description: string;
  degreeType: Object
}
export default function CourseModuleForm({degree}) {

  const [courseData, setCourseData]= useState<CourseInfo>({
      CourseName: "",
      description: "",
      degreeType: degree
  })

  const handleFormChange = async() => {
   await axios.post('http://localhost:8000/api/v1/program/degreecourse', courseData).then(response => {toast.success("Added successfully")})
   .catch(error => {
    toast.error('Error adding course')
    console.log(error)
   })
  }
  return (
    <Card className="p-5" style={{ marginBottom: 40 }} raised>
      <TextField
        id="courseName"
        name="courseName"
        label="Course name"
        color="success"
        className="mb-4"
        // value={formik.values.firstName}
        onChange={(event) => setCourseData({...courseData, CourseName: event.target.value})}
        // error={formik.touched.firstName && Boolean(formik.errors.firstName)}
        // helperText={formik.touched.firstName && formik.errors.firstName}
      />

      <InputLabel>Description</InputLabel>
      <TextareaAutosize
        id="description"
        name="description"
        aria-label="Description"
        maxRows={5}
        minRows={3}
        className="border"
        onChange={(event) => setCourseData({...courseData, description: event.target.value})}
      />
      <button
        className="it-btn large"
        type="submit"
        onClick={() => handleFormChange()}
      >
        Add
      </button>
    </Card>
  );
}
