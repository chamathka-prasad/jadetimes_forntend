import React from "react";
import { NavLink, Link } from "react-router-dom";
import { navPaths } from "../routes/Paths";
import MainArticles from "../components/MainArticles";
import ThirdSlider from "../components/ThirdSlider";
import Articles from "../routes/Articles";

const Innovation = () => {
  return (
    <>
      <nav className="">
        <ul className="text-[#111111] text-xs flex flex-row gap-3 items-center justify-center">
          {navPaths
            .filter((path) => path.key === 7 && path.submenus)
            .map((path) =>
              path.submenus.map((menu) => (
                <li key={menu.key} className="my-2">
                  <NavLink className="pb-1 hover:border-b-2 hover:border-b-[#111111]" to={menu.to}>
                    {menu.name}
                  </NavLink>
                </li>
              ))
            )}
        </ul>
      </nav>
      <div className="max-w-[1300px] mx-auto">
        <h1 className="border-b-[3px] border-b-[#FF322E] pb-1 text-[#111111] mx-4 mt-2 text-xl">
          <Link className="font-semibold">News</Link>
          <span className="mx-4">|</span>
          <Link>Innovation</Link>
        </h1>
        <MainArticles articles={Articles} />
      </div>
      <ThirdSlider articles={Articles.slice(0, 2)} className="mt-4" />
    </>
  );
};

export default Innovation;
