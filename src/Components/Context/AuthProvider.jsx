import React, { createContext, useContext, useEffect, useState } from "react";
import DoLoginRefresh from "../Auth/DoLoginRefresh";

const authContext = createContext({});

const AuthProvider = ({ child }) => {
  const validateAndRefresh = DoLoginRefresh();
  const [auth, setAuth] = useState({
    userId: "",
    username: "",
    role: "ALL",
    isAuthenticated: false,
    accessExpiration: "",
    refreshExpiration: "",
  });

  const callAfterSeconds = () => {
    let currentTime = Date.now();
    let expiringAt = new Date(auth.accessExpiration).getTime();
    const callAfter = expiringAt - currentTime;
    return callAfter;
  };

  const refreshLogin = async () => {
    try {
      const data = await validateAndRefresh();
      if (data !== undefined) {
        const user = {
          userId: data.userId,
          username: data.username,
          role: data.role,
          isAuthenticated: data.isAuthenticated,
          accessExpiration: data.accessExpiration,
          refreshExpiration: data.refreshExpiration,
        };
        setAuth(user);
      } else {
        console.log("No records Found");
      }
    } catch (error) {
      console.error(
        "Error while refreshing access token: ",
        error.response.data.rootcause
      );
    }
  };

  // useEffect(() => {
  //   refreshLogin();
  // }, []);

  // useEffect(() => {
  //   if (callAfterSeconds !== 0) {
  //     const refreshInterval = setInterval(() => {
  //       console.log("Refreshing access token");
  //       // refreshLogin();
  //     }, callAfterSeconds());
  //     return () => clearInterval(refreshInterval);
  //   }
  // }, [auth.accessExpiration]);

  useEffect(() => {
    console.log("Auth:", auth);
  }, [auth]);

  return (
    <authContext.Provider value={{ auth, setAuth }}>
      {child}
    </authContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => useContext(authContext);
