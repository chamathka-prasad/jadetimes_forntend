import { useRef } from "react";
import { Link } from "react-router-dom";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";

import navPaths from "../routes/navPaths";
import mobileNavPaths from "../routes/mobileNavPaths";
import desktopNavPath from "../routes/desktopNavPaths";

import useKey from "../hooks/useKey";
import useWindowSize from "../hooks/useWindowSize";
import useSwitch from "../hooks/useSwitch";
import useStopScroll from "../hooks/useStopScroll";

import LinkToMembership from "./LinkToMembership";
import SignInButton from "./SignInButton";
import SignIn from "./SignIn";
import CloseButton from "./CloseButton";

const Nav = ({ handleNavOff, isNav }) => {
  const screenSize = useWindowSize();
  const [key, handleKey] = useKey(null);
  const [isSignIn, handleSignInOn, handleSignInOff] = useSwitch();
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

  return (
    <nav className={`bg-transparent duration-300 fixed h-full w-screen left-0 top-0 z-50 ${isNav ? "translate-x-0" : "invisible -translate-x-full"}`} onClick={handleNavItem}>
      <div className={`bg-neutral-900 text-white max-w-80 duration-300 h-full overflow-y-auto relative flex flex-col p-4 lg:py-4 lg:px-9`} ref={scrollTopRef} onClick={stopHandleNav}>
        {screenSize !== "large" && <SignInButton className="text-sm my-[0.6rem] self-end" onClick={handleSignInOn} />}
        {isSignIn && <SignIn handleSignInOff={handleSignInOff} handleNavItem={handleNavItem} />}
        {screenSize !== "large" && <LinkToMembership className="w-fit text-sm mb-3 mt-[1.05rem]" onClick={handleNavItem} />}
        <ul className="lg:mt-0">
          <li>
            <Link to="" className="block w-fit font-semibold py-2 lg:text-[0.813rem] lg:font-normal lg:pt-[0.3rem] text-nowrap" onClick={handleNavItem}>
              Subscribe to newsletters
            </Link>
          </li>
          {navPaths.map((path) => (
            <li className="lg:text-sm lg:border-b lg:border-b-neutral-700" key={path.key}>
              {path.submenus ? (
                <div className="flex flex-row justify-between">
                  <Link to={path.to} onClick={handleNavItem} className="block py-2 w-3/4 lg:duration-300 lg:hover:text-accent flex-grow">
                    {path.name}
                  </Link>
                  <button className="flex items-center justify-end w-1/4" onClick={() => handleKey(path.key)}>{key === path.key ? <BsChevronUp /> : <BsChevronDown />}</button>
                </div>
              ) : (
                <Link to={path.to} onClick={handleNavItem} className="block py-2 lg:duration-300 lg:hover:text-accent flex-grow">
                  {path.name}
                </Link>
              )}
              {path.submenus && (
                <ul className={`w-full text-neutral-400 duration-300 grid ${key === path.key ? "max-h-screen" : "invisible overflow-y-hidden max-h-0"}`}>
                  {path.submenus.map((submenu) => (
                    <li key={submenu.key}>
                      <Link to={submenu.to} onClick={handleNavItem} className="block pl-2 py-2 lg:duration-300 lg:hover:text-accent">
                        {submenu.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          {screenSize === "large" && (
            <>
              {desktopNavPath.map((path) => (
                <li className="text-sm border-b border-b-neutral-700 lg:last:border-b-0" key={path.key}>
                  <Link to={path.to} onClick={handleNavItem} className="block py-2 duration-300 hover:text-accent">
                    {path.name}
                  </Link>
                </li>
              ))}
            </>
          )}
        </ul>
        {screenSize !== "large" && (
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
            <div className="text-xs">
              <div>&copy; 2024 Jadetimes Media LLC.</div>
              <div>All Rights Reserved</div>
            </div>
          </>
        )}
        <CloseButton className="absolute top-[1.43rem] left-[1rem] lg:left-[16.4rem] lg:top-[1.1rem] text-[1.6rem]" onClick={handleNavItem} />
      </div>
    </nav>
  );
};

export default Nav;
