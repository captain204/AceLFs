import { useEffect, useState, useRef } from "react";
import axiosInstance from "../../Globals/Interceptor";
import styles from "./courseRegForm.module.css";


interface Program {
  courseName: string;
  degree: string;
}
const CourseRegForm = ({student, courses, semester, componentRef}) => {
  const {firstName, surName, otherNames, applicantID, phoneNumber, contactAddress, lga, state} = student
  const [course, setCourse] = useState<Program>()

  const getCourse = async (id) => {
    await axiosInstance
      .get(`http://localhost:8000/api/v1/program/degreecourse/${id}`)
      .then(({ data }) =>
      {  console.log(data)
        setCourse({
          courseName: data?.CourseName,
          degree: data?.degreeType?.name,
        })}
      )
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    getCourse(student.choiceofCourse)
  }, [])
  return (
    <div ref={componentRef} className={styles.courseregform}>
      <div className="py-2">
        <div className={`${styles.regformheader} d-flex p-5`}>
          <img src="/img/logo/acf-logo.png"/>
          <h4 className="text-center">African Centre of Excellence for Drug Research, Herbal Medicine Development and Regulatory Science</h4>
        </div>
        <h5 className="text-center w-50 m-auto"><u>Course Registration Form</u></h5>
          <table className={`w-75 text-center ${styles.personalinfotable}`}>
            <tr>
              <th>Name</th>
              <th>ID</th>
              <th>Program</th>
            </tr>
            <tr>
              <td>
                {firstName} {otherNames} {surName}
              </td>
              <td>{student.regNumber}</td>
              <td>{course?.degree} </td>
            </tr>
            <tr>
              <th>Course</th>
              <th>Phone</th>
              <th>Address</th>
            </tr>
            <tr>
            <td>
                {course?.courseName}
              </td>
              <td>{phoneNumber}</td>
              <td>{contactAddress},{lga},{state}</td>
            </tr>
          </table>
      </div>
      <div className={`${styles.modulesinfo}`}>
      <h4 className="text-center">Semester: {semester} </h4>
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
          {
            courses.map(({name, courseUnits, courseCode}, idx) => (
              <tr key={idx} className="border-bottom">
                <td className="border col-1">{idx+1}</td>
              <td>{courseCode}</td>
              <td>{name}</td>
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
