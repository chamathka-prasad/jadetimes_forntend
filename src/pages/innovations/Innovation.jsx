import { Outlet } from "react-router-dom";

import SubNav from "../../components/SubNav";

import useWindowSize from "../../hooks/useWindowSize";

const Innovation = () => {
  const screenSize = useWindowSize();
  return (
    <>
      {screenSize === "large" && <SubNav item={7} />}
      <Outlet />
    </>
  );
};

export default Innovation;