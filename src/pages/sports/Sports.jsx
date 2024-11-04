import { Outlet } from "react-router-dom";
import { navPaths } from "../../routes/Paths";
import SubNav from "../../components/SubNav";

const Sports = () => {
  return (
    <>
      <SubNav paths={navPaths} item={3} />
      <Outlet />
    </>
  );
};

export default Sports;