"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Card, CardContent, Menu, MenuItem } from "@mui/material";
import animationData from "../../../public/img/student.json";
import Lottie from "react-lottie";

const drawerWidth = 240;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window?: () => Window;
  username: string
}

export default function ResponsiveDrawer(props: Props) {
    const {username} = props
  // const currentDateTime = new Date().toLocaleString("en-US", {
  //   year: "numeric",
  //   month: "long",
  //   day: "numeric",
  //   hour: "2-digit",
  //   minute: "2-digit",
  // });

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
                <Lottie options={defaultOptions} height={100} width={100} />
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
