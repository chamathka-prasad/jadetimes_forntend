import React from "react";
import { Link } from "react-router-dom";
import { FaX } from "react-icons/fa6";

const Aside = (props) => {
  return (
    <aside className={`bg-transparent-black text-white fixed h-dvh w-full top-0 full-hide opacity-0 duration-500 ${props.asideClassName}`} onClick={props.handleToggle}>
      <nav className={`bg-black flex flex-col max-w-80 h-full p-4 -translate-x-full full-hide duration-500 ${props.navClassName}`} onClick={props.handleToggleStop}>
        <ul className="order-2 flex flex-col gap-6 mt-8 font-medium items-start overflow-y-auto">
          <li className="flex flex-row items-center justify-between self-stretch sm:hidden">
            <Link to="/membership" className="sm:hidden bg-red-600 font-medium text-xs py-1 px-2 duration-500 hover:bg-white hover:text-black text-center uppercase">
              Subscribe : 49.99/Year
            </Link>
            <Link to="/login" onClick={props.handleToggle}>
              Log In
            </Link>
          </li>
          <li className="self-stretch">
            <Link to="/" onClick={props.handleToggle}>
              Home
            </Link>
          </li>
          <li className="self-stretch">
            <Link to="/news" onClick={props.handleToggle}>
              News
            </Link>
          </li>
          <li className="self-stretch">
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
        <button className="inline-block mt-1 self-start" onClick={props.handleToggle}>
          <FaX size={24} />
        </button>
      </nav>
    </aside>
  );
};

export default Aside;
