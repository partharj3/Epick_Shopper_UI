import React from "react";
import App from "../../App";
import navs from "./Navigation";
import { Route, Routes } from "react-router";
import { useAuth } from "../Context/AuthProvider";

const AllRoutes = () => {
  const { auth } = useAuth();

  const { username, role, isAuthenticated } = auth;

  return (
    <Routes>
      <Route
        path="/"
        element={<App name={username} isAuth={isAuthenticated} />}
      >
        {navs.map((nav, i) => {
          if (isAuthenticated) {
            if (nav.isVisibleAfterAuth) {
              if (nav.role === role || nav.role === "ALL") {
                // console.log(nav);
                return <Route key={i} path={nav.path} element={nav.element} />;
              }
            }
          } else {
            if (!nav.requireAuth && nav.role === "ALL") {
              // console.log(nav);
              return <Route key={i} path={nav.path} element={nav.element} />;
            }
          }
        })}
      </Route>
    </Routes>
  );
};
export default AllRoutes;
