import React from "react";

import { FaAlignLeft } from "react-icons/fa6";
import { FaMagnifyingGlass } from "react-icons/fa6";

import Logo from '/logo.png'

const Header = () => {
  return (
    <header className="bg-black text-white p-4 flex items-center">
      <a href="https://www.jadetimes.com/" className="block min-w-32 max-w-48 order-2 px-4 mx-auto">
      <img src={Logo} alt="jadetimes logo" />
      </a>
      <button className="block order-1"><FaAlignLeft size={24}/></button>
      <a href="" className="block order-3"><FaMagnifyingGlass size={24}/></a>
    </header>
  );
};

export default Header;
