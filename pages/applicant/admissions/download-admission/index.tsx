import React from "react";
import Layout from "../../../../src/components/Dashboard/Layout";
import AdmissionLetter from "../../../../src/modules/Applicant/Dashboard/DownloadAdmission/DownloadAdmission";

const index = () => {
  return (
    <Layout>
      <AdmissionLetter />
    </Layout>
  );
};

export default index;
