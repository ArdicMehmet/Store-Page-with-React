import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Details from "../pages/Details";
function RouterArchitecture() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="details/:productId" element={<Details />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default RouterArchitecture;
