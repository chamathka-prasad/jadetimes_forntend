import { Outlet } from "react-router-dom";
import SubNav from "../../components/SubNav";

const News = () => {
  return (
    <>
      <SubNav item={1} />
      <Outlet />
    </>
  );
};

export default News;