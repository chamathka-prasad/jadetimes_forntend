import { Link } from "react-router-dom";

const LatestUpdates = ({ link, className }) => {
  return (
    <Link
      to={link}
      className={`bg-neutral-800 border border-neutral-800 w-fit text-nowrap tracking-widest text-white uppercase text-[0.625rem] duration-300 hover:text-black hover:bg-white ${className}`}
    >
      Latest Updates
    </Link>
  );
};

export default LatestUpdates;
