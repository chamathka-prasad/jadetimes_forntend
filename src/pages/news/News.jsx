import { Outlet } from "react-router-dom";
import { navPaths } from "../../routes/Paths";
import SubNav from "../../components/SubNav";

const News = () => {
  return (
    <>
      <SubNav paths={navPaths} item={1} />
      <Outlet />
    </>
  );
};

export default News;