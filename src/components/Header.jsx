import { NavLink, Link } from "react-router-dom";
import { FaBarsStaggered, FaMagnifyingGlass } from "react-icons/fa6";
import Logo from "/logo-white.png";
import Paths from "../routes/Paths";

const Header = (props) => {
  return (
    <header className="bg-neutral-900 text-white sticky top-0 z-10">
      <div className="px-6 py-4 flex items-center max-w-[1430px] mx-auto lg:py-3">
        <Link
          to="/"
          className="block min-w-32 max-w-52 order-2 px-4 mx-auto md:order-3"
          aria-label="jadetimes home"
        >
          <img src={Logo} alt="jadetimes home" />
        </Link>
        <button
          className="block order-1"
          onClick={props.handleToggle}
          aria-label="Menu"
        >
          <FaBarsStaggered className="text-[1.6rem] lg:text-[1.45rem]" />
        </button>
        <Link
          to="/search"
          className="block order-5"
          aria-label="search jadetimes"
        >
          <FaMagnifyingGlass className="text-[1.6rem] lg:text-[1.2rem]" />
        </Link>
        <Link
          to="/membership"
          className="hidden md:block md:bg-[#FF322F] md:font-semibold md:text-[0.625rem] md:py-[0.375rem] md:px-[0.938rem] md:order-2 md:ml-8 md:whitespace-nowrap md:tracking-wide md:duration-300 md:hover:bg-white md:hover:text-black"
        >
          Subscribe : 49.99/Year
        </Link>
        <div className="hidden md:block md:w-[9.813rem] md:order-4 md:mr-6 md:text-right md:text-[0.813rem]">
          <Link to="/log-in">Log In</Link>
        </div>
      </div>
      <nav className="hidden bg-neutral-50 text-[#111111] lg:block">
        <ul className="flex flex-row flex-wrap gap-7 p-3 justify-center text-[0.813rem] font-semibold">
          {Paths.map((Path) => (
            <li key={Path.key}>
              <NavLink className="duration-300 hover:text-[#FF322F]" to={Path.to}>
                {Path.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
