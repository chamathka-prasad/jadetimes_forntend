import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const UpdatesBadge = ({ link, className, children }) => {
  return (
    <Link
      to={link}
      className={`bg-neutral-800 border border-neutral-800 w-fit text-nowrap tracking-widest text-white uppercase text-[0.625rem] duration-300 hover:text-black hover:bg-white ${className}`}
    >
      {children}
    </Link>
  );
};

UpdatesBadge.propTypes = {
  link: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node
}

export default UpdatesBadge;
