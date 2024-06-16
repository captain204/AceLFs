import { TextField, InputLabel, Card } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { number } from "yup";

interface CourseInfo {
  CourseName: string;
  description: string;
  degreeType: Object;
}
// formhandler determines if the form is being displayed or not
export default function CourseModuleForm({ degree, formHandler, formData }) {
  const [courseData, setCourseData] = useState<CourseInfo>({
    CourseName: "",
    description: "",
    degreeType: degree,
  });
  const [formEditable, setFormEditable] = useState(true);
  const [confirmCourseEdit, setConfirmCourseEdit] = useState(false);
  const resetFields = () =>
    setCourseData({
      CourseName: "",
      description: "",
      degreeType: degree,
    });
  const addCourse = async () => {
    await axios
      .post("http://localhost:8000/api/v1/program/degreecourse", courseData)
      .then((response) => {
        toast.success("Added successfully");
      })
      .catch((error) => {
        toast.error("Error adding course");
        console.log(error.response.data);
      });
    resetFields();
    formHandler(false);
  };

  useEffect(() => {
    if (formData !== null) {
      setCourseData(formData);
      setFormEditable(false);
    }
  }, [formData]);

  const editCourseHandler = () => {
    setFormEditable(true);
    setConfirmCourseEdit(true);
  };
  const editCourse = async () => {
    const id = courseData["id"];
    await axios
      .put(`http://localhost:8000/api/v1/program/degreecourse/${id}`, courseData)
      .then((response) => {
        toast.success("Edited successfully");
      })
      .then(() => formHandler(false))
      .catch((error) => {
        toast.error("Unable to edit course");
        console.log(error.response.data);
      });

      setConfirmCourseEdit(false)
    formHandler(false);
  };
  return (
    <Card className="p-5" style={{ marginBottom: 40 }}>
      <div>
        <TextField
          id="courseName"
          name="courseName"
          label="Course name"
          color="success"
          className="mb-4 col-12 col-md-8"
          value={courseData?.CourseName || ""}
          inputProps={!formEditable && { readOnly: true }}
          contentEditable={false}
          // value={formik.values.firstName}
          onChange={(event) =>
            setCourseData({ ...courseData, CourseName: event.target.value })
          }
          // error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          // helperText={formik.touched.firstName && formik.errors.firstName}
        />

        <InputLabel>Description</InputLabel>
        <TextField
          id="description"
          name="description"
          aria-label="Description"
          multiline
          value={courseData?.description || ""}
          rows={4}
          className="mb-4 col-12 col-md-8"
          onChange={(event) =>
            setCourseData({ ...courseData, description: event.target.value })
          }
          inputMode="none"
          inputProps={!formEditable && { readOnly: true }}
        />
      </div>
      {!confirmCourseEdit && (
        <button
          className="it-btn large"
          onClick={() => {
            formData ? editCourseHandler() : addCourse();
          }}
        >
          {formData ? "Edit" : "Add"}
        </button>
      )}
      {confirmCourseEdit && (
        <button className="it-btn large" onClick={() => editCourse()}>
          Edit Course
        </button>
      )}
    </Card>
  );
}
