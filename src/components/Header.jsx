import React from "react";
import { Link } from "react-router-dom";
import { FaAlignLeft } from "react-icons/fa6";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Logo from "/logo.png";

const Header = (props) => {
  return (
    <header className="bg-black text-white">
      <div className="p-4 flex items-center max-w-7xl mx-auto">
        <Link to="/" className="block min-w-32 max-w-48 order-2 px-4 mx-auto">
          <img src={Logo} alt="jadetimes logo" />
        </Link>
        <button className="block order-1" onClick={props.toggleMenu}>
          <FaAlignLeft size={24} />
        </button>
        <Link to="/search" className="block order-3">
          <FaMagnifyingGlass size={24} />
        </Link>
      </div>
      <nav className="hidden bg-neutral-100 text-black sm:block">
        <ul className="flex flex-row flex-wrap gap-6 p-2 justify-center text-sm font-medium">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
          <li>
            <Link to="/business">Business</Link>
          </li>
          <li>
            <Link to="/sports">Sports</Link>
          </li>
          <li>
            <Link to="/travel">Travel</Link>
          </li>
          <li>
            <Link to="/culture">Culture</Link>
          </li>
          <li>
            <Link to="/entertainment">Entertainment</Link>
          </li>
          <li>
            <Link to="/innovation">Innovation</Link>
          </li>
          <li>
            <Link to="/political">Political</Link>
          </li>
          <li>
            <Link to="/universe">Universe</Link>
          </li>
          <li>
            <Link to="/fashion">Fashion</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
