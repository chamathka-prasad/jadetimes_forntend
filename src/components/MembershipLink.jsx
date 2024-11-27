import { Link } from "react-router-dom";

const MembershipBadge = ({className, onClick}) => {
  return (
    <Link
      to="/membership"
      className={`bg-[#FF322E] py-[0.3rem] px-[0.87rem] whitespace-nowrap tracking-wide text-white border border-[#FF322E] lg:duration-300 lg:hover:bg-white lg:hover:text-black ${className}`}
      onClick={onClick}
    >
      Subscribe : 49.99/Year
    </Link>
  );
};

export default MembershipBadge;