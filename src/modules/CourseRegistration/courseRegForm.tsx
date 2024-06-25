import { useEffect, useState } from "react";
import axiosInstance from "../../Globals/Interceptor";
import styles from "./courseRegForm.module.css";


interface Program {
  programName: string;
  degree: string;
}
const CourseRegForm = ({student, courses}) => {
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
            <th>Course Code</th>
            <th>Credits</th>
          </tr>
          {
            courses.map(({name, courseUnits, courseCode}) => (
              <tr>
              <td>{name}</td>
              <td>{courseCode}</td>
              <td>{courseUnits}</td>
            </tr>
            ))
          }

        </table>
      </div>
    </>
  );
};

export default CourseRegForm;
