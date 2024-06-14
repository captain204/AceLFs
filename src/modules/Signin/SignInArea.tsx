import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Image from "next/legacy/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch, UnknownAction } from "@reduxjs/toolkit";
import { RootState } from "../../Globals/store/store";
import { loginUser } from "../../Globals/Slices/AuthSlice/LoginUserSlice";
import LoaderSpinner from "../../components/Spinner";

// Validation schema
const schema = yup.object().shape({
  username: yup.string().required("Username is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});

type AppDispatch = ThunkDispatch<RootState, unknown, UnknownAction>;

export default function SignInArea() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const dispatch: AppDispatch = useDispatch();
  const router = useRouter();

  const loading = useSelector((state: RootState) => state?.loginUser?.loading);
  const success = useSelector((state: RootState) => state?.loginUser?.success);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async () => {
    await dispatch(
      loginUser({
        username,
        password,
        email,
      })
    );
  };

  useEffect(() => {
    if (success) {
      router.push("/dashboard");
    }
  }, [success]);

  const handleUsernameChange = (e: any) => {
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
              objectFit="contain"
            />
          </div>
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="it-signup-wrap">
                  <h4 className="it-signup-title">Sign In</h4>
                  <div className="it-signup-input-wrap">
                    <div className="it-signup-input mb-20">
                      <input
                        type="text"
                        placeholder="Username *"
                        {...register("username")}
                        value={username}
                        onChange={handleUsernameChange}
                      />
                      {errors.username && (
                        <p style={{ color: "red" }}>
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
                  </div>
                  <div className="it-signup-forget d-flex justify-content-between flex-wrap">
                    <a className="mb-20" href="#">
                      Forgot Password?
                    </a>
                    <div className="it-signup-agree mb-20">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          Remember me
                        </label>
                      </div>
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
                        Sign In
                      </button>
                    </div>
                  )}

                  <div className="it-signup-text">
                    <span>
                      Don't have an account? <Link href="/signup">Sign Up</Link>
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
