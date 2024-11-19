import { Outlet } from "react-router-dom";

import SubNav from "../../components/SubNav";

import useWindowSize from "../../hooks/useWindowSize";

const Sports = () => {
  const screenSize = useWindowSize();
  return (
    <>
      {screenSize === "large" && <SubNav item={3} />}
      <Outlet />
    </>
  );
};

export default Sports;
