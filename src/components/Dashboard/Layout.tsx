"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import LogoutIcon from "@mui/icons-material/Logout";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import SchoolIcon from "@mui/icons-material/School";
import DownloadIcon from "@mui/icons-material/Download";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import Person4Icon from "@mui/icons-material/Person4";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import BarChartIcon from "@mui/icons-material/BarChart";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Globals/store/store";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import { getCurrentUser } from "../../Globals/Slices/AuthSlice/CurrentUserSlice";

const drawerWidth = 240;

interface Props {
  children: React.ReactNode;
}

type AppDispatch = ThunkDispatch<RootState, unknown, UnknownAction>;
export default function Layout(props: Props) {
  const dispatch: AppDispatch = useDispatch()
  React.useEffect(() => {
    dispatch(getCurrentUser())
  }, [])
  const { children } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const { firstName } =
    useSelector((state: RootState) => state.currentUser.currentUser) || {};
  const [openAdmissions, setOpenAdmissions] = React.useState(true);
  const [openCoursesDropdown, setOpenCoursesDropdown] = React.useState(true);
  const handleAdmissionsClick = () => {
    setOpenAdmissions(!openAdmissions);
  };
  const handleCoursesClick = () => {
    setOpenCoursesDropdown(!openCoursesDropdown);
  };

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getLoggedInUser());
      await dispatch(getApplicantStatus());
      if (applicantstatusdisplay?.id) {
        await dispatch(getEachStudent(applicantstatusdisplay?.id));
        await dispatch(getStudentUploadsApplicant(applicantstatusdisplay?.id));
        await dispatch(getRefereeApplicant(applicantstatusdisplay?.id));
        await dispatch(
          ApplicantGetEmergencyContact(applicantstatusdisplay?.id)
        );
      }
    };

    fetchData();
  }, [dispatch, applicantstatusdisplay?.id]);

  const router = useRouter();

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "40%",
    [theme.breakpoints.up("sm")]: {
      // marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));

  const drawer = (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "10%",
        }}
      >
        <Avatar
          src="https://marketplace.canva.com/EAGA2vs-oD4/1/0/1600w/canva-navy-white-university-elegant-logo-SXgxVbQ1u70.jpg"
          sx={{
            width: 70,
            height: 70,
            borderRadius: "10px",
          }}
          variant="square"
        />
      </div>

      <List>
        <Link href="/applicant/dashboard" passHref>
          <ListItem disablePadding>
            <ListItemButton
              className={
                router.pathname === "/applicant/dashboard" ? "active" : ""
              }
              sx={{
                "&.active": {
                  bgcolor: "rgba(255, 255, 255, 0.25)",
                },
                color: "white",
              }}
            >
              <ListItemIcon sx={{ color: "white" }}>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText sx={{ fontWeight: "bold" }} primary="Dashboard" />
            </ListItemButton>
          </ListItem>
        </Link>

        <Link href="/applicant/application" passHref>
          <ListItem disablePadding>
            <ListItemButton
              className={
                router.pathname === "/applicant/application" ? "active" : ""
              }
              sx={{
                "&.active": {
                  bgcolor: "rgba(255, 255, 255, 0.25)",
                },
                color: "white",
              }}
            >
              <ListItemIcon sx={{ color: "white" }}>
                <AppRegistrationIcon />
              </ListItemIcon>
              <ListItemText sx={{ fontWeight: "bold" }} primary="Application" />
            </ListItemButton>
          </ListItem>
        </Link>

        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "#0AB99D" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <ListItemButton
            onClick={handleAdmissionsClick}
            // className={router.pathname.startsWith('/admissions') ? 'active' : ''}
            sx={{
              "&.active": {
                bgcolor: "rgba(255, 255, 255, 0.25)",
              },
              color: "white",
            }}
          >
            <ListItemIcon sx={{ color: "white" }}>
              <GroupAddIcon />
            </ListItemIcon>
            <ListItemText sx={{ color: "white" }} primary="Admissions" />
            {openAdmissions ? (
              <ExpandLess sx={{ color: "white" }} />
            ) : (
              <ExpandMore sx={{ color: "white" }} />
            )}
          </ListItemButton>

          <Collapse in={openAdmissions} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <Link href="/applicant/admissions/msc" passHref>
                <ListItemButton
                  className={
                    router.pathname === "/applicant/admissions/msc"
                      ? "active"
                      : ""
                  }
                  sx={{
                    "&.active": {
                      bgcolor: "rgba(255, 255, 255, 0.25)",
                    },
                    pl: 4,
                    color: "white",
                  }}
                >
                  <ListItemIcon sx={{ color: "white" }}>
                    <LocalLibraryIcon />
                  </ListItemIcon>
                  <ListItemText sx={{ color: "white" }} primary="Msc" />
                </ListItemButton>
              </Link>

              <Link href="/applicant/admissions/mphil" passHref>
                <ListItemButton
                  className={
                    router.pathname === "/applicant/admissions/mphil"
                      ? "active"
                      : ""
                  }
                  sx={{
                    "&.active": {
                      bgcolor: "rgba(255, 255, 255, 0.25)",
                    },
                    pl: 4,
                    color: "white",
                  }}
                >
                  <ListItemIcon sx={{ color: "white" }}>
                    <Person4Icon />
                  </ListItemIcon>
                  <ListItemText sx={{ color: "white" }} primary="M.phil" />
                </ListItemButton>
              </Link>

              <Link href="/admissions/phd" passHref>
                <ListItemButton
                  className={
                    router.pathname === "/applicant/admissions/phd"
                      ? "active"
                      : ""
                  }
                  sx={{
                    "&.active": {
                      bgcolor: "rgba(255, 255, 255, 0.25)",
                    },
                    pl: 4,
                    color: "white",
                  }}
                >
                  <ListItemIcon sx={{ color: "white" }}>
                    <SchoolIcon />
                  </ListItemIcon>
                  <ListItemText sx={{ color: "white" }} primary="PHD" />
                </ListItemButton>
              </Link>

              <Link href="/admissions/statistics" passHref>
                <ListItemButton
                  className={
                    router.pathname === "/applicant/admissions/statistics"
                      ? "active"
                      : ""
                  }
                  sx={{
                    "&.active": {
                      bgcolor: "rgba(255, 255, 255, 0.25)",
                    },
                    pl: 4,
                    color: "white",
                  }}
                >
                  <ListItemIcon sx={{ color: "white" }}>
                    <BarChartIcon />
                  </ListItemIcon>
                  <ListItemText sx={{ color: "white" }} primary="Statistics" />
                </ListItemButton>
              </Link>
            </List>
          </Collapse>
        </List>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "#0AB99D" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <ListItemButton
            onClick={handleCoursesClick}
            sx={{
              "&.active": {
                bgcolor: "rgba(255, 255, 255, 0.25)",
              },
              color: "white",
            }}
          >
            <ListItemIcon sx={{ color: "white" }}>
              <LibraryBooksIcon />
            </ListItemIcon>
            <ListItemText sx={{ color: "white" }} primary="Courses" />
            {openCoursesDropdown ? (
              <ExpandLess sx={{ color: "white" }} />
            ) : (
              <ExpandMore sx={{ color: "white" }} />
            )}
          </ListItemButton>

          <Collapse in={openCoursesDropdown} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <Link href="/applicant/courses/courseregistration" passHref>
                <ListItemButton
                  className={
                    router.pathname === "/applicant/courses/courseregistration"
                      ? "active"
                      : ""
                  }
                  sx={{
                    "&.active": {
                      bgcolor: "rgba(255, 255, 255, 0.25)",
                    },
                    pl: 4,
                    color: "white",
                  }}
                >
                  <ListItemIcon sx={{ color: "white" }}>
                    <AppRegistrationIcon />
                  </ListItemIcon>
                  <ListItemText
                    sx={{ color: "white" }}
                    primary="Course Registration"
                  />
                </ListItemButton>
              </Link>

              <Link href="/applicant/courses/courseform" passHref>
                <ListItemButton
                  className={
                    router.pathname === "/applicant/courses/courseform"
                      ? "active"
                      : ""
                  }
                  sx={{
                    "&.active": {
                      bgcolor: "rgba(255, 255, 255, 0.25)",
                    },
                    pl: 4,
                    color: "white",
                  }}
                >
                  <ListItemIcon sx={{ color: "white" }}>
                    <DownloadIcon />
                  </ListItemIcon>
                  <ListItemText
                    sx={{ color: "white" }}
                    primary="Download Course Form"
                  />
                </ListItemButton>
              </Link>
            </List>
          </Collapse>
        </List>
      </List>
      <Divider />
      <List>
        <ListItem disablePadding sx={{ color: "white" }} onClick={handleLogout}>
          <ListItemButton>
            <ListItemIcon sx={{ color: "white" }}>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "black",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <div>
              <Typography
                variant="h6"
                component="div"
                sx={{ mr: 2 }}
                style={{ fontSize: "12px" }}
              >
                {firstName}
              </Typography>

              {/* <Typography
                variant="h6"
                component="div"
                sx={{ mr: 2 }}
                style={{ fontSize: "12px" }}
              >
                3rd year
              </Typography> */}
            </div>

            <Avatar alt={firstName} src="/static/images/avatar/1.jpg" />
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              bgcolor: "#0AB99D",
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#0AB99D",
              color: "white",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          overflow: "auto",
        }}
      >
        <Toolbar />

        {children}
      </Box>
    </Box>
  );
}
