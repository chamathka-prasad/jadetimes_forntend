import { Link } from "react-router-dom";

const LinkToMembership = ({ className, onClick }) => {
  return (
    <Link
      to="/membership"
      className={`bg-accent py-[0.3rem] px-[0.87rem] whitespace-nowrap tracking-wide text-white border border-accent lg:duration-300 lg:hover:bg-white lg:hover:text-black ${className}`}
      onClick={onClick}
    >
      Subscribe : 49.99/Year
    </Link>
  );
};

export default LinkToMembership;
