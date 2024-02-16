import React from "react";
import Header from "./Components/util/Header.jsx";
import { Outlet } from "react-router-dom";

const App = ({ name, isAuth }) => {
  return (
    <div>
      <Header name={name} isAuth={isAuth} />
      <Outlet />
    </div>
  );
};

export default App;
