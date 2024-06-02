import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Details from "../pages/Details";
function RouterArchitecture() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="details/:productId" element={<Details />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default RouterArchitecture;
