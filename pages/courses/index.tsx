import React from "react";
import Layout from "../../src/components/Dashboard/Layout";
import CoursesForm from "../../src/components/CourseRegistration/moduleRegistration"; 

const index = () => {
  return (
    <Layout>
        <CoursesForm/>
    </Layout>
  );
};

export default index;
