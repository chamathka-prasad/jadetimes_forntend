import { Outlet } from "react-router-dom";

import SubNav from "./SubNav";

import useWindowSize from "../hooks/useWindowSize";

const PagesHome = ({ item }) => {
  const screenSize = useWindowSize();
  return (
    <>
      {screenSize === "large" && <SubNav item={item} />}
      <Outlet />
    </>
  );
};

export default PagesHome;
