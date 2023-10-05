import React from "react";
import Home from "./Home/Home";
import About from "./About/About";
import Officers from "./Officers/Officers.js";
import Footer from "./Footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


const Components = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/officers' element={<Officers />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default Components;