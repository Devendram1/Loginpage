import React from "react";
import Header from "./Components/Layouts/Header";
import Login from "./Components/Pages/Login";
import Footer from "./Components/Layouts/Footer";
import { Routes, Route } from "react-router-dom";
import Register from "./Components/Pages/Register";
import Home from "./Components/Pages/Home";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Login" element={<Login />} />
        <Route path="Register" element={<Register />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
