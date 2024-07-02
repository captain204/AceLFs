"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Card, CardContent } from "@mui/material";
import animationData from "../../../public/img/student3.json";
import Lottie from "react-lottie";
import { RootState } from "../../Globals/store/store";
import { useSelector } from "react-redux";
import { ThunkDispatch, UnknownAction } from "@reduxjs/toolkit";
import { format } from "date-fns";

const drawerWidth = 240;

// type AppDispatch = ThunkDispatch<RootState, unknown, UnknownAction>;

export default function ResponsiveDrawer() {
  const eachstudent = useSelector(
    (state: RootState) => state?.applicantStatus?.status
  );

  const user = useSelector((state: RootState) => state?.loggedInUser?.user);
  const currentDate = format(new Date(), "do MMMM, yyyy");


  const applicantstatus: any = useSelector(
    (state: RootState) => state?.applicantStatus?.status
  );

  // const applicantstatusdisplay: any = useSelector((state: RootState) =>
  //   Array.isArray(state?.applicantStatus?.status)
  //     ? state.applicantStatus.status[0]
  //     : state.applicantStatus.status
  // );

  // const uploads: any = useSelector((state: RootState) =>
  //   Array.isArray(state?.studentUploadsApplicant?.uploads)
  //     ? state.studentUploadsApplicant?.uploads[0]
  //     : state.studentUploadsApplicant?.uploads
  // );

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          // p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Box sx={{ width: "100%" }}>
          <Card
            sx={{
              bgcolor: "#0AB99D",
              color: "white",
              borderRadius: "10px",
              border: "1px solid #0AB99D",
            }}
            raised={true}
          >
            <CardContent
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ fontSize: "18px" }}
                >
                  {currentDate}
                </Typography>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{ marginTop: "20px" }}
                >
                  {applicantstatus != null ? " Welcome back" : "Welcome Onboard"}{" "}
                  {""}  
                { user?.username.toUpperCase()}!
                </Typography>
                <Typography variant="body1" sx={{ color: "white" }}>
                  Always stay updated in your student portal
                </Typography>
              </Box>
              <Box sx={{ marginLeft: "auto" }}>
                <Lottie options={defaultOptions} height={120} width={120} />
              </Box>
            </CardContent>
          </Card>
        </Box>

        {/* </motion.div> */}

        <Toolbar />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <Card raised={true} sx={{ width: { xs: "100%", sm: "48%" }, mb: 3 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                Undergraduate
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet.
              </Typography>
            </CardContent>
          </Card>
          <Card raised={true} sx={{ width: { xs: "100%", sm: "48%" }, mb: 3 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                Masters (Msc)
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Consectetur adipiscing elit.
              </Typography>
            </CardContent>
          </Card>
          <Card raised={true} sx={{ width: { xs: "100%", sm: "48%" }, mb: 3 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                PHD
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Sed nec nulla nec lorem.
              </Typography>
            </CardContent>
          </Card>
          <Card raised={true} sx={{ width: { xs: "100%", sm: "48%" }, mb: 3 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                Total Applications
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Suscipit eleifend. Nullam auctor purus.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
}
