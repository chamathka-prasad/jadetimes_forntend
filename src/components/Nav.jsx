import React from "react";
import { Link } from "react-router-dom";
import { FaX } from "react-icons/fa6";

const Nav = (props) => {
  return (
    <nav
      className={`bg-transparent backdrop-blur-sm absolute h-dvh w-full top-0 duration-500 right-full ${props.className}`}
    >
      <div className="w-fit bg-black text-white h-full p-4 flex flex-col gap-4">
        <ul className="order-2">
          <li>
            <Link to="/search">Search</Link>
          </li>
        </ul>
        <button className="block">
          <FaX size={24} />
        </button>
      </div>
    </nav>
  );
};

export default Nav;
