import React from "react";
import Dash from "../../../src/components/Dashboard/AdminDashboard";
import AdminLayout from "../../../src/components/Dashboard/AdminLayout";
import Dashboard from "../../../src/components/Dashboard/AdminDashboard";

const index = () => {
  //   to retrieve username
  // const { signupData } = useSelector((state: RootState) => state.loginAdmin);

  return (
    <AdminLayout>
      <Dashboard />
    </AdminLayout>
  );
};

export default index;
