import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { BsXLg, BsChevronUp, BsChevronDown } from "react-icons/bs";
import { navPaths, mobileNavPaths, desktopNavPaths } from "../routes/Paths";

const Aside = ({ onToggleMenu, isToggleMenu }) => {
  const [toggleSubMenu, setToggleSubMenu] = useState(null);

  const scrollTopRef = useRef(null);

  function handleToggleSubMenu(key) {
    setToggleSubMenu((prevToggleSubMenu) => (prevToggleSubMenu === key ? null : key));
  }

  function handleToggleMenuItem() {
    onToggleMenu();
    setToggleSubMenu(null);
    scrollTopRef.current.scrollTo({
      left: 0,
      top: 0,
      behavior: "smooth",
    });
  }

  function stopHandleToggleMenu(event) {
    event.stopPropagation();
  }

  return (
    <aside className={`bg-transparent duration-300 fixed top-0 bottom-0 left-0 right-0 z-50 ${isToggleMenu ? "visible" : "invisible"}`} onClick={handleToggleMenuItem}>
      <nav className={`bg-neutral-900 text-white max-w-80 h-full relative duration-300 ${isToggleMenu ? "translate-x-0" : "-translate-x-full"}`} onClick={stopHandleToggleMenu}>
        <div className="flex flex-col p-4 overflow-auto h-full lg:py-4 lg:px-9" ref={scrollTopRef}>
          <Link to="/log-in" className="text-sm my-[0.6rem] self-end text-nowrap lg:hidden" onClick={handleToggleMenuItem}>
            Log In
          </Link>
          <Link to="/membership" className="w-fit text-sm text-nowrap bg-[#FF0D0D] px-3 py-1 mb-4 mt-[1.05rem] lg:hidden" onClick={handleToggleMenuItem}>
            Join Premium : 80% OFF
          </Link>
          <ul className="lg:mt-0">
            <li>
              <Link to="" className="block font-semibold py-2 lg:text-[0.813rem] lg:font-normal lg:pt-[0.3rem]" onClick={handleToggleMenuItem}>
                Subscribe to newsletters
              </Link>
            </li>
            {navPaths.map((path) => (
              <li className={`lg:text-sm lg:border-b lg:border-b-neutral-800 ${path.submenus ? "flex flex-row flex-wrap" : ""}`} key={path.key}>
                <Link to={path.to} onClick={handleToggleMenuItem} className="block py-2 lg:duration-300 lg:hover:text-[#FF322F] flex-grow">
                  {path.name}
                </Link>
                {path.submenus && (
                  <button onClick={() => handleToggleSubMenu(path.key)} aria-label="sub menu" aria-expanded={toggleSubMenu === path.key}>
                    {toggleSubMenu === path.key ? <BsChevronUp /> : <BsChevronDown />}
                  </button>
                )}
                {toggleSubMenu === path.key && path.submenus && (
                  <ul className="w-full text-[#8B8B8B]">
                    {path.submenus.map((submenu) => (
                      <li key={submenu.key}>
                        <Link to={submenu.to} onClick={handleToggleMenuItem} className="block pl-2 py-2 lg:duration-300 lg:hover:text-[#FF322F]">
                          {submenu.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            {desktopNavPaths.map((path) => (
              <li className="hidden lg:block lg:self-stretch lg:text-sm border-b lg:border-b-neutral-800 lg:last-of-type:border-b-0" key={path.key}>
                <Link to={path.to} className="lg:block lg:py-2 lg:duration-300 lg:hover:text-[#FF322F]" onClick={handleToggleMenuItem}>
                  {path.name}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="border-t border-[#8b8b8b] mt-3 pt-5 lg:hidden">
            {mobileNavPaths.map((path) => (
              <li className="mb-2 last-of-type:mb-0" key={path.key}>
                <Link to={path.to} className="block lg:duration-300 lg:hover:text-[#FF322F]" onClick={handleToggleMenuItem}>
                  {path.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="lg:hidden mt-2">&copy; 2024 Jadetimes Media LLC. All&nbsp;Rights Reserved</div>
        </div>
        <button className="absolute top-[1.43rem] left-[1rem] lg:left-[16.4rem] lg:top-[1.1rem]" onClick={handleToggleMenuItem} aria-label="close the menu">
          <BsXLg className="text-[1.6rem]" />
        </button>
      </nav>
    </aside>
  );
};

export default Aside;