import { NavLink, Link } from "react-router-dom";
import { FaBarsStaggered, FaMagnifyingGlass } from "react-icons/fa6";

import MembershipBadge from "./MembershipBadge";
import LoginButton from "./LoginButton";

import Logo from "/logo-white.png";

import { navPaths } from "../routes/paths";

import useWindowSize from "../hooks/useWindowSize";

const Header = ({ handleMenuOpen, handleLoginOpen }) => {
  const screen = useWindowSize();
  return (
    <header className="bg-neutral-900 text-white sticky top-0 z-40">
      <div className="px-4 py-[1.45rem] flex items-center relative max-w-[1407px] mx-auto lg:py-[1.032rem]">
        <Link to="/" className="block min-w-32 max-w-44 order-2 mx-auto lg:order-3 absolute left-1/2 -translate-x-1/2">
          <img src={Logo} alt="jadetimes" />
        </Link>
        <button className="block order-1 mr-auto lg:mr-0" onClick={handleMenuOpen} aria-label="open the menu">
          <FaBarsStaggered className="text-[1.6rem] lg:text-[1.45rem]" />
        </button>
        <Link to="/search" className="block order-5 ml-auto lg:ml-0" aria-label="search jadetimes" role="button">
          <FaMagnifyingGlass className="text-[1.6rem] lg:text-[1.2rem]" />
        </Link>
        {screen === "large" && <MembershipBadge className="font-semibold text-[0.625rem] order-2 ml-8 mr-auto" />}
        {screen === "large" && <LoginButton className="order-4 mr-8 text-right text-[0.813rem] ml-auto" onClick={handleLoginOpen} />}
      </div>
      {screen === "large" && <nav className="bg-neutral-50 text-[#111111]">
        <ul className="flex flex-row flex-wrap gap-7 p-3 px-4 justify-center text-[0.813rem] font-semibold">
          {navPaths.slice(0, 11).map((path) => (
            <li key={path.key}>
              <NavLink className="duration-300 hover:text-[#FF322F]" to={path.to}>
                {path.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>}
    </header>
  );
};

export default Header;
