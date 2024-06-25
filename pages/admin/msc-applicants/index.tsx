import React from "react";
import AdminLayout from "../../../src/components/Dashboard/AdminLayout";
import MSCApplicantsTable from "../../../src/modules/Admin/ApplicantsMsc/MscApplicantsTable";

const index = () => {
  return (
    <AdminLayout>
      <MSCApplicantsTable />
    </AdminLayout>
  );
};

export default index;