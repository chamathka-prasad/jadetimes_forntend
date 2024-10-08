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
        <div className="flex flex-col px-7 py-6 overflow-auto h-full lg:py-4 lg:px-9">
          <Link to="/log-in" className="text-sm py-1 self-end md:hidden" onClick={props.handleToggle}>Log In</Link>
          <Link to="/membership" className="w-fit text-sm text-nowrap bg-[#FF0D0D] px-3 py-1 my-4 md:hidden" onClick={props.handleToggle}>
            Join Premium : 80% OFF
          </Link>
          <ul className="md:mt-8 lg:mt-0">
            <li>
              <Link to="" className="block font-semibold py-2 lg:text-[0.813rem] lg:font-normal" onClick={props.handleToggle}>
                Subscribe to newsletters
              </Link>
            </li>
            {Paths.map((Path) => (
              <li
                className={`lg:text-sm lg:border-b lg:border-b-neutral-800 ${
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
                      >
                        <Link
                          to={submenu.to}
                          onClick={props.handleToggle}
                          className="block pl-2 py-2 duration-300 hover:text-[#FF322F]"
                        >
                          {submenu.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li className="hidden lg:block lg:self-stretch lg:text-sm border-b lg:border-b-neutral-800">
              <Link className="lg:block lg:py-2 lg:duration-300 lg:hover:text-[#FF322F]" onClick={props.handleToggle}>
                Plans & Pricing
              </Link>
            </li>
            <li className="hidden lg:block lg:self-stretch lg:text-sm border-b lg:border-b-neutral-800">
              <Link className="lg:block lg:py-2 lg:duration-300 lg:hover:text-[#FF322F]" onClick={props.handleToggle}>
                Shop
              </Link>
            </li>
            <li className="hidden lg:block lg:self-stretch lg:text-sm">
              <Link className="lg:block lg:py-2 lg:duration-300 lg:hover:text-[#FF322F]" onClick={props.handleToggle}>
                World Journalist Rankings
              </Link>
            </li>
          </ul>
          <ul className="border-t border-[#8b8b8b] mt-3 pt-5 lg:hidden">
            <li className="mb-2">
              <Link className="block" onClick={props.handleToggle}>Advertise with Jadetimes</Link>
            </li>
            <li className="mb-2">
              <Link className="block" onClick={props.handleToggle}>Report a Issue</Link>
            </li>
            <li className="mb-2">
              <Link className="block" onClick={props.handleToggle}>Contact Us</Link>
            </li>
            <li className="mb-2">
              <Link className="block" onClick={props.handleToggle}>Careers at Jadetimes</Link>
            </li>
            <li className="mb-2">
              <Link className="block" onClick={props.handleToggle}>Privacy Policy</Link>
            </li>
            <li className="mb-2">
              <Link className="block" onClick={props.handleToggle}>Terms & Conditions</Link>
            </li>
          </ul>
          <p className="lg:hidden">&copy; 2024 Jadetimes Media LLC. All&nbsp;Rights Reserved</p>
        </div>
        <button
          className="absolute top-6 left-6 lg:left-[16.4rem] lg:top-5"
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
