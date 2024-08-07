import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home/index";
import NotFound from "../pages/NotFound/index";
import Details from "../pages/Details/index";
function RouterArchitecture() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/Store-Page-with-React/" />} />
      <Route path="/Store-Page-with-React/" element={<Home />} />
      <Route
        path="/Store-Page-with-React/details/:productId"
        element={<Details />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default RouterArchitecture;
