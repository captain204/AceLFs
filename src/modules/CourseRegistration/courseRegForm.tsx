import { useEffect, useState, useRef } from "react";
import axiosInstance from "../../Globals/Interceptor";
import styles from "./courseRegForm.module.css";
import { Card, AppBar, Toolbar, CardContent } from "@mui/material";
import { Download } from "@mui/icons-material";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

interface Program {
  courseName: string;
  degree: string;
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

export const CourseRegForm = () => {
  const componentRef = useRef();
  const [course, setCourse] = useState<Program>();
  const [modules, setModules] = useState([]);
  const [regModules, setRegModules] = useState([]);
  const [courseRegs, setCourseRegs] = useState([]);
  const [student, setStudent] = useState<Student>({
    applicantID: "",
    uuid: "",
    firstName: "",
    surName: "",
    otherNames: "",
    dateofBirth: "",
    gender: "",
    marital_status: "",
    religion: "",
    nationality: "",
    state: "",
    lga: "",
    contactAddress: "",
    phoneNumber: "",
    physicalChallenge: "",
    regNumber: "",
    user: null,
    applicationType: null,
    choiceofCourse: null,
  });
  const getCourseRegs = async () => {
    console.log(modules)
    await axiosInstance
      .get("http://localhost:8000/api/v1/coursemoduleregister")
      .then(({ data }) => {
        setRegModules(modules.filter((module) =>
          data.some((reg) => module.id === reg.course)
        ))
      })
      .catch((error) => console.error(error));
  };


  const getModules = async () => {
    await axiosInstance
      .get("http://localhost:8000/api/v1/coursemodule")
      .then(({ data }) => {
        setModules(
          data.filter((module) => module.course === student.choiceofCourse)
        );
      })
      .catch((error) => console.error(error));
  };
  const getCourse = async (id) => {
    await axiosInstance
      .get(`http://localhost:8000/api/v1/program/degreecourse/${id}`)
      .then(({ data }) => {
        setCourse({
          courseName: data?.CourseName,
          degree: data?.degreeType?.name,
        });
      })
      .catch((error) => console.error(error));
  };
  const getUser = async () => {
    await axiosInstance
      .get("http://localhost:8000/api/v1/admissions/students/me/")
      .then(({ data }) => {
        const response = data[0];
        setStudent(response);
      });
  };
  const downloadForm = () => {
    const input = componentRef.current;
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL("form/png");
        const pdf = new jsPDF("p", "mm", "a4");
        pdf.addImage(imgData, "PNG", 0, 0, 210, 279);
        pdf.save("ACEDHARS Course Form.pdf");
      })
      .catch((err) => {
        console.error("Error generating PDF:", err);
      });
  };
  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    if (student.choiceofCourse) {
      getCourse(student.choiceofCourse);
    }
    getModules();
  }, [student]);

  useEffect(() => {
    getCourseRegs()
  }, [modules])
  return (
    <Card>
      <CardContent  className="h-100">
        <Toolbar>
          <button style={{ marginRight: 10 }} onClick={() => downloadForm()}>
            <Download fontSize="large"/>
          </button>
        </Toolbar>
      <div ref={componentRef} className={styles.courseregform}>
        <div className="py-2">
          <div className={`${styles.regformheader} d-flex p-5`}>
            <img src="/img/logo/acf-logo.png" />
            <h4 className="text-center">
              African Centre of Excellence for Drug Research, Herbal Medicine
              Development and Regulatory Science
            </h4>
          </div>
          <h5 className="text-center w-50 m-auto">
            <u>Course Registration Form</u>
          </h5>
          <table className={`w-75 text-center ${styles.personalinfotable}`}>
            <thead>
              <tr>
                <th>Name</th>
                <th>ID</th>
                <th>Program</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {student.firstName} {student.otherNames} {student.surName}
                </td>
                <td>{student.regNumber}</td>
                <td>{course?.degree} </td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <th>Course</th>
                <th>Phone</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{course?.courseName}</td>
                <td>{student.phoneNumber}</td>
                <td>
                  {student.contactAddress},{student.lga},{student.state}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={`${styles.modulesinfo}`}>
          {/* <h4 className="text-center">Semester: {semester} </h4> */}
          <table className="table justify-content-center text-center border">
            <thead>
              <tr className="border-bottom border-5 h-100 ">
                <th className="h5 border-1 border">SN</th>
                <th className="h5">Course Code</th>
                <th className="h5">Title</th>
                <th className="h5">Credits</th>
              </tr>
            </thead>
            <tbody>
              {regModules.map(({ name, courseUnits, courseCode }, idx) => (
                <tr key={idx} className="border-bottom">
                  <td className="border col-1">{idx + 1}</td>
                  <td>{courseCode}</td>
                  <td>{name}</td>
                  <td>{courseUnits}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className={styles.signatures}>
          <div>
            <p className=" text-center w-100 border-top border-1 border-dark">
              Student signature
            </p>
            <p className="text-center">Date</p>
          </div>
          <div>
            <p className=" text-center w-100 border-top border-1 border-dark">
              Course Advisor
            </p>
            <p className="text-center">Date</p>
          </div>
        </div>
      </div>
      </CardContent>
    </Card>
  );
};

export default CourseRegForm;
