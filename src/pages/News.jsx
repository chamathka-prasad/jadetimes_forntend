import { Link, NavLink } from "react-router-dom";
import MainArticles from "../components/MainArticles";
import ThirdSlider from "../components/ThirdSlider";
import Articles from "../routes/Articles";
import { navPaths } from "../routes/Paths";

const News = () => {
  return (
    <>
      <nav className="hidden lg:block">
        <ul className="text-[#111111] text-xs flex flex-row gap-3 items-center justify-center">
          {navPaths
            .filter((path) => path.key === 1 && path.submenus)
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
        <h1 className="border-b-[3px] border-b-[#FF322E] pb-1 text-[#111111] mx-4 mt-2">
          <Link className="font-semibold text-xl">News</Link>
        </h1>
        <MainArticles articles={Articles} />
      </div>
      <ThirdSlider articles={Articles.slice(0, 2)} className="mt-4" />
    </>
  );
};

export default News;
