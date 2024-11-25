import { FaChevronRight } from "react-icons/fa6";

import { Link } from "react-router-dom";

const ReadMoreLink = ({className = "", ariaLabel = "", to}) => {
  return (
    <Link to={to} className={`flex w-fit items-center capitalize text-nowrap lg:duration-300 lg:hover:opacity-50 ${className}`.trim()} aria-label={`read more about ${ariaLabel}`.trim()}>
      Read more
      <FaChevronRight className="inline" />
    </Link>
  );
};

export default ReadMoreLink;
