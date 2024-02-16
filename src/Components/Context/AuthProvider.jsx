import React, { createContext, useContext, useEffect, useState } from "react";

const authContext = createContext({}); // created new context to hold the memory (user's state)

const AuthProvider = ({ child }) => {
  const [auth, setAuth] = useState({
    userId: "",
    username: "",
    role: "CUSTOMER",
    isAuthenticated: false,
    accessExpiration: "",
    refreshExpiration: "",
  });

  useEffect(() => {
    console.log(auth);
  }, [auth]);

  return (
    <authContext.Provider value={{ auth, setAuth }}>
      {child}
    </authContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => useContext(authContext); // customized context.
