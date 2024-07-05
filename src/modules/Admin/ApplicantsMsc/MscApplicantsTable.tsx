import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import DataTable from "react-data-table-component";
import jsPDF from "jspdf";
import "jspdf-autotable";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  IconButton,
  Tooltip,
  DialogTitle,
  DialogContent,
  Dialog,
  DialogContentText,
  DialogActions,
  Button,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Box,
  useMediaQuery,
} from "@mui/material";
import { ThunkDispatch, UnknownAction } from "@reduxjs/toolkit";
import { RootState } from "../../../Globals/store/store";
import { useDispatch, useSelector } from "react-redux";
import { getAllApplicants } from "../../../Globals/Slices/AdminSlices/ApplicantsSlice";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import DownloadIcon from "@mui/icons-material/Download";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { approveAdmission } from "../../../Globals/Slices/AdminSlices/ApproveAdmission";
import { getStudentUploads } from "../../../Globals/Slices/ApplicantsSlices/ApplicantsMoreDetail/StudentUpload";
import { getReferee } from "../../../Globals/Slices/ApplicantsSlices/ApplicantsMoreDetail/Refeeree";
import { getApplicantInformation } from "../../../Globals/Slices/ApplicantsSlices/ApplicantsMoreDetail/personal";
import { getEmergencyContact } from "../../../Globals/Slices/ApplicantsSlices/ApplicantsMoreDetail/EmmergencySlice";
import { getDegreeTypeApplicants } from "../../../Globals/Slices/AdminSlices/DegreeTypeApplicants";

type AppDispatch = ThunkDispatch<RootState, unknown, UnknownAction>;
const NoSSRTable = dynamic(() => Promise.resolve(ClientSideTable), {
  ssr: false,
});

function ClientSideTable() {
  const [isClient, setIsClient] = useState(false);
  const [openApproveModal, setOpenApproveModal] = useState(false);
  const [openDetailsModal, setOpenDetailsModal] = useState(false);
  const [currentApplicant, setCurrentApplicant] = useState<any>({
    id: null,
    fullName: "",
    is_admitted: false,
  });
  const dispatch: AppDispatch = useDispatch();
  const loading = useSelector((state: RootState) => state?.applicants?.loading);
  // const applicants =
  //   useSelector((state: RootState) => state?.applicants?.applicants) || [];

  const applicantdetailinfo =
    useSelector((state: RootState) => state?.applicantPersonal?.personal) || [];

  const applicantreferee =
    useSelector((state: RootState) => state?.applicantReferee?.referee) || [];

  const applicantemergency =
    useSelector((state: RootState) => state?.applicantEmmergency?.econtact) ||
    [];

  const applicantuploads =
    useSelector((state: RootState) => state?.applicantUploads?.uploads) || [];

  const applicants =
    useSelector(
      (state: RootState) => state?.degreetypeapplicants?.applicants
    ) || [];
  const degrees = useSelector((state: RootState) => state?.degrees?.degrees);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    dispatch(getDegreeTypeApplicants(1));
  }, [dispatch]);

  const handleApprove = async (id: any, is_admitted: boolean) => {
    console.log(`Approving applicant with ID ${id}`);
    await dispatch(approveAdmission({ applicantId: id, is_admitted }));
  };

  const handleCloseApproveModal = () => {
    setOpenApproveModal(false);
    setCurrentApplicant({
      id: null,
      fullName: "",
      is_admitted: false,
    });
  };

  const handleCloseDetailsModal = () => {
    setOpenDetailsModal(false);
  };

  const handleOpenDetailsModal = (applicant: any) => {
    const fullName = `${applicant.firstName} ${applicant.surName} ${applicant.otherNames}`;
    setCurrentApplicant({ ...applicant, fullName });

    Promise.all([
      dispatch(getApplicantInformation(applicant.id)),
      dispatch(getEmergencyContact(applicant.id)),
      dispatch(getReferee(applicant.id)),
      dispatch(getStudentUploads(applicant.id)),
    ]).then(() => {
      setOpenDetailsModal(true);
    });
  };

  const handleConfirm = async () => {
    if (currentApplicant.id !== null) {
      await handleApprove(currentApplicant.id, currentApplicant.is_admitted);
    }
    handleCloseApproveModal();
    dispatch(getAllApplicants());
  };

  const handleOpenApproveModal = (applicant: any) => {
    const fullName = `${applicant.firstName} ${applicant.surName} ${applicant.otherNames}`;
    setCurrentApplicant({ ...applicant, fullName });
    setOpenApproveModal(true);
  };

  // const handleOpenDetailsModal = (applicant: any) => {
  //   const fullName = `${applicant.firstName} ${applicant.surName} ${applicant.otherNames}`;
  //   setCurrentApplicant({ ...applicant, fullName });
  //   setOpenDetailsModal(true);
  // };

  const columns = [
    {
      name: "ID",
      selector: (row: any) => row?.id,
      sortable: true,
      width: "65px",
    },
    {
      name: "Approval",
      cell: (row: any) =>
        row.is_admitted ? (
          <Tooltip title="Approved" placement="top">
            <IconButton
              style={{ color: "#0AB99D" }}
              aria-label="approved"
              // onClick={() => handleOpenApproveModal(row)}
            >
              <CheckCircleOutlineIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Not Approved" placement="top">
            <IconButton
              style={{ color: "red" }}
              aria-label="not-approved"
              onClick={() => handleOpenApproveModal(row)}
            >
              <HighlightOffIcon />
            </IconButton>
          </Tooltip>
        ),
      // button: true,
    },

    {
      name: "View",
      cell: (row: any) => (
        <Tooltip title="View Details" placement="top">
          <IconButton
            style={{ color: "#0AB99D" }}
            aria-label="view"
            onClick={() => handleOpenDetailsModal(row)}
          >
            <VisibilityIcon />
          </IconButton>
        </Tooltip>
      ),
      // button: true,
    },
    {
      name: "Full Name",
      selector: (row: any) =>
        `${row?.firstName} ${row?.surName} ${row?.otherNames}`,
      sortable: true,
      width: "220px",
    },
    {
      name: "Reg Number",
      selector: (row: any) => row?.regNumber,
      sortable: true,
      width: "250px",
    },
    {
      name: "Degree",
      selector: (row: any) => row?.applicationType?.name,
      sortable: true,
      width: "250px",
    },
    {
      name: "Course",
      selector: (row: any) => row?.choiceofCourse?.CourseName,
      sortable: true,
      width: "150px",
    },
    {
      name: "Gender",
      selector: (row: any) => row?.gender_display,
      sortable: true,
    },
    {
      name: "State",
      selector: (row: any) => row?.state,
      sortable: true,
    },
  ];

  const [data, setData] = useState(applicants);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setData(applicants);
  }, [applicants]);

  const handleSearch = (e: any) => {
    setSearchTerm(e.target.value);
    const filteredData = applicants.filter((applicant: any) =>
      Object.values(applicant).some(
        (value) =>
          typeof value === "string" &&
          value.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
    setData(filteredData);
  };

  const isMobile = useMediaQuery("(max-width:600px)");

  const exportPDF = () => {
    const doc = new jsPDF();
    doc.text("MSC Applicants", 14, 20);
    (doc as any).autoTable({
      head: [columns.map((col: any) => col.name)],
      body: data.map((row: any) =>
        columns.map((col: any) => {
          const value = col.selector ? col.selector(row) : "";
          return value ? value.toString() : "";
        })
      ),
      startY: 30,
    });
    doc.save("MSC-applicants.pdf");
  };

  if (!isClient) {
    return null;
  }

  return (
    <Card raised={true}>
      <CardContent>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="h5"
            component="div"
            gutterBottom
            sx={{ color: "#0AB99D" }}
          >
            MSC Applicants 
          </Typography>

          <Button
            variant="contained"
            color="success"
            onClick={exportPDF}
            startIcon={<DownloadIcon />}
            style={{ marginBottom: "1rem" }}
          >
            Export as PDF
          </Button>
        </div>
        <TextField
          label="Search"
          variant="outlined"
          size="small"
          fullWidth
          onChange={handleSearch}
          value={searchTerm}
          style={{ marginBottom: "1rem" }}
          color="success"
        />

        <DataTable
          columns={columns}
          data={data}
          fixedHeader
          pagination
          highlightOnHover
          pointerOnHover
          progressPending={loading}
          striped
        />
      </CardContent>

      <Dialog
        open={openApproveModal}
        onClose={handleCloseApproveModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {currentApplicant?.is_admitted
            ? "Unapprove Admission"
            : "Approve Admission"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {currentApplicant && (
              <Typography variant="body1">
                {currentApplicant.is_admitted ? (
                  <span>
                    Are you sure you want to unapprove{" "}
                    <span style={{ color: "#0AB99D" }}>
                      {currentApplicant.fullName}
                    </span>
                    's admission?
                  </span>
                ) : (
                  <span>
                    Are you sure you want to approve{" "}
                    <span style={{ color: "#0AB99D" }}>
                      {currentApplicant.fullName}
                    </span>
                    's admission?
                  </span>
                )}
              </Typography>
            )}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseApproveModal} style={{ color: "red" }}>
            Cancel
          </Button>
          <Button
            onClick={handleConfirm}
            color="success"
            autoFocus
            style={{ color: "#0AB99D" }}
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={openDetailsModal}
        onClose={handleCloseDetailsModal}
        aria-labelledby="applicant-details-title"
        aria-describedby="applicant-details-description"
        maxWidth="md"
        fullWidth
      >
        <DialogTitle
          id="applicant-details-title"
          style={{
            display: "flex",
            justifyContent: "center",
            // color: "#5Ac88e",
          }}
        >
          {currentApplicant.fullName}
        </DialogTitle>
        <DialogContent>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginBottom: "1rem",
            }}
          >
            <img
              src={applicantuploads?.studentImage}
              alt="Student"
              style={{
                width: "150px",
                height: "150px",
                border: "5px solid #0AB99D",
              }}
            />
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
              gap: "16px",
            }}
          >
            <Box
              sx={{
                border: "1px solid #0AB99D",
                borderRadius: "8px",
                padding: "16px",
              }}
            >
              <Typography
                variant="subtitle1"
                gutterBottom
                style={{ color: "#0AB99D" }}
              >
                Referee Information
              </Typography>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>Referee Name</TableCell>
                    <TableCell>
                      {applicantreferee?.firstname} {applicantreferee?.lastname}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Referee Email</TableCell>
                    <TableCell>{applicantreferee?.email}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>contact Address</TableCell>
                    <TableCell>{applicantreferee?.contactAddress}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Referee Phone</TableCell>
                    <TableCell>{applicantreferee?.phoneNumber}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>

            <Box
              sx={{
                border: "1px solid #0AB99D",
                borderRadius: "8px",
                padding: "16px",
              }}
            >
              <Typography
                variant="subtitle1"
                gutterBottom
                style={{ color: "#0AB99D" }}
              >
                Emergency Contact
              </Typography>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>Contact Name</TableCell>
                    <TableCell>
                      {applicantemergency?.firstname}{" "}
                      {applicantemergency?.lastname}
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Contact Phone</TableCell>
                    <TableCell>{applicantemergency?.phoneNumber}</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Email</TableCell>
                    <TableCell>{applicantemergency?.email}</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Contact Address</TableCell>
                    <TableCell>{applicantemergency?.contactAddress}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>

            <Box
              sx={{
                border: "1px solid #0AB99D",
                borderRadius: "8px",
                padding: "16px",
              }}
            >
              <Typography
                variant="subtitle1"
                gutterBottom
                style={{ color: "#0AB99D" }}
              >
                Personal Information
              </Typography>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>Gender</TableCell>
                    <TableCell>{applicantdetailinfo?.gender_display}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>State</TableCell>
                    <TableCell>{applicantdetailinfo?.state}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Reg Number</TableCell>
                    <TableCell>{applicantdetailinfo?.regNumber}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Degree</TableCell>
                    <TableCell>
                      {applicantdetailinfo?.applicationType?.name}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Course</TableCell>
                    <TableCell>
                      {applicantdetailinfo?.choiceofCourse?.CourseName}
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Religion</TableCell>
                    <TableCell>
                      {applicantdetailinfo?.religion_display}
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Phone Number</TableCell>
                    <TableCell> {applicantdetailinfo?.phoneNumber} </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Contact Address</TableCell>
                    <TableCell>
                      {" "}
                      {applicantdetailinfo?.contactAddress}{" "}
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Marita Status</TableCell>
                    <TableCell>
                      {applicantdetailinfo?.marital_status_display}
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Physical Challenge</TableCell>
                    <TableCell>
                      {applicantdetailinfo?.physicalChallenge_display}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>

            <Box
              sx={{
                border: "1px solid #0AB99D",
                borderRadius: "8px",
                padding: "16px",
              }}
            >
              <Typography variant="subtitle1" gutterBottom>
                Downloads
              </Typography>

              {applicantuploads?.IdentityImage && (
                <a
                  href={applicantuploads?.IdentityImage}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    variant="contained"
                    color="success"
                    startIcon={<DownloadIcon />}
                    style={{ marginBottom: "8px" }}
                  >
                    Download Identity Image
                  </Button>
                </a>
              )}

              {applicantuploads?.birthCertificate && (
                <a
                  href={applicantuploads?.birthCertificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    variant="contained"
                    color="success"
                    startIcon={<DownloadIcon />}
                    style={{ marginBottom: "8px" }}
                  >
                    Birth Certificate
                  </Button>
                </a>
              )}

              {applicantuploads?.firstDegree && (
                <a
                  href={applicantuploads?.firstDegree}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    variant="contained"
                    color="success"
                    startIcon={<DownloadIcon />}
                    style={{ marginBottom: "8px" }}
                  >
                    First Degree
                  </Button>
                </a>
              )}

              {applicantuploads?.mastersDegree && (
                <a
                  href={applicantuploads?.mastersDegree}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    variant="contained"
                    color="success"
                    startIcon={<DownloadIcon />}
                    style={{ marginBottom: "8px" }}
                  >
                    Master Degree
                  </Button>
                </a>
              )}

              {applicantuploads?.studentNysc && (
                <a
                  href={applicantuploads?.studentNysc}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    variant="contained"
                    color="success"
                    startIcon={<DownloadIcon />}
                    style={{ marginBottom: "8px" }}
                  >
                    NYSC Certificate
                  </Button>
                </a>
              )}

              {applicantuploads?.otherCertificate && (
                <a
                  href={applicantuploads?.otherCertificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    variant="contained"
                    color="success"
                    startIcon={<DownloadIcon />}
                    style={{ marginBottom: "8px" }}
                  >
                    Other Certificate
                  </Button>
                </a>
              )}

              {applicantuploads?.phdProposal && (
                <a
                  href={applicantuploads?.phdProposal}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    variant="contained"
                    color="success"
                    startIcon={<DownloadIcon />}
                    style={{ marginBottom: "8px" }}
                  >
                    PHD Proposal
                  </Button>
                </a>
              )}

              {applicantuploads?.postGraduateDiploma && (
                <a
                  href={applicantuploads?.postGraduateDiploma}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    variant="contained"
                    color="success"
                    startIcon={<DownloadIcon />}
                    style={{ marginBottom: "8px" }}
                  >
                    PostGraduate Diploma
                  </Button>
                </a>
              )}

              {applicantuploads?.resume && (
                <a
                  href={applicantuploads?.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    variant="contained"
                    color="success"
                    startIcon={<DownloadIcon />}
                    style={{ marginBottom: "8px" }}
                  >
                    Resume
                  </Button>
                </a>
              )}

              {applicantuploads?.transcript && (
                <a
                  href={applicantuploads?.transcript}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    variant="contained"
                    color="success"
                    startIcon={<DownloadIcon />}
                    style={{ marginBottom: "8px" }}
                  >
                    Transcript
                  </Button>
                </a>
              )}

              {applicantuploads?.nceCertificate && (
                <a
                  href={applicantuploads?.nceCertificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    variant="contained"
                    color="success"
                    startIcon={<DownloadIcon />}
                    style={{ marginBottom: "8px" }}
                  >
                    NCE Certificate
                  </Button>
                </a>
              )}
            </Box>
          </div>
        </DialogContent>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "16px",
          }}
        >
          {!currentApplicant.is_admitted ? (
            <Button
              variant="contained"
              color="success"
              onClick={() => handleOpenApproveModal(currentApplicant)}
            >
              Approve Admission
            </Button>
          ) : (
            <Button
              variant="contained"
              color="error"
              onClick={() => handleOpenApproveModal(currentApplicant)}
            >
              Unapprove Admission
            </Button>
          )}
        </Box>

        <DialogActions>
          <Button onClick={handleCloseDetailsModal} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
}

export default function MSCApplicantsTable() {
  return (
    <div>
      <NoSSRTable />
    </div>
  );
}
