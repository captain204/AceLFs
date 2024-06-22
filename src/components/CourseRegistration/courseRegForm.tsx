import { useEffect, useState } from "react";
import axiosInstance from "../../Globals/Interceptor";
import styles from "./courseRegForm.module.css";

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
interface Course {
  courseName: string;
  degree: string;
}
const CourseRegForm = () => {
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
  const [course, setCourse] = useState<Course>();

  const getUser = async () => {
    await axiosInstance
      .get("http://localhost:8000/api/v1/admissions/students/me/")
      .then(({ data }) => setStudent(data))
      .catch((error) => console.error(error));
  };

  const getCourse = async (id) => {
    await axiosInstance
      .get(`http://localhost:8000/api/v1/program/degreecourse/${id}`)
      .then(({ data }) =>
        setCourse({
          courseName: data?.CourseName,
          degree: data?.degreeType?.name,
        })
      )
      .then(() => console.log(course));
  };
  useEffect(() => {
    getUser();
  }, []);
  useEffect(() => {
    getCourse(student.choiceofCourse);
  }, [student]);
  return (
    <>
      <div className="py-2">
        <h4 className="text-center">Course Registration</h4>
          <table className={`${styles.personalinforow}`}>
            <tr>
              <th>Name</th>
              <th>ID</th>
              <th>Degree</th>
            </tr>
            <tr>
              <td>
                {student.firstName} {student.otherNames} {student.surName}
              </td>
              <td>{student.applicantID}</td>
              <td>{course.degree} </td>
            </tr>
            <tr>
              <th>Course</th>
              <th>Phone</th>
              <th>Address</th>
            </tr>
            <tr>
            <td>
                {course.courseName}
              </td>
              <td>{student.phoneNumber}</td>
              <td>{student.contactAddress},{student.lga},{student.state}</td>
            </tr>
          </table>
      </div>
      <div className={`mx-5 ${styles.modulesinfo}`}>
      <h5>Semester: 3</h5>
        <table className="w-100 justify-content-between">
          <tr>
            <th>Course</th>
            <th>Course Title</th>
            <th>Credits</th>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default CourseRegForm;
