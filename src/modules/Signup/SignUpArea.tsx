import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Image from "next/legacy/image";
import Link from "next/link";
// import { signupUser } from "@/Globals/Slices/AuthSlice/SignupSlice";
import { UnknownAction, ThunkDispatch } from "@reduxjs/toolkit";

import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";

import { signupUser } from "../../Globals/Slices/AuthSlice/SignupSlice";
import LoaderSpinner from "../../components/Spinner";
import { RootState } from "../../Globals/store/store";

// Validation schema
const schema = yup.object().shape({
  username: yup.string().required("Username is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

type AppDispatch = ThunkDispatch<RootState, unknown, UnknownAction>;

export default function SignUpArea() {
  const dispatch: AppDispatch = useDispatch();
  const loading = useSelector((state: RootState) => state.signup.loading);
  const success = useSelector((state: RootState) => state.signup.success);
  const router = useRouter();

  // React Hook Form setup
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm({
    resolver: yupResolver(schema),
  });

  // State initialization
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onSubmit = (data) => {
    dispatch(
      signupUser({
        username: data.username,
        password1: data.password,
        password2: data.confirmPassword,
        email: data.email,
      })
    );
  };

  // Input change handlers
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    clearErrors("username");
  };

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
    clearErrors("email");
  };

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
    clearErrors("password");
  };

  const handleConfirmPasswordChange = (e: any) => {
    setConfirmPassword(e.target.value);
    clearErrors("confirmPassword");
  };

  useEffect(() => {
    if (success) {
      router.push("/signin");
    }
  }, [success]);

  return (
    <div className="it-signup-area pt-120 pb-120">
      <div className="container">
        <div className="it-signup-bg p-relative">
          <div className="it-signup-thumb d-none d-lg-block">
            <Image
              src="/img/contact/signup.jpg"
              alt=""
              width={663}
              height={637}
            />
          </div>
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="it-signup-wrap">
                  <h4 className="it-signup-title">Sign Up</h4>
                  <div className="it-signup-input-wrap mb-40">
                    <div className="it-signup-input mb-20">
                      <input
                        type="text"
                        placeholder="Username *"
                        {...register("username")}
                        value={username}
                        onChange={handleUsernameChange}
                      />
                      {errors.username && (
                        <p style={{ color: "red" }} className="italic">
                          {errors.username.message}
                        </p>
                      )}
                    </div>

                    <div className="it-signup-input mb-20">
                      <input
                        type="email"
                        placeholder="Email *"
                        {...register("email")}
                        value={email}
                        onChange={handleEmailChange}
                      />
                      {errors.email && (
                        <p style={{ color: "red" }}>{errors.email.message}</p>
                      )}
                    </div>
                    <div className="it-signup-input mb-20">
                      <input
                        type="password"
                        placeholder="Password *"
                        {...register("password")}
                        value={password}
                        onChange={handlePasswordChange}
                      />
                      {errors.password && (
                        <p style={{ color: "red" }}>
                          {errors.password.message}
                        </p>
                      )}
                    </div>

                    <div className="it-signup-input mb-20">
                      <input
                        type="password"
                        placeholder="Confirm Password *"
                        {...register("confirmPassword")}
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                      />
                      {errors.confirmPassword && (
                        <p style={{ color: "red" }}>
                          {errors.confirmPassword.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {loading ? (
                    <div className="it-signup-btn mb-40">
                      <button className="it-btn large" type="submit">
                        <LoaderSpinner />
                      </button>
                    </div>
                  ) : (
                    <div className="it-signup-btn mb-40">
                      <button className="it-btn large" type="submit">
                        Sign Up
                      </button>
                    </div>
                  )}

                  <div className="it-signup-text">
                    <span>
                      Already have an account?{" "}
                      <Link href="signin">Sign In</Link>
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
