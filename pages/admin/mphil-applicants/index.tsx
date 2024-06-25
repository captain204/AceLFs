import React from "react";
import AdminLayout from "../../../src/components/Dashboard/AdminLayout";
import MphilApplicantsTable from "../../../src/modules/Admin/ApplicantsMphil/MphilApplicantsTable";

const index = () => {
  return (
    <AdminLayout>
      <MphilApplicantsTable />
    </AdminLayout>
  );
};

export default index;