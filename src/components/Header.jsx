import { NavLink, Link } from "react-router-dom";
import { FaBarsStaggered, FaMagnifyingGlass } from "react-icons/fa6";

import LinkToMembership from "./LinkToMembership";
import SignInButton from "./SignInButton";
import SignIn from "./SignIn";
import Nav from "./Nav";
import LinkToHome from "./LinkToHome";

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
      <div className="px-4 py-[1.45rem] flex items-center relative max-w-[1400px] mx-auto lg:py-[1.032rem]">
        <LinkToHome className="block min-w-32 max-w-44 order-2 mx-auto lg:order-3 absolute left-1/2 -translate-x-1/2">
          <img src={Logo} alt="jadetimes" />
        </LinkToHome>
        <button className="flex items-center justify-center order-1 mr-auto lg:mr-0 w-6" onClick={handleNavOn} aria-label="menu slide in">
          <FaBarsStaggered className="text-[1.6rem] lg:text-[1.45rem]" />
        </button>
        <Nav handleNavOff={handleNavOff} isNav={isNav} />
        <Link to="/search" className="flex items-center justify-center order-5 ml-auto lg:ml-0 w-6" aria-label="search in jadetimes.com">
          <FaMagnifyingGlass className="text-[1.6rem] lg:text-[1.2rem]" />
        </Link>
        {screenSize === "large" && (
          <>
            <LinkToMembership className="font-semibold text-[0.625rem] order-2 ml-8 mr-auto" />
            <SignInButton className="order-4 mr-8 text-right text-[0.813rem] ml-auto" onClick={handleSignInOn} />
          </>
        )}
        {isSignIn && <SignIn handleSignInOff={handleSignInOff} />}
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
