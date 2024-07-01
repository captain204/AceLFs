"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Card, CardContent} from "@mui/material";
import animationData from "../../../public/img/student3.json";
import Lottie from "react-lottie";
import { RootState } from "../../Globals/store/store";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { ThunkDispatch, UnknownAction } from "@reduxjs/toolkit";

import { useEffect } from "react";
import { newsFormAction } from "../../Globals/Slices/ApplicationSlice/News";
import { getCurrentUser } from "../../Globals/Slices/AuthSlice/CurrentUserSlice";

const drawerWidth = 240;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window?: () => Window;
}


type AppDispatch = ThunkDispatch<RootState, unknown, UnknownAction>;
export default function ResponsiveDrawer(props: Props) {
  const { username } = (useSelector((state: RootState) => state.loginUser.signupData) || {});
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser())
  }, [])
  
  // const currentDateTime = new Date().toLocaleString("en-US", {
  //   year: "numeric",
  //   month: "long",
  //   day: "numeric",
  //   hour: "2-digit",
  //   minute: "2-digit",
  // });

  // useEffect(() => {
  //   dispatch(newsFormAction ({
  //     slug:  "1",
  //     title: "hey",
  //     content:  "go",
  //     image:  "hey.png",
  //     detailsImage: "God",
  //     category: "beans",
  //     commentsCount:  2147483647,
  //     publishedDate: "2024-06-12"
  //   }));
  
  // }, []);




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
        {/* <Toolbar /> */}

        {/* <motion.div
        variants={fadeInVariants}
        initial="hide"
        whileInView="show"
        exit="hide"
        viewport={{
          once: true,
        }}
      > */}

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
                  sx={{ fontSize: "15px" }}
                >
                  6th october, 2024
                </Typography>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{ marginTop: "20px" }}
                >
                  Welcome back, {username}!
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
