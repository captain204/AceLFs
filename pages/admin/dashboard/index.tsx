import React from "react";
<<<<<<< HEAD

import Dash from "../../../src/components/Dashboard/Admin/AdminDashboard";
import AdminLayout from "../../../src/components/Dashboard/Admin/AdminLayout";
import { useSelector } from "react-redux";
import { RootState } from "../../../src/Globals/store/store";


const index = () => {
  //   to retrieve username
  const { username } = (useSelector((state: RootState) => state.loginAdmin.signupData) || {});// Destructure the username from the signupData object
=======
import Dash from "../../../src/components/Dashboard/AdminDashboard";
import AdminLayout from "../../../src/components/Dashboard/AdminLayout";

const index = () => {
  //   to retrieve username
  // const { signupData } = useSelector((state: RootState) => state.loginAdmin);

>>>>>>> 1a773322d4179ea2a42d5e97c7c0bd953fef62f0
  return (
    <AdminLayout>
      <Dash />
    </AdminLayout>
  );
};

export default index;
