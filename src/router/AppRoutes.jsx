import React from "react";
import NavBar from "../components/navbar/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "../components/pages/home/Home";

const AppRoutes = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
