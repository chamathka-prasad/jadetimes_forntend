import { useRef } from "react";
import { Link } from "react-router-dom";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";

import navPaths from "../routes/navPaths";
import mobileNavPaths from "../routes/mobileNavPaths";
import desktopNavPath from "../routes/desktopNavPaths";

import useKey from "../hooks/useKey";
import useWindowSize from "../hooks/useWindowSize";
import useOpen from "../hooks/useOpen";

import MembershipLink from "./MembershipLink";
import LoginButton from "./LoginButton";
import Login from "./Login";
import CloseButton from "./CloseButton";

const Aside = ({ handleMenuClose, isMenu }) => {
  const screenSize = useWindowSize();
  const [key, handleKey] = useKey(null);
  const [isLogin, handleLoginOpen, handleLoginClose] = useOpen();
  const scrollTopRef = useRef(null);

  function handleToggleMenuItem() {
    handleMenuClose();
    handleKey();
    scrollTopRef.current.scrollTo(0, 0);
  }

  function stopHandleToggleMenu(event) {
    event.stopPropagation();
  }

  return (
    <aside className={`bg-transparent duration-300 fixed top-0 bottom-0 left-0 right-0 z-50 ${isMenu ? "visible" : "invisible"}`} onClick={handleToggleMenuItem}>
      <nav className={`bg-neutral-900 text-white max-w-80 h-full relative duration-300 ${isMenu ? "translate-x-0" : "-translate-x-full"}`} onClick={stopHandleToggleMenu}>
        <div className="flex flex-col p-4 overflow-auto h-full lg:py-4 lg:px-9" ref={scrollTopRef}>
          {screenSize !== "large" && <LoginButton className="text-sm my-[0.6rem] self-end" onClick={handleLoginOpen} />}
          {isLogin && <Login handleLoginClose={handleLoginClose} />}
          {screenSize !== "large" && <MembershipLink className="w-fit text-sm mb-3 mt-[1.05rem]" onClick={handleToggleMenuItem} />}
          <ul className="lg:mt-0 text-[1.0625rem]">
            <li>
              <Link to="" className="block w-fit font-semibold py-2 lg:text-[0.813rem] lg:font-normal lg:pt-[0.3rem] text-nowrap" onClick={handleToggleMenuItem}>
                Subscribe to newsletters
              </Link>
            </li>
            {navPaths.slice(1, navPaths.length).map((path) => (
              <li className={`lg:text-sm lg:border-b lg:border-b-neutral-800 ${(path.submenus && "flex flex-row flex-wrap") || undefined}`} key={path.key}>
                <Link to={path.to} onClick={handleToggleMenuItem} className="block py-2 lg:duration-300 lg:hover:text-[#FF322F] flex-grow">
                  {path.name}
                </Link>
                {path.submenus && <button onClick={() => handleKey(path.key)}>{key === path.key ? <BsChevronUp /> : <BsChevronDown />}</button>}
                {path.submenus && (
                  <div className={`w-full text-[#8B8B8B] duration-300 grid ${key === path.key ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                    <ul className="overflow-y-hidden" aria-hidden={key !== path.key}>
                      {path.submenus.map((submenu) => (
                        <li key={submenu.key}>
                          <Link to={submenu.to} onClick={handleToggleMenuItem} className="block pl-2 py-2 lg:duration-300 lg:hover:text-[#FF322F]">
                            {submenu.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
            {screenSize === "large" && (
              <>
                {desktopNavPath.map((path) => (
                  <li className="text-sm border-b border-b-neutral-800" key={path.key}>
                    <Link to={path.to} onClick={handleToggleMenuItem} className="block py-2 duration-300 hover:text-[#FF322F]">
                      {path.name}
                    </Link>
                  </li>
                ))}
              </>
            )}
          </ul>
          {screenSize !== "large" && (
            <>
              <ul className="border-t border-[#8b8b8b] mt-3 pt-5 text-[1.0625rem]">
                {mobileNavPaths.map((path) => (
                  <li className="mb-2 last-of-type:mb-0" key={path.key}>
                    <Link to={path.to} className="block" onClick={handleToggleMenuItem}>
                      {path.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-2 text-[1.0625rem]">
                <div>&copy; 2024 Jadetimes Media LLC.</div>
                <div>All Rights Reserved</div>
              </div>
            </>
          )}
        </div>
        <CloseButton className="absolute top-[1.43rem] left-[1rem] lg:left-[16.4rem] lg:top-[1.1rem]" aria-label="close the menu" onClick={handleToggleMenuItem} />
      </nav>
    </aside>
  );
};

export default Aside;
