import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Search from "./pages/Search";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Header />
      <Nav className="right-0" />
      <Routes>
        <Route path="/search" element={<Search />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
