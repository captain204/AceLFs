import React from "react";
import Dash from "../../../src/components/Dashboard/Admin/AdminDashboard";
import AdminLayout from "../../../src/components/Dashboard/Admin/AdminLayout";

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
