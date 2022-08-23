import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./Body/About/About";
import Login from "./Body/Auth/Login";
import Register from "./Body/Auth/Register";
import Blog from "./Body/Blog/Blog";
import Home from "./Body/Home/Home";
import Profile from "./Body/Profile/Profile";
import Request from "./Body/Request/Request";

const Mid = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/request" element={<Request />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </>
  );
};

export default Mid;
