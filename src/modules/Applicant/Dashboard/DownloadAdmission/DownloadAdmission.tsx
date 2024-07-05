import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import { jsPDF } from "jspdf";
import { RootState } from "../../../../Globals/store/store";
import { useSelector } from "react-redux";

const AdmissionLetter = () => {
  const applicantstatusdisplay: any = useSelector((state: RootState) =>
    Array.isArray(state?.applicantStatus?.status)
      ? state.applicantStatus.status[0]
      : state.applicantStatus.status
  );

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFont("times", "normal");
    doc.setFontSize(12);

    const margin = 10;
    const lineHeight = 10;
    let cursorY = margin;

    // Heading
    doc.setFontSize(16);
    doc.setTextColor("#00008B");
    doc.text("ABUBAKAR TAFAWA BALEWA UNIVERSITY, (ATBU)", margin, cursorY);
    cursorY += lineHeight;
    doc.setFontSize(14);
    doc.text("BAUCHI", margin, cursorY);
    cursorY += lineHeight;
    doc.setFontSize(12);
    doc.text("P.M.B. 0248, Bauchi", margin, cursorY);
    cursorY += lineHeight;
    doc.text("(SCHOOL OF POSTGRADUATE STUDIES)", margin, cursorY);
    cursorY += lineHeight;
    doc.text("Website: www.pgatbu.com.ng", margin, cursorY);
    cursorY += lineHeight;
    doc.text("Email: pgsch@atbu.edu.ng", margin, cursorY);
    cursorY += lineHeight;
    doc.text(`Ref: ${applicantstatusdisplay?.regNumber}`, margin, cursorY);
    cursorY += lineHeight;
    doc.text("Date: 25-Jan-2022", margin, cursorY);
    cursorY += lineHeight * 2;

    // Letter body
    doc.setTextColor("#000000");
    doc.text(
      `Name of Student: ${
        applicantstatusdisplay?.firstName +
        " " +
        applicantstatusdisplay?.surName +
        "" +
        applicantstatusdisplay?.otherNames
      }`,
      margin,
      cursorY
    );
    cursorY += lineHeight;
    doc.text("Dear Sir/Madam,", margin, cursorY);
    cursorY += lineHeight * 2;

    doc.setFontSize(14);
    doc.setTextColor("#FF4500");
    doc.text(
      "PROVISIONAL ADMISSION INTO POSTGRADUATE PROGRAMME",
      margin,
      cursorY
    );
    cursorY += lineHeight * 2;

    doc.setFontSize(12);
    doc.setTextColor("#000000");

    const textBody = [
      "I am pleased to inform you that on the recommendation of the Board of the Postgraduate School and the approval of the University Senate, you have been offered provisional admission in the 2021/2022 Academic Session to pursue a Full-Time course leading to M.Sc. Management Information Technology.",
      "The course will normally last 24 – 30 Months. The programme will commence immediately. You are expected to register for your course not later than two (2) weeks from the date of commencement of the Academic Session.",
      "The offer is subject to the following conditions:-",
      "1. That the particulars provided in your application form are correct in every respect.",
      "2. That your former University/College has sent your academic transcript.",
      "3. That you will tender your original credentials for inspection at the time of registration.",
      "4. That you will pay at least 2/3 of the tuition fees at registration. The tuition fee is currently 145,500.00 for the first registration and subsequently 108,750.00 per session.",
      "5. You may be required to remedy some courses to be determined at the time of registration.",
      "6. School fees may be reviewed in due course.",
      "7. You will pay an acceptance fee of 5,000.",
      "8. You are also expected to satisfy other Faculty and Department requirements as they may apply.",
      "Please note that ALL Postgraduate Students registration is only complete upon payment of appropriate tuition and other fees. The University has limited accommodation on campus for postgraduate students offered on a first-come, first-served basis.",
      "The chairman and members of your supervisory team are: Dr. A.Y Gital (SL) & Dr. Umar Mua'zu (SL).",
      "If you accept the offer, please complete the attached acceptance form and forward the same to the undersigned no later than two (2) weeks from the date of this letter.",
      "Accept my congratulations.",
      "Mal. Muhammed Sabitu Adamu",
      "DR/Secretary, School of Postgraduate Studies",
    ];

    textBody.forEach((text, index) => {
      const lines = doc.splitTextToSize(text, 180);
      lines.forEach((line: any) => {
        doc.text(line, margin, cursorY);
        cursorY += lineHeight;
      });
      cursorY += index === 2 ? lineHeight : lineHeight * 0.5;
    });

    doc.save("admission_letter.pdf");
  };

  return (
    <Container>
      <Box
        sx={{
          padding: "20px",
          backgroundColor: "#f0f8ff",
          borderRadius: "8px",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          style={{ color: "#00008B", textAlign: "center" }}
        >
          ABUBAKAR TAFAWA BALEWA UNIVERSITY, (ATBU)
        </Typography>
        <Typography
          variant="h5"
          gutterBottom
          style={{ color: "#00008B", textAlign: "center" }}
        >
          BAUCHI
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          style={{ textAlign: "center" }}
        >
          P.M.B. 0248, Bauchi
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          style={{ textAlign: "center" }}
        >
          (SCHOOL OF POSTGRADUATE STUDIES)
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          style={{ textAlign: "center" }}
        >
          Website: www.pgatbu.com.ng | Email: pgsch@atbu.edu.ng
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          style={{ textAlign: "center" }}
        >
          Ref: {applicantstatusdisplay?.regNumber} | Date: 25-Jan-2022
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Name of Student:</strong> {applicantstatusdisplay?.firstName}{" "}
          {applicantstatusdisplay?.surName} {""}{" "}
          {applicantstatusdisplay?.otherNames}
        </Typography>
        <Typography variant="body1" paragraph>
          Dear Sir/Madam,
        </Typography>
        <Typography variant="h6" paragraph style={{ color: "#FF4500" }}>
          PROVISIONAL ADMISSION INTO POSTGRADUATE PROGRAMME
        </Typography>
        <Typography variant="body1" paragraph>
          I am pleased to inform you that on the recommendation of the Board of
          the Postgraduate School and the approval of the University Senate, you
          have been offered provisional admission in the 2021/2022 Academic
          Session to pursue a Full-Time course leading to M.Sc. Management
          Information Technology.
        </Typography>
        <Typography variant="body1" paragraph>
          The course will normally last 24 – 30 Months. The programme will
          commence immediately. You are expected to register for your course not
          later than two (2) weeks from the date of commencement of the Academic
          Session.
        </Typography>
        <Typography variant="body1" paragraph>
          The offer is subject to the following conditions:-
        </Typography>
        <Box component="ol" sx={{ paddingLeft: "20px" }}>
          <li>
            That the particulars provided in your application form are correct
            in every respect.
          </li>
          <li>
            That your former University/College has sent your academic
            transcript.
          </li>
          <li>
            That you will tender your original credentials for inspection at the
            time of registration.
          </li>
          <li>
            That you will pay at least 2/3 of the tuition fees at registration.
            The tuition fee is currently 145,500.00 for the first registration
            and subsequently 108,750.00 per session.
          </li>
          <li>
            You may be required to remedy some courses to be determined at the
            time of registration.
          </li>
          <li>School fees may be reviewed in due course.</li>
          <li>You will pay an acceptance fee of 5,000.</li>
          <li>
            You are also expected to satisfy other Faculty and Department
            requirements as they may apply.
          </li>
        </Box>
        <Typography variant="body1" paragraph>
          Please note that ALL Postgraduate Students registration is only
          complete upon payment of appropriate tuition and other fees. The
          University has limited accommodation on campus for postgraduate
          students offered on a first-come, first-served basis.
        </Typography>
        <Typography variant="body1" paragraph>
          The chairman and members of your supervisory team are: Dr. A.Y Gital
          (SL) & Dr. Umar Mua'zu (SL).
        </Typography>
        <Typography variant="body1" paragraph>
          If you accept the offer, please complete the attached acceptance form
          and forward the same to the undersigned no later than two (2) weeks
          from the date of this letter.
        </Typography>
        <Typography variant="body1" paragraph>
          Accept my congratulations.
        </Typography>
        <Typography variant="body1" paragraph>
          Mal. Muhammed Sabitu Adamu
          <br />
          DR/Secretary, School of Postgraduate Studies
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={generatePDF}
          style={{ marginTop: "20px" }}
        >
          Download Admission Letter
        </Button>
      </Box>
    </Container>
  );
};

export default AdmissionLetter;
