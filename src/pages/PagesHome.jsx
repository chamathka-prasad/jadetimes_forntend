import { Outlet } from "react-router-dom";

import SubNav from "../components/SubNav";

import useWindowSize from "../hooks/useWindowSize";

const PagesHome = ({ item }) => {
  const screenSize = useWindowSize();
  return (
    <>
      {screenSize >= 1200 && <SubNav item={item} />}
      <Outlet />
    </>
  );
};

export default PagesHome;
