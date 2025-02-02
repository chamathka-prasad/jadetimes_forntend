import { useRef } from "react";
import { Link } from "react-router-dom";

import navPaths from "../routes/navPaths";
import mobileNavPaths from "../routes/mobileNavPaths";

import useKey from "../hooks/useKey";
import useWindowSize from "../hooks/useWindowSize";
import useStopScroll from "../hooks/useStopScroll";

import LinkToMembership from "./LinkToMembership";
import SignInButton from "./SignInButton";
import CloseButton from "./CloseButton";
import ChevronIcon from "./ChevronIcon";

const Nav = ({ handleNavOff, isNav, handleSignInOn }) => {
  const screenSize = useWindowSize();
  const [key, handleKey] = useKey(null);
  const scrollTopRef = useRef(null);
  useStopScroll(isNav);

  function handleNavItem() {
    handleNavOff();
    handleKey();
    scrollTopRef.current.scrollTo(0, 0);
  }

  function stopHandleNav(event) {
    event.stopPropagation();
  }

  function handleSubscribe() {
    window.scrollTo({ top: document.body.scrollHeight, left: 0, behavior: "smooth" });
    handleNavItem();
  }

  return (
    <nav className={`bg-[#00000080] fixed h-full w-screen left-0 top-0 z-50 ${isNav ? "visible" : "invisible"}`} onClick={handleNavItem}>
      <div
        className={`bg-neutral-900 border-r border-r-neutral-700 text-white max-w-[20.5rem] duration-300 h-full overflow-y-auto relative flex flex-col p-4 lg:py-4 lg:px-9 ${isNav ? "-translate-x-0" : "-translate-x-full"}`}
        ref={scrollTopRef}
        onClick={stopHandleNav}
      >
        {screenSize < 1200 && (
          <SignInButton
            className="text-sm self-end my-[0.4rem]"
            onClick={() => {
              handleSignInOn();
              handleNavItem();
            }}
          />
        )}
        {screenSize < 1200 && <LinkToMembership className="w-fit text-sm mb-3 mt-4" onClick={handleNavItem} />}
        <ul>
          <li>
            <button className="block w-fit font-semibold py-2 lg:text-[0.813rem] lg:font-normal lg:pt-[0.3rem] text-nowrap lg:mb-4" onClick={handleSubscribe}>
              Subscribe to newsletters
            </button>
          </li>
          {navPaths.map((path) => (
            <li className="lg:text-sm lg:border-b lg:border-b-neutral-700 last:border-b-0" key={path.key}>
              {path.submenus ? (
                <div className="flex flex-row justify-between">
                  <Link to={path.to} onClick={handleNavItem} className="block py-2 w-3/4 flex-grow">
                    {path.name}
                  </Link>
                  <button className="flex items-center justify-end w-1/4" onClick={() => handleKey(path.key)}>
                    {key === path.key ? <ChevronIcon className="w-5 -rotate-90 duration-300" /> : <ChevronIcon className="w-5 rotate-90 duration-300" />}
                  </button>
                </div>
              ) : (
                <Link to={path.to} onClick={handleNavItem} className="block py-2 flex-grow">
                  {path.name}
                </Link>
              )}
              {path.submenus && (
                <ul className={`w-full text-neutral-400 duration-300 grid ${key === path.key ? "max-h-screen" : "invisible overflow-y-hidden max-h-0"}`}>
                  {path.submenus.map((submenu) => (
                    <li key={submenu.key}>
                      <Link to={submenu.to} onClick={handleNavItem} className="block pl-2 py-2">
                        {submenu.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        {screenSize < 1200 && (
          <>
            <ul className="border-t border-neutral-700 mt-3 py-4">
              {mobileNavPaths.map((path) => (
                <li key={path.key}>
                  <Link to={path.to} className="block w-fit py-2" onClick={handleNavItem}>
                    {path.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="text-xs mt-auto">
              <div>&copy; 2024 Jadetimes Media LLC.</div>
              <div>All Rights Reserved</div>
            </div>
          </>
        )}
        <div className="absolute w-8 flex items-center justify-center left-4 top-4 my-[0.17rem] lg:left-[unset] lg:right-9">
          <CloseButton className="w-[1.7rem]" onClick={handleNavItem} ariaLabel="menu slide out" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
