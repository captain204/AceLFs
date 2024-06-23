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
  const router = useRouter()

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
      .get(
        "http://localhost:8000/api/v1/admissions/students/me/",
      )
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
        .post(
          "http://localhost:8000/api/v1/coursemoduleregister",
          data,
        )
        .then((response) => {
          // setModules(modules.filter((mod) => mod.id !== response.data.course));
          // setRegisteredModules([...registeredModules, module]);
          getRegisteredModules()
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
   const id =  courseRegisterList.find((value) => value.course === module.id)?.id
    await axiosInstance
      .delete(
        `http://localhost:8000/api/v1/coursemoduleregister${id}`,
      )
      .then((response) => {
        getModules()
        getRegisteredModules()
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
      <CardContent>
        <FormControl sx={{ m: 1, width: "25ch" }} className="d-flex flex-row">
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
      {showModules == true && (
        <CardContent>
          {modules.map((module) => {
            const { name, courseCode, courseUnits, id } = module;
            return (
              <div
                key={id}
                className="mb-4 d-flex flex-wrap w-75 justify-content-between align-items-center"
              >
                <p className="me-2 mb-0">{name}</p>
                <p className="me-2 mb-0">{courseCode}</p>
                <p className="me-2 mb-0">{courseUnits} units</p>
                <button
                  className="it-btn text-align-center"
                  onClick={() => {
                    registerModule(module);
                  }}
                >
                  <Add />
                </button>
              </div>
            );
          })}
        </CardContent>
      )}
      <CardContent>
        <h5>Registered Modules</h5>
        <div>
          {registeredModules.length > 0 ? (
            <div>
              {registeredModules.map((module) => {
                const { name, courseCode, courseUnits, id } = module;
                return (
                  <div
                    key={id}
                    className="mb-4 d-flex flex-wrap w-75 justify-content-between align-items-center"
                  >
                    <p className="me-2 mb-0">{name}</p>
                    <p className="me-2 mb-0">{courseCode}</p>
                    <p className="me-2 mb-0">{courseUnits} units</p>
                    <button
                      className="it-btn text-align-center"
                      onClick={() => {unRegister(module)} }
                    >
                      <Remove />
                    </button>
                  </div>
                );
              })}
            </div>
          ) : (
            <div>
              <p>No registered courses</p>
            </div>
          )}
        </div>
        <button onClick={() => router.push('courses/courseregistrationform')} className="it-btn">
          Show Registration Form
        </button>
      </CardContent>
    </Card>
  );
}
