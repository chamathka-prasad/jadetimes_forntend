import { NavLink } from "react-router-dom";

import { navPaths } from "../routes/paths";

import useWindowSize from "../hooks/useWindowSize";

const SubNav = ({ item }) => {
  const screen = useWindowSize();
  return (
    <>
      {screen === "large" && (
        <nav className="sub-page">
          <ul className="text-[#111111] text-xs flex flex-row gap-3 items-center justify-center">
            {navPaths[item].submenus.map((menu) => (
              <li key={menu.key} className="my-2">
                <NavLink className="hover:border-b-2 hover:border-b-[#111111]" to={menu.to}>
                  {menu.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
};

export default SubNav;
