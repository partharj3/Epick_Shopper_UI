import React from "react";
import Header from "./Components/util/Header.jsx";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="block z-50">
      <Header />
      <Outlet />
    </div>
  );
};

export default App;
