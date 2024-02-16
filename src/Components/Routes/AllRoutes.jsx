import React from "react";
import App from "../../App";
import navs from "./Navigation";
import { Route } from "react-router";

const AllRoutes = () => {
  const user = {
    username: "",
    role: "CUSTOMER",
    isAuthenticated: false,
  };

  const { role, username, isAuthenticated } = user;

  const routes = () => {
    return (
      <Route path="/" element={<App />}>
        {navs.map((nav, i) => {
          if (isAuthenticated) {
            if (nav.isVisibleAfterAuth) {
              if (nav.role === role || nav.role === "ALL") {
                console.log(nav);
                return <Route key={i} path={nav.path} element={nav.element} />;
              }
            }
          } else {
            if (!nav.requireAuth && nav.role === "ALL") {
              console.log(nav);
              return <Route key={i} path={nav.path} element={nav.element} />;
            }
          }
        })}
      </Route>
    );
  };

  return routes();
};

export default AllRoutes;
