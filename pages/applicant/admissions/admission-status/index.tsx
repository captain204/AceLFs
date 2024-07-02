import React from "react";
import Layout from "../../../../src/components/Dashboard/Layout";

import AdmissionStatusCard from "../../../../src/modules/Applicant/Dashboard/Admission/AdmissionStatus/AdmissionStatus";

const index = () => {
  return (
    <Layout>
      <AdmissionStatusCard />
    </Layout>
  );
};

export default index;
