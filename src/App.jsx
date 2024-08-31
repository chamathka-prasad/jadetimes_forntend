import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Aside from "./components/Aside";
import Home from "./pages/Home";
import Search from "./pages/Search";
import News from "./pages/News";
import Business from "./pages/Business";
import Sports from "./pages/Sports";
import Travel from "./pages/Travel";
import Culture from "./pages/Culture";
import Entertainment from "./pages/Entertainment";
import Innovation from "./pages/Innovation";
import Political from "./pages/Political";
import Universe from "./pages/Universe";
import Fashion from "./pages/Fashion";
import Login from "./pages/Login";
import Membership from "./pages/Membership";

const App = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleToggle = () => {
    setToggleMenu(!toggleMenu);
  };
  const handleToggleStop = (event) => {
    event.stopPropagation();
  };
  return (
    <>
      <Header handleToggle={handleToggle} />
      <Aside handleToggle={handleToggle} navClassName={toggleMenu && "visible translate-x-0"} asideClassName={toggleMenu && "visible opacity-100"} handleToggleStop={handleToggleStop} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/news" element={<News />} />
        <Route path="/business" element={<Business />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/culture" element={<Culture />} />
        <Route path="/entertainment" element={<Entertainment />} />
        <Route path="/innovation" element={<Innovation />} />
        <Route path="/political" element={<Political />} />
        <Route path="/universe" element={<Universe />} />
        <Route path="/fashion" element={<Fashion />} />
        <Route path="/login" element={<Login />} />
        <Route path="/membership" element={<Membership />} />
      </Routes>
    </>
  );
};

export default App;
