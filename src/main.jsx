import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import PageNotFound from "./Components/util/PageNotFound.jsx";
import AllRoutes from "./Components/Routes/AllRoutes.jsx";
import AuthProvider from "./Components/Context/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider child={<AllRoutes />} />
    </BrowserRouter>
  </React.StrictMode>
);
