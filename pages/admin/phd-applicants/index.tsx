import React from "react";
import AdminLayout from "../../../src/components/Dashboard/AdminLayout";
import PHDApplicantsTable from "../../../src/modules/Admin/ApplicantsPhd/PhdApplicantsTable";

const index = () => {
  return (
    <AdminLayout>
      <PHDApplicantsTable />
    </AdminLayout>
  );
};

export default index;