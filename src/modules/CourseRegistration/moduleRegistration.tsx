import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { AppDispatch } from "../../Globals/store/store";
import { getAllCourses } from "../../Globals/Slices/Degree/CoursesSlice";
import { Add, Remove } from "@mui/icons-material";
import axiosInstance from "../../Globals/Interceptor";
import { useRouter } from "next/router";
import Link from "next/link";
import CourseRegForm from "./courseRegForm";

// type AppDispatch = ThunkDispatch<RootState, unknown, UnknownAction>;
interface ModuleRegister {
  slug: string;
  student: number;
  course: number;
  semester: number;
}
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
export default function CoursesForm() {
  const [program, setProgram] = useState<number>();
  const [semesters, setSemesters] = useState(null);
  const [modules, setModules] = useState([]);
  const [showModules, setShowModules] = useState(false);
  const [courseRegs, setCourseRegs] = useState<ModuleRegister[]>()
  const [registeredModules, setRegisteredModules] = useState([])
  const [unregisteredModules, setUnregisteredModules] = useState([])
  const [moduleRegister, setModuleRegister] = useState<ModuleRegister>({
    slug: "ACEDHARS COURSE FORM", 
    student: null, 
  course: null, 
  semester: null
  })
const [student, setStudent] = useState<Student>()
  const getUser = async () => {
    await axiosInstance
      .get("http://localhost:8000/api/v1/admissions/students/me/")
      .then(({ data }) => {setModuleRegister({...moduleRegister,student: data.id}); setProgram(data.choiceofCourse); setStudent(data)})
      .catch((error) => console.error(error));
  };
  const getSemesters = async () => {
    await axiosInstance
      .get("http://localhost:8000/api/v1/useradmin/semesters")
      .then(({ data }) => setSemesters(data))
      .catch((error) => console.error(error));
  };

  const getCourseRegs = async() => {
    await axiosInstance
    .get("http://localhost:8000/api/v1/coursemoduleregister")
    .then(({ data }) => {setCourseRegs(data)})
    .catch((error) => console.error(error));
  }
  const getModules = async() => {
    await axiosInstance
    .get("http://localhost:8000/api/v1/coursemodule")
    .then(({ data }) => setModules(data.filter((module) => module.course === program))
    )
    .catch((error) => console.error(error));
  }
  const register = async(courseid) => {
    const data = {
      ...moduleRegister, 
      course : courseid
    }
    await axiosInstance
    .post("http://localhost:8000/api/v1/coursemoduleregister", data)
    .then(({ data }) =>{ getCourseRegs()})
    .catch((error) => console.error(error));
  }
  const unregister = async(module) => {
    // get the coursereg for this current module for this student for this semester
    const moduletodelete = courseRegs.find(reg => reg.course === module && reg.semester === moduleRegister.semester && reg.student== moduleRegister.student)
    const {id} = moduletodelete
    await axiosInstance
    .delete(`http://localhost:8000/api/v1/coursemoduleregister${id}`)
    .then(({ data }) =>{ getCourseRegs()})
    .catch((error) => console.error(error))
  } 
  // getSemesters();
  useEffect(() => {
    getSemesters()
    getUser();
  }, []);
  // get the modules for a particular program
  useEffect(() => {
    getModules()
    getCourseRegs()
  }, [program]);
  useEffect(() => {
    const registered = modules.filter((module) => courseRegs.some((reg) => module.id === reg.course))
    setRegisteredModules(registered)
    const unregistered = modules.filter((module) => !courseRegs.some((reg) => module.id === reg.course))
    setUnregisteredModules(unregistered)
  }, [courseRegs, modules])


  return (
    <Card raised={true}>
      <div>
        <Link  href={''} className="it-btn-yellow m-4">Download Course Form</Link>
      </div>
      <h3 className="text-center">Register Course</h3>
      <CardContent sx={{marginBottom: 10}}>
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
            onChange={(event) => {setModuleRegister({...moduleRegister, semester: parseInt(event.target.value)}); setShowModules(true)}}
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
       {showModules && <CardContent>
        <div>
        <table className={`w-100 justify-content-center text-center px-5 mx-auto`}>
          <thead>
          <tr className="border-bottom border-5 h-100 ">
            <th className="h5">Course</th>
            <th className="h5">Code</th>
            <th className="h5">Units</th>
            <th className="h5">Register</th>
          </tr>
          </thead>
          <tbody>
            {
              unregisteredModules.map((module) => {
                const {id, name, courseCode, courseUnits} = module
                return (
                  <tr key={id} className="border-bottom">
                    <td>{name}</td>
                    <td>{courseCode}</td>
                    <td>{courseUnits}</td>
                    <td>
                      <button className="p-4" onClick={() => register(id)}>
                        <Add/>
                      </button>
                    </td>
                  </tr>
                )
              })
            }
            </tbody>
        </table>
     </div>
        <div style={{marginTop: 80}}>
          <h4 style={{paddingBottom: 60}} className="text-center "><u>Registered Modules</u></h4>
          <table className={`w-100 justify-content-center text-center px-5 mx-auto`}>
          <thead>
          <tr className="border-bottom border-5 h-100 ">
            <th className="h5">Course</th>
            <th className="h5">Code</th>
            <th className="h5">Units</th>
            <th className="h5">Unregister</th>
          </tr>
          </thead>
          <tbody>
            {
              registeredModules.map((module) => {
                const {id, name, courseCode, courseUnits} = module
                return (
                  <tr key={id} className="border-bottom">
                    <td>{name}</td>
                    <td>{courseCode}</td>
                    <td>{courseUnits}</td>
                    <td>
                      <button className="p-4" onClick={() => unregister(id)}>
                        <Remove/>
                      </button>
                    </td>
                  </tr>
                )
              })
            }
            </tbody>
        </table>
        </div>
        <CourseRegForm student={student} courses={registeredModules}/>
        </CardContent>}
    </Card>
  );
}
