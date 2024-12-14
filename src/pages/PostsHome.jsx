import { Outlet } from "react-router-dom";

const PostsHome = () => {
  return (
    <div className="p-4 max-w-[1416px] mx-auto lg:grid lg:grid-cols-4">
      <Outlet />
    </div>
  );
};

export default PostsHome;
