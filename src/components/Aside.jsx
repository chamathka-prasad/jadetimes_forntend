import { useState } from "react";
import { Link } from "react-router-dom";
import { FaX, FaChevronDown, FaChevronUp } from "react-icons/fa6";
import Paths from "../routes/Paths";

const Aside = (props) => {
  const [toggleSubMenu, setToggleSubMenu] = useState(null);
  const handleToggleSubMenu = (key) => {
    setToggleSubMenu((prev) => (prev === key ? null : key));
  };
  return (
    <aside
      className={`bg-transparent duration-300 fixed top-0 bottom-0 left-0 right-0 z-10 ${
        props.asideClassName ? "visible" : "invisible"
      }`}
      onClick={props.handleToggle}
    >
      <nav
        className={`bg-neutral-900 text-white max-w-80 h-full relative duration-300 ${
          props.navClassName ? "translate-x-0" : "-translate-x-full"
        }`}
        onClick={props.handleToggleStop}
      >
        <div className="flex flex-col px-7 py-6 overflow-auto h-full">
          <Link className="w-fit text-sm text-nowrap bg-[#FF0D0D] px-3 py-1 mt-12 mb-5">
            Join Premium : 80% OFF
          </Link>
          <Link to="#footer" className="font-semibold mb-2 text-nowrap">
            Subscribe to newsletters
          </Link>
          <ul>
            {Paths.map((Path) => (
              <li
                className={`lg:text-sm lg:border-b lg:border-b-neutral-900 ${
                  Path?.submenus ? "flex flex-row flex-wrap" : ""
                }`}
                key={Path.key}
              >
                <Link
                  to={Path.to}
                  onClick={props.handleToggle}
                  className="block py-2 duration-300 hover:text-[#FF322F] flex-grow"
                >
                  {Path.name}
                </Link>
                {Path?.submenus && (
                  <button
                    onClick={() => {
                      handleToggleSubMenu(Path.key);
                    }}
                  >
                    {toggleSubMenu === Path.key ? (
                      <FaChevronUp />
                    ) : (
                      <FaChevronDown />
                    )}
                  </button>
                )}
                {toggleSubMenu === Path.key && Path?.submenus && (
                  <ul className="w-full text-[#8B8B8B]">
                    {Path.submenus.map((submenu) => (
                      <li
                        key={submenu.key}
                        className="lg:border-t lg:border-t-neutral-900"
                      >
                        <Link
                          to={submenu.to}
                          onClick={props.handleToggle}
                          className="block py-2 duration-300 hover:text-[#FF322F]"
                        >
                          {submenu.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li className="hidden self-stretch lg:text-sm border-b border-b-neutral-900">
              <Link className="block py-2 duration-300 hover:text-[#FF322F]">
                Plans & Pricing
              </Link>
            </li>
            <li className="hidden self-stretch lg:text-sm border-b border-b-neutral-900">
              <Link className="block py-2 duration-300 hover:text-[#FF322F]">
                Shop
              </Link>
            </li>
            <li className="hidden self-stretch lg:text-sm">
              <Link className="block py-2 duration-300 hover:text-[#FF322F]">
                World Journalist Rankings
              </Link>
            </li>
          </ul>
        </div>
        <button
          className="absolute top-6 left-6"
          onClick={props.handleToggle}
          aria-label="close"
        >
          <FaX className="text-[1.6rem]" />
        </button>
      </nav>
    </aside>
  );
};

export default Aside;
