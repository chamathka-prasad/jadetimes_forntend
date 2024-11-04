import { NavLink, Outlet } from "react-router-dom";

const SubNav = ({ paths, item }) => {
  return (
    <>
      <nav className="hidden lg:block sub-page">
        <ul className="text-[#111111] text-xs flex flex-row gap-3 items-center justify-center">
          {paths
            .filter((path) => path.key === item && path.submenus)
            .map((path) =>
              path.submenus.map((menu) => (
                <li key={menu.key} className="my-2">
                  <NavLink className="hover:border-b-2 hover:border-b-[#111111]" to={menu.to}>
                    {menu.name}
                  </NavLink>
                </li>
              ))
            )}
        </ul>
      </nav>
    </>
  );
};

export default SubNav;
