import { useEffect, useState, useRef } from "react";
import axiosInstance from "../../Globals/Interceptor";
import styles from "./courseRegForm.module.css";


interface Program {
  programName: string;
  degree: string;
}
const CourseRegForm = ({student, courses, semester, componentRef}) => {
  const {firstName, surName, otherNames, applicantID, phoneNumber, contactAddress, lga, state} = student
  const [course, setCourse] = useState<Program>()

  const getCourse = async (id) => {
    await axiosInstance
      .get(`http://localhost:8000/api/v1/program/degreecourse/${id}`)
      .then(({ data }) =>
        setCourse({
          programName: data?.CourseName,
          degree: data?.degreeType?.name,
        })
      )
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    getCourse(student.choiceofCourse)
  }, [])
  return (
    <div ref={componentRef}>
      <div className="py-2">
        <div className="header m-2">
          <img src="/img/logo/acf-logo.png"/>
        </div>
        <h4 className="text-center">Course Registration Form</h4>
          <table className={`w-75 ${styles.personalinfotable}`}>
            <tr>
              <th>Name</th>
              <th>ID</th>
              <th>Degree</th>
            </tr>
            <tr>
              <td>
                {firstName} {otherNames} {surName}
              </td>
              <td>{student.applicantID}</td>
              <td>{course?.programName} </td>
            </tr>
            <tr>
              <th>Course</th>
              <th>Phone</th>
              <th>Address</th>
            </tr>
            <tr>
            <td>
                {course?.programName}
              </td>
              <td>{phoneNumber}</td>
              <td>{contactAddress},{lga},{state}</td>
            </tr>
          </table>
      </div>
      <div className={`${styles.modulesinfo}`}>
      <h4 className="text-center">Semester: {semester} </h4>
        <table className="table w- justify-content-center text-center px-5">
          <thead>
          <tr className="border-bottom border-5 h-100 ">
            <th className="h5">Course</th>
            <th className="h5">Course Code</th>
            <th className="h5">Credits</th>
          </tr>
          </thead>
          <tbody>
          {
            courses.map(({name, courseUnits, courseCode}, idx) => (
              <tr key={idx} className="border-bottom">
              <td>{name}</td>
              <td>{courseCode}</td>
              <td>{courseUnits}</td>
            </tr>
            ))
          }
          </tbody>
        </table>
      </div>

      <div className={styles.signatures}>
        <div>
            <p className=" text-center w-100 border-top border-1 border-dark">Student signature</p>
            <p className="text-center">Date</p>
        </div>
        <div>
            <p className=" text-center w-100 border-top border-1 border-dark">Course Advisor</p>
            <p  className="text-center">Date</p>
        </div>
      </div>
    </div>
  );
};

export default CourseRegForm;
