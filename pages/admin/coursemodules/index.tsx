import React from "react";
import AdminLayout from "../../../src/components/Dashboard/Admin/AdminLayout"; 
import { RootState } from "../../../src/Globals/store/store";
import { useSelector } from "react-redux";
import CourseModules from "../../../src/components/Dashboard/Admin/CourseModules";

const index = () => {
    const { username } = (useSelector((state: RootState) => state.loginAdmin.signupData) || {});
  return (
    <AdminLayout username={username}>
        <CourseModules/>
    </AdminLayout>
  );
};

export default index;
