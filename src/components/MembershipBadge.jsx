import { Link } from "react-router-dom";

const MembershipBadge = ({className}) => {
  return (
    <Link
      to="/membership"
      className={`bg-[#FF322F] font-semibold text-[0.625rem] py-[0.3rem] px-[0.87rem] whitespace-nowrap tracking-wide text-white border border-[#FF322F] duration-300 hover:bg-white hover:text-black hover:border-neutral-900 ${className}`}
    >
      Subscribe : 49.99/Year
    </Link>
  );
};

export default MembershipBadge;