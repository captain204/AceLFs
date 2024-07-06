import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
  CssBaseline,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { CheckCircleOutline, ErrorOutline } from "@mui/icons-material";
import { green, red } from "@mui/material/colors";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../Globals/store/store";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4caf50",
    },
    secondary: {
      main: "#f44336",
    },
  },
});

const AdmissionStatusCard = () => {
  const [isApproved, setIsApproved] = useState(true);
  const applicantstatus: any = useSelector(
    (state: RootState) => state?.applicantStatus?.status
  );

  const applicantstatusdisplay: any = useSelector((state: RootState) =>
    Array.isArray(state?.applicantStatus?.status)
      ? state.applicantStatus.status[0]
      : state.applicantStatus.status
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Card
        sx={{
          width: "100%",
          maxWidth: 500,
          mx: "auto",
          mt: 5,
          p: 2,
          borderRadius: 3,
          boxShadow: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          bgcolor: applicantstatus?.is_admitted ? green[50] : red[50],
        }}
      >
        <CardContent>
          {applicantstatusdisplay?.is_admitted === true ? (
            <>
              <CheckCircleOutline
                sx={{ fontSize: 70, color: green[500], mb: 2 }}
              />
              <Typography
                variant="h4"
                component="div"
                color="text.primary"
                gutterBottom
              >
                Congratulations!
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Your admission has been approved.
              </Typography>
            </>
          ) : applicantstatusdisplay?.is_admitted === false ? (
            <>
              <ErrorOutline sx={{ fontSize: 70, color: red[500], mb: 2 }} />
              <Typography
                variant="h4"
                component="div"
                color="text.primary"
                gutterBottom
              >
                Notification
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Your admission has not been approved.
              </Typography>
            </>
          ) : (
            <>
              <ErrorOutline sx={{ fontSize: 70, color: red[500], mb: 2 }} />
              <Typography
                variant="h4"
                component="div"
                color="text.primary"
                gutterBottom
              >
                Notification
              </Typography>
              <Typography variant="body1" color="text.secondary">
                you have not yet registered
              </Typography>
            </>
          )}
        </CardContent>

        <CardActions>
          <Button
            size="large"
            color={applicantstatusdisplay?.is_admitted ? "primary" : "secondary"}
            variant="contained"
          >
            {applicantstatusdisplay?.is_admitted ? "View Details" : "Contact Support"}
          </Button>
        </CardActions>
      </Card>
    </ThemeProvider>
  );
};

export default AdmissionStatusCard;
