import { NavLink } from "react-router-dom";

import navPaths from "../routes/navPaths";

const SubNav = ({ item }) => {
  return (
    <nav>
      <ul className="text-heading text-xs flex flex-row gap-4 items-center justify-center mt-3">
        {navPaths[item].submenus.map((menu) => (
          <li key={menu.key}>
            <NavLink className={({ isActive }) => `block border-y-2 border-y-white ${isActive ? "border-b-heading" : "duration-300 hover:border-b-heading"}`} to={menu.to}>
              {menu.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SubNav;
