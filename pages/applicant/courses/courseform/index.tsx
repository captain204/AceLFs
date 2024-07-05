import React from "react";
import Layout from "../../../../src/components/Dashboard/Layout";
import {CourseRegForm} from "../../../../src/modules/CourseRegistration/courseRegForm";

const index = () => {
  return (
    <Layout>
        <CourseRegForm />
    </Layout>
  );
};

export default index;
