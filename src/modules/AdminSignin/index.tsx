import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch, UnknownAction } from "@reduxjs/toolkit";
import { RootState } from "../../Globals/store/store";
import { loginAdmin } from "../../Globals/Slices/AuthSlice/LoginAdminSlice";
import LoaderSpinner from "../../components/Spinner";

// Validation schema
const schema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

type AppDispatch = ThunkDispatch<RootState, unknown, UnknownAction>;

export default function AdminSignIn() {
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

  const loading = useSelector((state: RootState) => state?.loginAdmin?.loading);
  const success = useSelector((state: RootState) => state?.loginAdmin?.success);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async () => {
    await dispatch(
      loginAdmin({
        username,
        password,
      })
    );
  
  };

  useEffect(() => {
    if (success) {
      router.push("/admin/dashboard");
    }
  }, [success]);


  const handleUsernameChange = (e: any) => {
    setUsername(e.target.value);
    clearErrors("username");
  };

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
    clearErrors("password");
  };

  return (
      <div className="container pt-20">
          <div className="row justify-content-center">
            <div className="col-xl-4 col-lg-12">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="it-signup-bg mt-50 p-5">
                  <h4 className="text-center mb-20">Sign in</h4>
                    <div className="it-signup-input mb-20 ">
                      <input
                        type="text"
                        placeholder="Username *"
                        {...register("username")}
                        value={username}
                        onChange={handleUsernameChange}
                        className="input-sm"
                      />
                      {errors.username && (
                        <p style={{ color: "red" }}>
                          {errors.username.message}
                        </p>
                      )}
                    </div>
                    <div className="mb-20 it-signup-input">
                      <input
                        type="password"
                        placeholder="Password *"
                        {...register("password")}
                        value={password}
                        onChange={handlePasswordChange}
                        className="input-sm"
                      />
                      {errors.password && (
                        <p style={{ color: "red" }}>
                          {errors.password.message}
                        </p>
                      )}
                    </div>
                  {loading ? (
                    <div className="it-signup-btn mb-40">
                      <button className="it-btn large" type="submit">
                        <LoaderSpinner />
                      </button>
                    </div>
                  ) : (
                    <div className="it-signup-btn mb-40 text-center">
                      <button className="it-btn" type="submit">
                        Log In
                      </button>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
      </div>
  );
}
