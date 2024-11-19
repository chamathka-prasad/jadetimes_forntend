import { NavLink } from "react-router-dom";

import navPaths from "../routes/navPaths";

const SubNav = ({ item }) => {
  return (
    <nav className="sub-page">
      <ul className="text-[#111111] text-xs flex flex-row gap-3 items-center justify-center">
        {navPaths[item].submenus.map((menu) => (
          <li key={menu.key} className="my-2">
            <NavLink className="block border-b-2 border-b-white hover:border-b-[#111111]" to={menu.to}>
              {menu.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SubNav;
