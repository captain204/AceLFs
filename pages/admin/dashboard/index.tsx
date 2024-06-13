import React from "react";

import Dash from "../../../src/components/Dashboard/Admin/AdminDashboard";
import AdminLayout from "../../../src/components/Dashboard/Admin/AdminLayout";
import { useSelector } from "react-redux";
import { RootState } from "../../../src/Globals/store/store";


const index = () => {
  //   to retrieve username
  const { username } = (useSelector((state: RootState) => state.loginAdmin.signupData) || {});// Destructure the username from the signupData object
  return (
    <AdminLayout username={username}>
      <Dash username={username}/>
    </AdminLayout>
  );
};

export default index;
