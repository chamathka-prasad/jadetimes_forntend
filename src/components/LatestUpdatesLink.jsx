import { Link } from "react-router-dom";

const LatestUpdatesLink = ({ className }) => {
  return (
    <Link
      to="/news"
      className={`bg-neutral-800 block border border-neutral-800 w-fit text-nowrap text-center tracking-widest text-white uppercase lg:duration-300 lg:hover:text-black lg:hover:bg-white ${className}`}
    >
      Latest Updates
    </Link>
  );
};

export default LatestUpdatesLink;
