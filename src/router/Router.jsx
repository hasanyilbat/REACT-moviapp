import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Login from "../pages/Login";
import Main from "../pages/Main";
import MovieDetail from "../pages/MovieDetail";
import Register from "../pages/Register";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="/moviedetail/:id" element={<MovieDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
