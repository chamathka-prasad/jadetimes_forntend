import { Outlet } from "react-router-dom";
import SubNav from "../../components/SubNav";

const Innovation = () => {
  return (
    <>
      <SubNav item={7} />
      <Outlet />
    </>
  );
};

export default Innovation;