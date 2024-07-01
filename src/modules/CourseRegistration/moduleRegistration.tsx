import React, { useEffect, useState, useRef } from "react";
import {
  Card,
  CardContent,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  AppBar,
  Toolbar,
  Dialog
} from "@mui/material";
import { toast } from "react-toastify";
import { Add, Remove, Close, Download } from "@mui/icons-material";
import axiosInstance from "../../Globals/Interceptor";
import CourseRegForm from "./courseRegForm";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

interface Student {
  applicantID: string;
  uuid: string;
  firstName: string;
  surName: string;
  otherNames: string;
  dateofBirth: string;
  gender: string;
  marital_status: string;
  religion: string;
  nationality: string;
  state: string;
  lga: string;
  contactAddress: string;
  phoneNumber: string;
  physicalChallenge: string;
  regNumber: string;
  user: number;
  applicationType: number;
  choiceofCourse: number;
}
export default function ModuleRegistration() {
  const [program, setProgram] = useState<number>();
  const [semesters, setSemesters] = useState(null);
  const [modules, setModules] = useState([]);
  const [showModules, setShowModules] = useState(false);
  const [courseRegs, setCourseRegs] = useState([]);
  const [registeredModules, setRegisteredModules] = useState([]);
  const [unregisteredModules, setUnregisteredModules] = useState([]);
  const componentRef = useRef();
  const [openForm, setOpenForm] = useState(false);
  const [moduleRegister, setModuleRegister] = useState({
    slug: "ACEDHARS COURSE FORM",
    student: null,
    course: null,
    semester: null,
  });
  const [student, setStudent] = useState<Student>();
  const getUser = async () => {
    await axiosInstance
      .get("http://localhost:8000/api/v1/admissions/students/me/")
      .then(({ data }) => {
        const response = data[0]
        setModuleRegister({ ...moduleRegister, student: response.id });
        setProgram(response.choiceofCourse);
        setStudent(response);
      })
      .catch((error) => console.error(error));
  };
  const getSemesters = async () => {
    await axiosInstance
      .get("http://localhost:8000/api/v1/useradmin/semesters")
      .then(({ data }) => setSemesters(data))
      .catch((error) => console.error(error));
  };

  const getCourseRegs = async () => {
    await axiosInstance
      .get("http://localhost:8000/api/v1/coursemoduleregister")
      .then(({ data }) => {
        setCourseRegs(data);
      })
      .catch((error) => console.error(error));
  };
  const getModules = async () => {
    await axiosInstance
      .get("http://localhost:8000/api/v1/coursemodule")
      .then(({ data }) =>
   {setModules(data.filter((module) => module.course === program))}
      )
      .catch((error) => console.error(error));
  };
  const register = async (courseid) => {
    const data = {
      ...moduleRegister,
      course: courseid,
    };
    await axiosInstance
      .post("http://localhost:8000/api/v1/coursemoduleregister", data)
      .then(() => {
        getCourseRegs();
      })
      .catch((error) => {
        console.error(error);
        toast.error("Unable to register Course");
      });
  };
  const unregister = async (module) => {
    // get the coursereg for this current module for this student for this semester
    const moduletodelete = courseRegs.find(
      (reg) =>
        reg.course === module &&
        reg.semester === moduleRegister.semester &&
        reg.student == moduleRegister.student
    );
    await axiosInstance
      .delete(
        `http://localhost:8000/api/v1/coursemoduleregister${moduletodelete.id}`
      )
      .then(() => {
        getCourseRegs();
      })
      .catch((error) => {
        console.error(error);
        toast.error("Error unregistering course");
      });
  };
  const downloadForm = () => {
    const input = componentRef.current;
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL("form/png");
        const pdf = new jsPDF("p", "mm", "a4");
        pdf.addImage(imgData, "PNG", 0, 0, 210, 297);
        pdf.save("ACEDHARS Course Form.pdf");
      })
      .catch((err) => {
        console.error("Error generating PDF:", err);
      });
  };
  useEffect(() => {
    getSemesters();
    getUser();
  }, []);
  // get the modules for a particular program
  useEffect(() => {
    getModules();
    getCourseRegs();
  }, [program]);

  useEffect(() => {
    const registered = modules.filter((module) =>
      courseRegs.some((reg) => module.id === reg.course)
    );
    setRegisteredModules(registered);
    const unregistered = modules.filter(
      (module) => !courseRegs.some((reg) => module.id === reg.course)
    );
    setUnregisteredModules(unregistered);
  }, [courseRegs, modules]);

  return (
    <Card raised={true} className="pt-4">
      <h3 className="text-center">Register Course</h3>
      <CardContent sx={{ marginBottom: 10 }}>
        <FormControl
          sx={{ m: "auto" }}
          className="d-flex flex-row col-lg-8 col-sm-12 col-md-12"
        >
          <InputLabel id="semester-label">Select Semester</InputLabel>
          <Select
            labelId="semester-label"
            id="semester"
            name="semester"
            label="Semester"
            style={{ width: "100%" }}
            defaultValue={""}
            onChange={(event) => {
              setModuleRegister({
                ...moduleRegister,
                semester: parseInt(event.target.value),
              });
              setShowModules(true);
            }}
          >
            {semesters &&
              semesters.map((semester: any) => (
                <MenuItem key={semester.id} value={semester.id}>
                  {semester.name}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </CardContent>
      {showModules && (
        <CardContent>
          <div>
            <p style={{ paddingBottom: 60 }} className="text-center h5">
              <u>Courses</u>
            </p>
            <table
              className={`w-100 justify-content-center text-center px-5 mx-auto`}
            >
              <thead>
                <tr className="border-bottom border-5 h-100 ">
                  <th className="h6">Course</th>
                  <th className="h6">Code</th>
                  <th className="h6">Units</th>
                  <th className="h6">Register</th>
                </tr>
              </thead>
              <tbody>
                {unregisteredModules.map((module) => {
                  const { id, name, courseCode, courseUnits } = module;
                  return (
                    <tr key={id} className="border-bottom">
                      <td>{name}</td>
                      <td>{courseCode}</td>
                      <td>{courseUnits}</td>
                      <td>
                        <button className="p-4" onClick={() => register(id)}>
                          <Add />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div style={{ marginTop: 80 }}>
            <p style={{ paddingBottom: 60 }} className="text-center h5">
              <u>Registered Courses</u>
            </p>
            <table className="w-100 justify-content-center text-center">
              <thead>
                <tr className="border-bottom border-5 h-100 ">
                  <th className="h6">Course</th>
                  <th className="h6">Code</th>
                  <th className="h6">Units</th>
                  <th className="h6">Unregister</th>
                </tr>
              </thead>
              <tbody>
                {registeredModules.map((module) => {
                  const { id, name, courseCode, courseUnits } = module;
                  return (
                    <tr key={id} className="border-bottom">
                      <td>{name}</td>
                      <td>{courseCode}</td>
                      <td>{courseUnits}</td>
                      <td>
                        <button className="p-4" onClick={() => unregister(id)}>
                          <Remove />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <Dialog fullScreen open={openForm}>
            <AppBar sx={{ position: "relative", backgroundColor: 'black'}}>
              <Toolbar>
                <button
                style={{marginRight: 10}}
                  onClick={() => downloadForm()}
                >
                  <Download/>
                </button>
                <button
                  onClick={() => setOpenForm(false)}
                  aria-label="close"
                >
                  <Close/>
                </button>
              </Toolbar>
            </AppBar>
            <CourseRegForm
              student={student}
              courses={registeredModules}
              semester={moduleRegister.semester}
              componentRef={componentRef}
            />
          </Dialog>
        </CardContent>
      )}
    </Card>
  );
}
