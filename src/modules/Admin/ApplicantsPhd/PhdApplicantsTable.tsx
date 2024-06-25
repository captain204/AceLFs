import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import DataTable from "react-data-table-component";
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
} from "@mui/material";
import { ThunkDispatch, UnknownAction } from "@reduxjs/toolkit";
import { RootState } from "../../../Globals/store/store";
import { useDispatch, useSelector } from "react-redux";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { approveAdmission } from "../../../Globals/Slices/AdminSlices/ApproveAdmission";
import { getDegreeTypeApplicants } from "../../../Globals/Slices/AdminSlices/DegreeTypeApplicants";
import { getAllDegrees } from "../../../Globals/Slices/Degree/DegreesSlice";
import jsPDF from "jspdf";
import "jspdf-autotable";
import DownloadIcon from "@mui/icons-material/Download"

type AppDispatch = ThunkDispatch<RootState, unknown, UnknownAction>;
const NoSSRTable = dynamic(() => Promise.resolve(ClientSideTable), {
  ssr: false,
});

function ClientSideTable() {
  const [isClient, setIsClient] = useState(false);
  const [open, setOpen] = useState(false);
  const [currentApplicant, setCurrentApplicant] = useState<any>({
    id: null,
    fullName: "",
    is_admitted: false,
  });
  const dispatch: AppDispatch = useDispatch();
  const loading = useSelector((state: RootState) => state?.applicants?.loading);

  const applicants =
    useSelector(
      (state: RootState) => state?.degreetypeapplicants?.applicants
    ) || [];
  const degrees = useSelector((state: RootState) => state?.degrees?.degrees);

  useEffect(() => {
    setIsClient(true);
    dispatch(getAllDegrees());
  }, []);

  const handleApprove = async (id: any, is_admitted: boolean) => {
    console.log(`Approving applicant with ID ${id}`);
    await dispatch(approveAdmission({ applicantId: id, is_admitted }));
  };

  const handleCloseModal = () => {
    setOpen(false);
    setCurrentApplicant({
      id: null,
      fullName: "",
      is_admitted: false,
    }); // Reset currentApplicant state when closing modal
  };

  const handleConfirm = async () => {
    if (currentApplicant.id !== null) {
      await handleApprove(currentApplicant.id, currentApplicant.is_admitted);
    }
    handleCloseModal();
    dispatch(getDegreeTypeApplicants("P.H.D"));
  };

  const handleOpenModal = (applicant: any) => {
    const fullName = `${applicant.firstName} ${applicant.surName} ${applicant.otherNames}`;
    setCurrentApplicant({ ...applicant, fullName });
    setOpen(true);
  };

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
              // onClick={() => handleOpenModal(row)}
            >
              <CheckCircleOutlineIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Not Approved" placement="top">
            <IconButton
              style={{ color: "red" }}
              aria-label="not-approved"
              onClick={() => handleOpenModal(row)}
            >
              <HighlightOffIcon />
            </IconButton>
          </Tooltip>
        ),
      button: true,
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
    // {
    //   name: "Nationality",
    //   selector: (row: any) => row?.nationality,
    //   sortable: true,
    // },
    {
      name: "State",
      selector: (row: any) => row?.state,
      sortable: true,
    },
    // {
    //   name: "LGA",
    //   selector: (row: any) => row?.lga,
    //   sortable: true,
    //   width: "150px",
    // },
    // {
    //   name: "Phone Number",
    //   selector: (row: any) => row?.phoneNumber,
    //   sortable: true,
    //   width: "150px",
    // },
    // {
    //   name: "Marital Status",
    //   selector: (row: any) => row?.marital_status_display,
    //   sortable: true,
    //   width: "150px",
    // },
    // {
    //   name: "Date of Birth",
    //   selector: (row: any) => row?.dateofBirth,
    //   sortable: true,
    //   width: "150px",
    // },
  ];

  const [data, setData] = useState(applicants);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setData(applicants);
  }, [applicants]);

  const handleSearch = (e: any) => {
    setSearchTerm(e.target.value);
    const filteredData = applicants.filter((applicant:any) =>
      Object.values(applicant).some(
        (value) =>
          typeof value === "string" &&
          value.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
    setData(filteredData);
  };

  const exportPDF = () => {
    const doc = new jsPDF();
    doc.text("PHD Applicants", 14, 20);
    (doc as any).autoTable({
      head: [columns.map((col) => col.name)],
      body: data.map((row: any) =>
        columns.map((col) => {
          const value = col.selector ? col.selector(row) : "";
          return value ? value.toString() : "";
        })
      ),

      
      startY: 30,
    });
    doc.save("PHD-applicants.pdf");
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
          P.H.D Applicants
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
        open={open}
        onClose={handleCloseModal}
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
          <Button onClick={handleCloseModal} style={{ color: "red" }}>
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
    </Card>
  );
}

const PHDApplicantsTable = () => {
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(getDegreeTypeApplicants("P.H.D"));
  }, [dispatch]);

  return (
    <div>
      <NoSSRTable />
    </div>
  );
};

export default PHDApplicantsTable;
