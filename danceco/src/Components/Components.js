import React from "react";
import Home from "./Home/Home";
import About from "./About/About";
import Officers from "./Officers/Officers.js";
import Footer from "./Footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthRegister from "./Profile/AuthRegister";
import AuthLogin from "./Profile/AuthLogin";
import Protected from "./Protected/Protected.js";
import Dances from "./Dances/Dances.js";
import "../../src/index.css";


const Components = () => {
  return (
    <Router>
      <Footer />
      <Routes>
        <Route path="/login/profile" element={<Protected path="/profile" element={Protected} />} />
        <Route path="/create" element={<AuthRegister />} />
        <Route path="/login" element={<AuthLogin />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/officers" element={<Officers />} />
        <Route path="/dances" element={<Dances />} /> 
      </Routes>
    </Router>
  );
};

export default Components;