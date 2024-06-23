import { Card, TextField, InputLabel } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

interface moduleState {
  name: string;
  degree: number;
  course: number;
  courseCode: string;
  courseUnits: number;
}
export default function CourseModuleForm({
  formState,
  degree,
  course,
  modules,
  modulesHandler,
  formData,
  getModules
}) {
  const [moduleData, setModuleData] = useState<moduleState>();
  const [authToken, setauthToken] = useState<string>();
  const [edit, setEdit] = useState(false);
  useEffect(() => {
    setauthToken(localStorage.getItem("token"));
  }, []);

  const addModule = async () => {
    modulesHandler([...modules, moduleData]);
    await axios
      .post("http://localhost:8000//api/v1/coursemodule", moduleData, {
        headers: {
          Authorization: `token ${authToken}`,
        },
      })
      .then((response) => toast.success("Course addedd successfully"))
      .catch((error) => {
        toast.error("Error adding course");
        console.log(error.response);
      });
    // close the form
    formState(false);
  };
  useEffect(() => {
    setModuleData({ ...moduleData, degree: degree, course: course });
    if (formData !==null) {
      setEdit(true)
      setModuleData(formData);
    }
  }, []);

  const editModule = async () => {
    const id = moduleData["id"];
    await axios
      .put(`http://localhost:8000/api/v1/coursemodule${id}`, moduleData, {
        headers: {
          Authorization: `token ${authToken}`,
        },
      })
      .then((response) => {
        toast.success("Edited successfully");
        getModules()
      })
      .then(() => formState(false))
      .catch((error) => {
        toast.error("Unable to edit course");
        console.log(error.response.data);
      });
    formState(false);
  };
  return (
    <Card className="p-5 text-center m-auto" style={{ marginBottom: 40, border: '1px solid green', width: 'max-content'}}>

      <TextField
        id="moduleName"
        name="moduleName"
        label="Module name"
        color="success"
        className="mb-4 col-12 col-md-6 w-100"
        value={moduleData?.name || ""} 
        contentEditable={false}
        onChange={(event) =>
          setModuleData({ ...moduleData, name: event.target.value })
        }
      />
      <div className="d-flex justify-content-center">
        <TextField
          type="number"
          required
          label="Course units"
          className="mr-5"
          value={moduleData?.courseUnits || ""}
          onChange={(event) =>
            setModuleData({
              ...moduleData,
              courseUnits: parseInt(event.target.value),
            })
          }
        />
        <TextField
          id="coursecode"
          name="coursecode"
          label="Course code"
          value={moduleData?.courseCode || ""}
          color="success"
          className="mb-4"
          onChange={(event) =>
            setModuleData({ ...moduleData, courseCode: event.target.value })
          }
        />
      </div>
      <div className="text-center">   
      <button
          className="it-btn-yellow-sm"
          onClick={() => {
            edit ? editModule() : addModule();
          }}
        >
          Submit
        </button>
      </div>
    </Card>
  );
}
