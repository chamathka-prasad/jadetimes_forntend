import { Outlet } from "react-router-dom";

import SubNav from "../../components/SubNav";

import useWindowSize from "../../hooks/useWindowSize";

const News = () => {
  const screenSize = useWindowSize();
  return (
    <>
      {screenSize === "large" && <SubNav item={1} />}
      <Outlet />
    </>
  );
};

export default News;
