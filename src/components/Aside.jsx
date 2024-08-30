import React from "react";
import { Link } from "react-router-dom";
import { FaX } from "react-icons/fa6";

const Aside = (props) => {
  return (
    <aside className={`bg-black text-white p-4 absolute h-dvh w-full top-0 duration-500 right-0 visible ${props.className}`}>
      <nav className="flex flex-col items-start">
        <ul className="order-2 mt-4">
          <li>
            <Link to="/search" onClick={props.toggleMenu}>
              Search
            </Link>
          </li>
        </ul>
        <button className="inline-block mt-1" onClick={props.toggleMenu}>
          <FaX size={24} />
        </button>
      </nav>
    </aside>
  );
};

export default Aside;
