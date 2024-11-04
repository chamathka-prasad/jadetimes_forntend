import { Outlet } from "react-router-dom";
import { navPaths } from "../../routes/Paths";
import SubNav from "../../components/SubNav";

const Innovation = () => {
  return (
    <>
      <SubNav paths={navPaths} item={7} />
      <Outlet />
    </>
  );
};

export default Innovation;