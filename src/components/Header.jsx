import React from "react";
import { NavLink, Link } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Logo from "/logo-white.png";
import Paths from "../routes/Paths";

const Header = (props) => {
  return (
    <header className="bg-neutral-900 text-white sticky top-0 z-10">
      <div className="px-4 py-3 flex items-center max-w-[1380px] mx-auto">
        <Link to="/" className="block min-w-32 max-w-52 order-2 px-4 mx-auto sm:order-3" aria-label="jadetimes home">
          <img src={Logo} alt="jadetimes home" />
        </Link>
        <button className="block order-1" onClick={props.handleToggle} aria-label="Menu">
          <FaBarsStaggered size={24} />
        </button>
        <Link to="/search" className="block order-5" aria-label="search jadetimes">
          <FaMagnifyingGlass size={24} />
        </Link>
        <Link to="/membership" className=" hidden md:block bg-red-700 font-medium text-xs py-1 px-2 order-2 ml-6 duration-500 hover:bg-white hover:text-black w-40 text-center uppercase whitespace-nowrap">
          Subscribe : 49.99/Year
        </Link>
        <div className="w-40 hidden md:block order-4 mr-6 font-medium text-right lg:text-sm">
          <Link to="/log-in">Log In</Link>
        </div>
      </div>
      <nav className="hidden bg-neutral-100 text-black lg:block">
        <ul className="flex flex-row flex-wrap gap-6 p-2 justify-center text-sm font-medium">
          {Paths.map(Path => (
            <li key={Path.key}>
              <NavLink className="hover:text-red-700 duration-500" to={Path.to}>{Path.name}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
