import { NavLink } from "react-router-dom";

import navPaths from "../routes/navPaths";

const SubNav = ({ item }) => {
  return (
    <nav className="sub-page">
      <ul className="text-heading text-xs flex flex-row gap-4 items-center justify-center mt-3">
        {navPaths[item].submenus.map((menu) => (
          <li key={menu.key}>
            <NavLink className="block border-y-2 border-y-white hover:border-b-heading" to={menu.to}>
              {menu.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SubNav;
