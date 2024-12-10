import { Outlet } from "react-router-dom";
import Section from "../components/Section";

const PostsHome = () => {
  return (
    <Section div="div" className="p-4 lg:grid lg:grid-cols-4">
      <Outlet />
    </Section>
  );
};

export default PostsHome;
