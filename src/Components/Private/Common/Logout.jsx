import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthProvider";

const Logout = () => {
  let navigate = useNavigate();
  const URL = "http://localhost:8080/api/v1/logout";

  //  const [logout, setLogout] = useState(false);

  const { setAuth } = useAuth();

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

  const doLogOut = async () => {
    if (localStorage.getItem("user")) {
      await handleLogout();
      // setLogout(true);
      setAuth({
        userId: "",
        username: "",
        role: "ALL",
        isAuthenticated: false,
        accessExpiration: "",
        refreshExpiration: "",
      });
      localStorage.removeItem("user");
      console.log("Logged out --. from Header Component");
    }
  };

  return <button onClick={doLogOut}>Logout</button>;
};

export default Logout;
