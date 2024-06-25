import * as React from "react";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ThunkDispatch, UnknownAction } from "@reduxjs/toolkit";
import { RootState } from "../../Globals/store/store";
import { useDispatch, useSelector } from "react-redux";
import { loginAdmin } from "../../Globals/Slices/AuthSlice/LoginAdminSlice";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LoaderSpinner from "../../components/Spinner";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();
type AppDispatch = ThunkDispatch<RootState, unknown, UnknownAction>;

const schema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

export default function AdminSignIn() {
  const loading = useSelector((state: RootState) => state?.loginAdmin?.loading);
  const success = useSelector((state: RootState) => state?.loginAdmin?.success);
  const dispatch: AppDispatch = useDispatch();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: any) => {
    await dispatch(
      loginAdmin({
        username: data.username,
        password: data.password,
      })
    );
  };

  useEffect(() => {
    if (success) {
      router.push("/admin/dashboard");
    }
  }, [success]);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://plus.unsplash.com/premium_photo-1685214580428-7eae1a78e7bc?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "#0AB99D" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit(onSubmit)}
              sx={{ mt: 1 }}
            >
              <Controller
                name="username"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    color="success"
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    autoComplete="username"
                    autoFocus
                    error={!!errors.username}
                    helperText={errors.username ? errors.username.message : ""}
                  />
                )}
              />
              <Controller
                name="password"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    color="success"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    id="password"
                    autoComplete="current-password"
                    error={!!errors.password}
                    helperText={errors.password ? errors.password.message : ""}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                )}
              />
              <FormControlLabel
                control={
                  <Checkbox value="remember" style={{ color: "#0AB99D" }} />
                }
                label="Remember me"
              />

              {loading ? (
                <Button
                  // type="submit"
                  // disabled
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 3,
                    mb: 2,
                    bgcolor: "#0AB99D",
                    "&:hover": {
                      bgcolor: "#0AB99D",
                    },
                  }}
                >
                  <LoaderSpinner />
                </Button>
              ) : (
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 3,
                    mb: 2,
                    bgcolor: "#0AB99D",
                    "&:hover": {
                      bgcolor: "#0AB99D",
                    },
                  }}
                >
                  Sign In
                </Button>
              )}

              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2" style={{ color: "#0AB99D" }}>
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2" style={{ color: "#0AB99D" }}>
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              {/* <Copyright sx={{ mt: 5 }} /> */}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

// import React, { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import { useRouter } from "next/navigation";
// import { useDispatch, useSelector } from "react-redux";
// import { ThunkDispatch, UnknownAction } from "@reduxjs/toolkit";
// import { RootState } from "../../Globals/store/store";
// import { loginAdmin } from "../../Globals/Slices/AuthSlice/LoginAdminSlice";
// import LoaderSpinner from "../../components/Spinner";

// // Validation schema
// const schema = yup.object().shape({
//   username: yup.string().required("Username is required"),
//   password: yup.string().required("Password is required"),
// });

// type AppDispatch = ThunkDispatch<RootState, unknown, UnknownAction>;

// export default function AdminSignIn() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     clearErrors,
//   } = useForm({
//     resolver: yupResolver(schema),
//   });
//   const dispatch: AppDispatch = useDispatch();
//   const router = useRouter();

//   const loading = useSelector((state: RootState) => state?.loginAdmin?.loading);
//   const success = useSelector((state: RootState) => state?.loginAdmin?.success);

//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const onSubmit = async () => {
//     await dispatch(
//       loginAdmin({
//         username,
//         password,
//       })
//     );

//   };

//   useEffect(() => {
//     if (success) {
//       router.push("/admin/dashboard");
//     }
//   }, [success]);

//   const handleUsernameChange = (e: any) => {
//     setUsername(e.target.value);
//     clearErrors("username");
//   };

//   const handlePasswordChange = (e: any) => {
//     setPassword(e.target.value);
//     clearErrors("password");
//   };

//   return (
//       <div className="container pt-20">
//           <div className="row justify-content-center">
//             <div className="col-xl-4 col-lg-12">
//               <form onSubmit={handleSubmit(onSubmit)}>
//                 <div className="it-signup-bg mt-50 p-5">
//                   <h4 className="text-center mb-20">Sign in</h4>
//                     <div className="it-signup-input mb-20 ">
//                       <input
//                         type="text"
//                         placeholder="Username *"
//                         {...register("username")}
//                         value={username}
//                         onChange={handleUsernameChange}
//                         className="input-sm"
//                       />
//                       {errors.username && (
//                         <p style={{ color: "red" }}>
//                           {errors.username.message}
//                         </p>
//                       )}
//                     </div>
//                     <div className="mb-20 it-signup-input">
//                       <input
//                         type="password"
//                         placeholder="Password *"
//                         {...register("password")}
//                         value={password}
//                         onChange={handlePasswordChange}
//                         className="input-sm"
//                       />
//                       {errors.password && (
//                         <p style={{ color: "red" }}>
//                           {errors.password.message}
//                         </p>
//                       )}
//                     </div>
//                   {loading ? (
//                     <div className="it-signup-btn mb-40">
//                       <button className="it-btn large" type="submit">
//                         <LoaderSpinner />
//                       </button>
//                     </div>
//                   ) : (
//                     <div className="it-signup-btn mb-40 text-center">
//                       <button className="it-btn" type="submit">
//                         Log In
//                       </button>
//                     </div>
//                   )}
//                 </div>
//               </form>
//             </div>
//           </div>
//       </div>
//   );
// }
