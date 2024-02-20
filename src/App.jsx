import React, { useEffect } from "react";
import Header from "./Components/util/Header.jsx";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default App;
