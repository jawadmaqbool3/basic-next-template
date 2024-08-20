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
      <h1>working</h1>
    </main>
  );
}
