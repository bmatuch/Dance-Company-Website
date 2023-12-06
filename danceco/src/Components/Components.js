import React from "react";
import Home from "./Home/Home";
import Officers from "./Officers/Officers";
import Footer from "./Footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthRegister from "./Profile/AuthRegister";
import AuthLogin from "./Profile/AuthLogin";
import Protected from "./Protected/Protected.js";
import Dances from "./Dances/Dances.js";
import ViewProfile from "./Protected/ViewProfile.js";
import EditProfile from "./Protected/EditProfile.js";
import "../../src/index.css";

// Right now ViewProfile is not protected, but working on it
const Components = () => {
  return (
    <Router>
      <Footer />
      <Routes>
        <Route path="/login/profile/" element={<Protected path="/profile" element={Protected} />} />
        <Route path="/login/profile/view/:profileId" element={<ViewProfile />} />  
        <Route path="/login/profile/edit/:profileId" element={<EditProfile />} />
        <Route path="/create" element={<AuthRegister />} />
        <Route path="/login" element={<AuthLogin />} />
        <Route path="/" element={<Home />} />
        <Route path="/officers" element={<Officers />} />
        <Route path="/dances" element={<Dances />} /> 
      </Routes>
    </Router>
  );
};

export default Components;