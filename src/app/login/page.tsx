"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Login() {
  const [formData, setFormData] = useState({
    password: "",
    email: "",
  });

  const [message, setMessage] = useState({
    text: "",
    type: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const login = async () => {
    try {
      await axios.post("api/login", {
        password: formData.password,
        email: formData.email,
      });

      redirectToHome();
    } catch (error: any) {
      if (error.name == "AxiosError") {
        setMessage({
          text: error.response.data.message,
          type: "warning",
        });
      } else {
        setMessage({
          text: "Something went wrong",
          type: "danger",
        });
      }
    }
  };

  const redirectToHome = () => {
    // router.push('/admin');
  };

  useEffect(() => {
    redirectToHome();
  });

  return (
    <main>
      <div className="d-flex flex-column flex-root" id="kt_app_root">
        <div className="d-flex flex-column flex-lg-row flex-column-fluid">
          <div className="d-flex flex-column flex-lg-row-fluid w-lg-50 p-10 order-2 order-lg-1">
            <div className="d-flex flex-center flex-column flex-lg-row-fluid">
              <div className="w-lg-500px w-md-500px p-10">
                <div className="text-center mb-11">
                  <h1 className="text-dark fw-bolder mb-3">Sign In</h1>
                  <div className="text-gray-500 fw-semibold fs-6">
                    Your Own Managment
                  </div>
                </div>

                <div className="fv-row mb-8">
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    autoComplete="off"
                    className="form-control bg-transparent"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="fv-row mb-8">
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    autoComplete="off"
                    className="form-control bg-transparent"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>

                <div className="d-grid mb-10">
                  <button
                    type="button"
                    id="kt_sign_in_submit"
                    onClick={login}
                    className="btn btn-primary"
                  >
                    <span className="indicator-label">Sign In</span>
                    <span className="indicator-progress">
                      Please wait...
                      <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                    </span>
                  </button>
                </div>
                <h1 className=" text-dark fs-2qx fw-bolder text-center mb-7">
                  Fast, Efficient and Productive
                </h1>
              </div>
            </div>
          </div>

          <div className="d-flex flex-lg-row-fluid w-lg-50 bgi-size-cover bgi-position-center order-1 order-lg-2">
            <div className="d-flex flex-column flex-center py-7 py-lg-15 px-5 px-md-15 w-100 ">
              <img
                className="d-none d-lg-block mx-auto w-275px w-md-50 w-xl-500px mb-10 mb-lg-20 rounded"
                src="./media/misc/auth-bg1.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
