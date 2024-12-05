import { NavLink, Link } from "react-router-dom";

import LinkToMembership from "./LinkToMembership";
import SignInButton from "./SignInButton";
import Nav from "./Nav";
import LinkToHome from "./LinkToHome";
import SignIn from "./SignIn";
import SearchIcon from "./SearchIcon";

import Logo from "/logo-white.png";

import navPaths from "../routes/navPaths";

import useWindowSize from "../hooks/useWindowSize";
import useSwitch from "../hooks/useSwitch";
import useStopScroll from "../hooks/useStopScroll";

const Header = () => {
  const screenSize = useWindowSize();
  const [isSignIn, handleSignInOn, handleSignInOff] = useSwitch();
  const [isNav, handleNavOn, handleNavOff] = useSwitch();
  useStopScroll(isSignIn);
  return (
    <header className="bg-neutral-900 text-white sticky top-0 z-40">
      <div className="px-4 py-[1.45rem] lg:py-[1.032rem] flex flex-row items-center gap-4 justify-center max-w-[1416px] mx-auto">
        <div className="relative max-w-[1288px] flex flex-row items-center gap-4 justify-between flex-1 px-4">
          <LinkToHome className="block w-44 absolute left-1/2 -translate-x-1/2">
            <img src={Logo} alt="jadetimes" loading="lazy" />
          </LinkToHome>
          {screenSize === "large" && <LinkToMembership className="font-semibold text-[0.625rem]" />}
          {screenSize === "large" && <SignInButton className="text-[0.813rem]" onClick={handleSignInOn} />}
          {isSignIn && <SignIn handleSignInOff={handleSignInOff} />}
        </div>
        <button className="flex items-center justify-center w-8 -order-1" onClick={handleNavOn} aria-label="menu slide in">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
            <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
          </svg>
        </button>
        <Nav handleNavOff={handleNavOff} isNav={isNav} />
        <Link to="/search" className="flex items-center justify-center w-8" aria-label="search in jadetimes.com">
          <SearchIcon className="w-[1.45rem]" />
        </Link>
      </div>
      {screenSize === "large" && (
        <nav className="bg-neutral-50 text-heading">
          <ul className="flex flex-row flex-wrap gap-7 p-3 px-4 justify-center text-[0.813rem] font-semibold max-w-[1407px] mx-auto">
            {navPaths.map((path) => (
              <li key={path.key}>
                <NavLink className={({ isActive }) => (isActive ? "text-accent" : "duration-300 hover:text-accent")} to={path.to}>
                  {path.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
