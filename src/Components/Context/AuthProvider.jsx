import React, { createContext, useContext, useEffect, useState } from "react";
import DoLoginRefresh from "../Auth/DoLoginRefresh";

const authContext = createContext({});

const AuthProvider = ({ child }) => {
  let refreshRequired = false;
  const { validateAndRefresh } = DoLoginRefresh();
  const [auth, setAuth] = useState({
    userId: "",
    username: "",
    role: "ALL",
    isAuthenticated: false,
    accessExpiration: "",
    refreshExpiration: "",
  });

  const refreshLogin = async () => {
    const user = await validateAndRefresh();
    console.log("user" + user);
    if (user) {
      setAuth({
        userId: user.userId,
        username: user.username,
        role: user.role,
        isAuthenticated: user.isAuthenticated,
        accessExpiration: user.accessExpiration,
        refreshExpiration: user.refreshExpiration,
      });
    }
  };

  // const callAfterSeconds = () => {
  //   let currentTime = Date.now();
  //   let expiringAt = new Date(auth.accessExpiration).getTime();
  //   const callAfter = expiringAt - currentTime;
  //   console.log(callAfter);
  //   return callAfter;
  // };

  // useEffect(() => {
  //   // refreshLogin();
  //   // (()=> {call})
  //   const callAfter = callAfterSeconds();

  //   // Setup interval only if callAfter is not 0 and auth.accessExpiration is defined
  //   if (callAfter > 0 && auth.accessExpiration) {
  //     const refreshInterval = setInterval(() => {
  //       console.log("Refreshing access token");
  //       refreshLogin();
  //     }, callAfter);

  //     // Cleanup interval on component unmount or when accessExpiration changes
  //     return () => {
  //       console.log("Cleaning up");
  //       clearInterval(refreshInterval);
  //     };
  //   }
  // }, [auth.accessExpiration]);

  useEffect(() => {
    if (!refreshRequired) {
      refreshRequired = true;
      refreshLogin();
    }
  }, []);

  return (
    <authContext.Provider value={{ auth, setAuth }}>
      {child}
    </authContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => useContext(authContext);

/************************** */
