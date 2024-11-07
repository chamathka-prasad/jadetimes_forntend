import { Outlet } from "react-router-dom";
import SubNav from "../../components/SubNav";

const Sports = () => {
  return (
    <>
      <SubNav item={3} />
      <Outlet />
    </>
  );
};

export default Sports;