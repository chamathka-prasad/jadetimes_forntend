import React from "react";
import { NavLink, Link } from "react-router-dom";
import { FaX } from "react-icons/fa6";
import Paths from "../routes/Paths";

const Aside = (props) => {
  return (
    <aside className={`z-10 bg-transparent-black text-white fixed h-dvh w-full top-0 full-hide opacity-0 duration-500 ${props.asideClassName}`} onClick={props.handleToggle}>
      <nav className={`bg-neutral-900 flex flex-col max-w-80 h-full -translate-x-full full-hide duration-500 ${props.navClassName}`} onClick={props.handleToggleStop}>
        <ul className="order-2 flex flex-col gap-6 mt-[1.4rem] font-medium items-start overflow-y-auto pt-1 pr-4 pb-4 pl-4">
          <li className="flex flex-row flex-wrap gap-8 items-center justify-between self-stretch sm:hidden">
            <Link to="/log-in" onClick={props.handleToggle}>
              Log In
            </Link>
            <Link to="/membership" onClick={props.handleToggle} className="sm:hidden bg-red-600 font-medium text-xs py-1 px-2 duration-500 hover:bg-white hover:text-black text-center uppercase">
              Subscribe : 49.99/Year
            </Link>
          </li>
          {Paths.map(Path => (
            <li className="self-stretch lg:text-sm" key={Path.key}>
              <NavLink to={Path.to} onClick={props.handleToggle}>{Path.name}</NavLink>
              {Path.submenus && (
                <ul className="font-normal text-neutral-200 flex flex-col gap-2 mt-2 pl-2">
                  {Path.submenus.map((submenu) => (
                    <li key={submenu.key}>
                      <Link to={submenu.to} onClick={props.handleToggle}>{submenu.name}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <button className="inline-block mt-5 mx-4 self-end" onClick={props.handleToggle}>
          <FaX size={24} />
        </button>
      </nav>
    </aside>
  );
};

export default Aside;
