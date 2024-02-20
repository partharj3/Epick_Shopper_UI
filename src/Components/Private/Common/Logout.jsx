import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  let navigate = useNavigate();
  const URL = "http://localhost:8080/api/v1/logout";

  const handleLogout = async () => {
    try {
      console.log("log out");
      const response = await axios.post(URL);
      console.log(response);
      console.log("Logged OUT");
      navigate("/");
    } catch (error) {
      console.log(error.response.data.rootcause);
    }
  };

  return { handleLogout };
};

export default Logout;
