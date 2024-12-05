import { Link } from "react-router-dom";

import ChevronIcon from "./ChevronIcon";

const ReadMoreLink = ({ className = "", ariaLabel = "", to }) => {
  return (
    <Link to={to} className={`flex items-center w-fit capitalize text-nowrap group lg:duration-300 lg:hover:opacity-50 ${className}`.trim()} aria-label={`read more about ${ariaLabel}`.trim()}>
      Read more
      <ChevronIcon className="w-4 translate-y-[0.5px] lg:group-hover:translate-x-2 lg:duration-300" />
    </Link>
  );
};

export default ReadMoreLink;
