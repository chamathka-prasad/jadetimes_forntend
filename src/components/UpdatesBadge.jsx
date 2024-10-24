import { Link } from "react-router-dom";

const UpdatesBadge = ({ link, className, children }) => {
  return (
    <Link
      to={link}
      className={`bg-[#282626] border border-neutral-900 w-fit text-nowrap tracking-widest text-[0.625rem] text-white uppercase duration-300 hover:text-black hover:bg-white ${className}`}
    >
      {children}
    </Link>
  );
};

export default UpdatesBadge;