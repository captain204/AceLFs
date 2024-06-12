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
      <div className="container w-50">
        <div className="it-signup-bg p-relative">
          <div className="row ">
            <div className="col-xl-12 col-lg-12">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="it-signup-wrap">
                  <h4 className="it-signup-title text-center">Admin Sign In</h4>
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
                  {loading ? (
                    <div className="it-signup-btn mb-40">
                      <button className="it-btn large" type="submit">
                        <LoaderSpinner />
                      </button>
                    </div>
                  ) : (
                    <div className="it-signup-btn mb-40 text-center">
                      <button className="it-btn large" type="submit">
                        Log In
                      </button>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
