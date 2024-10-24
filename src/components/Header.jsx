import { NavLink, Link } from "react-router-dom";
import MembershipBadge from "./MembershipBadge";
import { FaBarsStaggered, FaMagnifyingGlass } from "react-icons/fa6";
import Logo from "/logo-white.png";
import { navPaths } from "../routes/Paths";

const Header = ({ handleToggle }) => {
  return (
    <header className="bg-neutral-900 text-white sticky top-0 z-40">
      <div className="px-4 py-[1.45rem] flex items-center relative max-w-[1407px] mx-auto lg:py-[1.032rem]">
        <Link
          to="/"
          className="block min-w-32 max-w-44 order-2 mx-auto lg:order-3 absolute left-1/2 -translate-x-1/2"
        >
          <img src={Logo} alt="jadetimes" />
        </Link>
        <button
          className="block order-1 mr-auto lg:mr-0"
          onClick={handleToggle}
          aria-label="Menu"
        >
          <FaBarsStaggered className="text-[1.6rem] lg:text-[1.45rem]" />
        </button>
        <Link
          to="/search"
          className="block order-5 ml-auto lg:ml-0"
          aria-label="search jadetimes"
          role="button"
        >
          <FaMagnifyingGlass className="text-[1.6rem] lg:text-[1.2rem]" />
        </Link>
        <MembershipBadge className="hidden lg:block lg:order-2 lg:ml-8 lg:mr-auto" />
        <Link to="/log-in" className="hidden lg:block lg:order-4 lg:mr-8 lg:text-right lg:text-[0.813rem] lg:ml-auto">Log In</Link>
      </div>
      <nav className="hidden bg-neutral-50 text-[#111111] lg:block">
        <ul className="flex flex-row flex-wrap gap-7 p-3 px-4 justify-center text-[0.813rem] font-semibold">
          {navPaths.map((path) => (
            <li key={path.key}>
              <NavLink
                className="duration-300 hover:text-[#FF322F]"
                to={path.to}
              >
                {path.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;