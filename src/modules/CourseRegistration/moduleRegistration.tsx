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
import Link from "next/link";
import { useRouter } from "next/router";

// type AppDispatch = ThunkDispatch<RootState, unknown, UnknownAction>;
interface ModuleRegister {
  slug: string;
  student: number;
  course: number;
  semester: number;
}
const CoursesTable = ({ children }) => {
  return (
    <table className={`w-100 justify-content-center text-center px-5 mx-auto`}>
      <tr className="border-bottom border-5 h-100 ">
        <th className="h5">Course</th>
        <th className="h5">Code</th>
        <th className="h5">Units</th>
        <th>Register</th>
      </tr>
      {children}
    </table>
  );
};
export default function CoursesForm() {
  const dispatch: AppDispatch = useDispatch();
  const [registeredModules, setRegisteredModules] = useState([]);
  const [modules, setModules] = useState([]);
  const [course, setCourse] = useState([]);
  // stores data returned from course module register
  const [courseRegisterList, setCourseRegisterList] = useState([]);
  const [moduleregister, setModuleRegister] = useState<ModuleRegister>({
    course: null,
    semester: null,
    slug: "form",
    student: null,
  });
  const [showModules, setShowModules] = useState(false);
  const [semesters, setSemesters] = useState([]);
  const router = useRouter();

  useEffect(() => {
    dispatch(getAllCourses());
  }, [dispatch]);

  const getModules = async () => {
    await axiosInstance
      .get("http://localhost:8000/api/v1/coursemodule")
      .then((response) => {
        // course modules for the selected degree
        const modules = response.data;
        const filteredModules = modules.filter(
          (module) => module.course === course
        );

        setModules(filteredModules);
      })
      .catch((error) => console.error(error.response.data));
  };
  const getSemesters = async () => {
    await axiosInstance
      .get("http://localhost:8000/api/v1/useradmin/semesters")
      .then((response) => setSemesters(response.data))
      .catch((error) => console.log(error));
  };
  const getUser = async () => {
    await axiosInstance
      .get("http://localhost:8000/api/v1/admissions/students/me/")
      .then(({ data }) => {
        setModuleRegister({ ...moduleregister, student: data.id });
        setCourse(data.choiceofCourse);
      })
      .catch((error) => console.error(error));
  };
  const registerModule = async (module) => {
    const { id } = module;
    const data = {
      ...moduleregister,
      course: id,
    };
    if (data.course !== null) {
      await axiosInstance
        .post("http://localhost:8000/api/v1/coursemoduleregister", data)
        .then((response) => {
          // setModules(modules.filter((mod) => mod.id !== response.data.course));
          // setRegisteredModules([...registeredModules, module]);
          getRegisteredModules();
          console.log('registered', module.name)
        })
        .catch((error) => {
          toast.error("Error with course registration");
          console.error(error);
        });
    }
  };

  const getRegisteredModules = async () => {
    await axiosInstance
      .get("http://localhost:8000/api/v1/coursemoduleregister")
      .then(({ data }) => {
        // ids of courses the student has registered for
        const courseIds = data.map((course) => course.course);
        // info about teh modules that have been regsietered
        setRegisteredModules(
          modules.filter((mod) => courseIds.includes(mod.id))
        );
        setModules(modules.filter((mod) => !courseIds.includes(mod.id)));
        // setRegisteredModules(modules.filter((mod) => courseIds.includes(mod.id)))
        setCourseRegisterList(data);
      })
      .catch((error) => console.error(error.response.data));
  };

  const unRegister = async (module) => {
    // get the course registered with that module id
    const id = courseRegisterList.find((value) => value.course === module.id)
      ?.id;
    await axiosInstance
      .delete(`http://localhost:8000/api/v1/coursemoduleregister${id}`)
      .then((response) => {
        getModules();
        getRegisteredModules();
      })
      .catch((error) => {
        toast.error("Error unregistering module");
        console.error(error);
      });
  };

  useEffect(() => {
    getUser();
  }, []);
  useEffect(() => {
    getSemesters();
  }, [moduleregister.student]);
  useEffect(() => {
    getModules();
  }, [course]);
  useEffect(() => {
    getRegisteredModules();
  }, [moduleregister.semester]);

  return (
    <Card raised={true}>
      <button
        onClick={() => router.push("courses/courseregistrationform")}
        className="it-btn-white end-0 position-absolute"
      >
        Download Registration Form
      </button>
      <h4 className="text-center" style={{ paddingTop: 50 }}>
        Register Courses
      </h4>
      <CardContent>
        <FormControl
          sx={{ m: "auto" }}
          className="d-flex flex-row col-lg-8 col-sm-12 col-md-12"
        >
          <InputLabel id="degreeType-label">Select Semester</InputLabel>
          <Select
            labelId="semester-label"
            id="semester"
            name="semester"
            label="Semester"
            style={{ width: "100%" }}
            defaultValue={semesters[0] || ""}
            onChange={(event) => {
              setModuleRegister({
                ...moduleregister,
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
      {showModules == true && modules.length > 0 && (
        <CoursesTable>
          {modules.map((module) => {
            const { name, courseCode, courseUnits, id } = module;
            return (
              <tr key={id}>
                <td>{name}</td>
                <td>{courseCode}</td>
                <td>{courseUnits}</td>
                <td>
                  <button
                    className="it-btn text-align-center"
                    onClick={() => {
                      registerModule(module);
                    }}
                  >
                    <Add />
                  </button>
                </td>
              </tr>
            );
          })}
        </CoursesTable>
      )}
      <CardContent style={{ marginTop: 20 }}>
        <h4 className="text-center">Registered Courses</h4>
        <div>
          {registeredModules.length > 0 ? (
            <table className="w-100 justify-content-center text-center px-5 mx-auto">
              {registeredModules.map((module) => {
                const { name, courseCode, courseUnits, id } = module;
                return (
                  <tr key={id} className="">
                    <td className="">{name}</td>
                    <td className="">{courseCode}</td>
                    <td className="">{courseUnits} units</td>
                    <td>
                      <button
                        className="it-btn"
                        onClick={() => {
                          unRegister(module);
                        }}
                      >
                        <Remove />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </table>
          ) : (
            <div>
              <p className="text-center">No registered courses</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
