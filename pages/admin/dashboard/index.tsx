import React from "react";
import Dash from "../../../src/components/Dashboard/AdminDashboard";
import AdminLayout from "../../../src/components/Dashboard/AdminLayout";

const index = () => {
  //   to retrieve username
  // const { signupData } = useSelector((state: RootState) => state.loginAdmin);

  return (
    <AdminLayout>
      <Dash />
    </AdminLayout>
  );
};

export default index;
