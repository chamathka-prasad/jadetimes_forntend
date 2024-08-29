import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaAlignLeft } from "react-icons/fa6";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Logo from "/logo.png";

const Header = () => {
  return (
    <header className="bg-black text-white p-4 flex items-center">
      <Link to="/" className="block min-w-32 max-w-48 order-2 px-4 mx-auto">
        <img src={Logo} alt="jadetimes logo" />
      </Link>
      <button className="block order-1">
        <FaAlignLeft size={24} />
      </button>
      <Link to="/search" className="block order-3">
        <FaMagnifyingGlass size={24} />
      </Link>
    </header>
  );
};

export default Header;
