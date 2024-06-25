import React from "react";
import AdminLayout from "../../../src/components/Dashboard/AdminLayout";
import ApplicantsTable from "../../../src/modules/Admin/Applicants/ApplicantsTable";

const index = () => {
  return (
    <AdminLayout>
      <ApplicantsTable />
    </AdminLayout>
  );
};

export default index;
