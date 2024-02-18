import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const DoLoginRefresh = () => {
  const navigate = useNavigate();

  const refresh = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/refresh-login",
        null,
        { withCredentials: true }
      );
      if (response.status === 200) {
        const user = {
          userId: response.data.data.userId,
          username: response.data.data.username,
          role: response.data.data.role,
          isAuthenticated: response.data.data.authenticated,
          accessExpiration: response.data.data.accessExpiration,
          refreshExpiration: response.data.data.refreshExpiration,
        };
        localStorage.setItem("user", JSON.stringify(user));
        console.log(user);
        return user;
      } else {
        throw new Error("Failed to refresh token");
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const validateAndRefresh = async () => {
    console.log("----- START ---------");
    const userString = localStorage.getItem("user");
    if (userString && userString !== "{}") {
      console.log("------------ User Details Found ----------");
      const user = JSON.parse(userString);
      if (new Date(user.refreshExpiration) > new Date()) {
        console.log("--- Refresh not expired -----");
        if (new Date(user.accessExpiration) > new Date()) {
          console.log("--- access not expired -----");
          console.log("user -> " + user);
          return user;
        } else {
          console.log("------ refreshing login ---------");
          return await refresh();
        }
      } else {
        localStorage.removeItem("user");
        navigate("/login");
      }
    } else {
      navigate("/");
    }
  };

  return validateAndRefresh;
};

export default DoLoginRefresh;
