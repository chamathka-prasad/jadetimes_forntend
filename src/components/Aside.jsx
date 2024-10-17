import { useState } from "react";
import { Link } from "react-router-dom";
import { FaX, FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { navPaths, mobileNavPaths, desktopNavPaths } from "../routes/Paths";

const Aside = ({
  handleToggle,
  stopHandleToggle,
  isNav,
  isAside
}) => {
  const [toggleSubMenu, setToggleSubMenu] = useState(null);

  function handleToggleSubMenu(key) {
    setToggleSubMenu((prev) => (prev === key ? null : key));
  }

  function handleToggleSubMenuHover(key) {
    if (window.innerWidth >= 1024) {
      setToggleSubMenu((prev) => (prev === key ? null : key));
    }
  }

  function handleToggleItem() {
    handleToggle();
    setToggleSubMenu(null);
  }

  return (
    <aside
      className={`bg-transparent duration-300 fixed top-0 bottom-0 left-0 right-0 z-10 ${
        isAside ? "visible" : "invisible"
      }`}
      onClick={handleToggleItem}
    >
      <nav
        className={`bg-neutral-900 text-white max-w-80 h-full relative duration-300 ${
          isNav ? "translate-x-0" : "-translate-x-full"
        }`}
        onClick={stopHandleToggle}
      >
        <div className="flex flex-col px-6 py-4 overflow-auto h-full lg:py-4 lg:px-9">
          <Link
            to="/log-in"
            className="text-sm my-[0.6rem] self-end lg:hidden"
            onClick={handleToggleItem}
          >
            Log In
          </Link>
          <Link
            to="/membership"
            className="w-fit text-sm text-nowrap bg-[#FF0D0D] px-3 py-1 my-4 lg:hidden"
            onClick={handleToggleItem}
          >
            Join Premium : 80% OFF
          </Link>
          <ul className="lg:mt-0">
            <li>
              <Link
                to=""
                className="block font-semibold py-2 lg:text-[0.813rem] lg:font-normal lg:pt-[0.3rem]"
                onClick={handleToggleItem}
              >
                Subscribe to newsletters
              </Link>
            </li>
            {navPaths.map((path) => (
              <li
                className={`lg:text-sm lg:border-b lg:border-b-neutral-800 ${
                  path?.submenus ? "flex flex-row flex-wrap" : ""
                }`}
                key={path.key}
                onMouseEnter={() => handleToggleSubMenuHover(path.key)}
              >
                <Link
                  to={path.to}
                  onClick={handleToggleItem}
                  className="block py-2 duration-300 hover:text-[#FF322F] flex-grow"
                >
                  {path.name}
                </Link>
                {path?.submenus && (
                  <button
                    className="lg:opacity-0 lg:focus-visible:opacity-100"
                    onClick={() => handleToggleSubMenu(path.key)}
                    aria-label="sub navigations"
                    aria-expanded={toggleSubMenu === path.key}
                  >
                    {toggleSubMenu === path.key ? (
                      <FaChevronUp />
                    ) : (
                      <FaChevronDown />
                    )}
                  </button>
                )}
                {toggleSubMenu === path.key && path?.submenus && (
                  <ul className="w-full text-[#8B8B8B] lg:absolute lg:left-[17.8rem] lg:bg-neutral-900">
                    {path.submenus.map((submenu) => (
                      <li
                        key={submenu.key}
                        className="lg:border-b lg:border-b-neutral-900"
                      >
                        <Link
                          to={submenu.to}
                          onClick={handleToggleItem}
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
            {desktopNavPaths.map((path) => (
              <li
                className="hidden lg:block lg:self-stretch lg:text-sm border-b lg:border-b-neutral-800 lg:last-of-type:border-b-0"
                key={path.key}
              >
                <Link
                  to={path.to}
                  className="lg:block lg:py-2 lg:duration-300 lg:hover:text-[#FF322F]"
                  onClick={handleToggleItem}
                >
                  {path.name}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="border-t border-[#8b8b8b] mt-3 pt-5 lg:hidden">
            {mobileNavPaths.map((path) => (
              <li className="mb-2" key={path.key}>
                <Link
                  to={path.to}
                  className="block duration-300 hover:text-[#FF322F]"
                  onClick={handleToggleItem}
                >
                  {path.name}
                </Link>
              </li>
            ))}
          </ul>
          <p className="lg:hidden">
            &copy; 2024 Jadetimes Media LLC. All&nbsp;Rights Reserved
          </p>
        </div>
        <button
          className="absolute top-[1.43rem] left-[1.4rem] lg:left-[16.4rem] lg:top-[1.1rem]"
          onClick={handleToggleItem}
          aria-label="close the menu"
        >
          <FaX className="text-[1.6rem]" />
        </button>
      </nav>
    </aside>
  );
};

export default Aside;