import { Link } from "react-router-dom";

const LinkToHome = ({ className, children }) => {
  return (
    <Link to="/" className={className} aria-label="jadetimes.com">
      {children}
    </Link>
  );
};

export default LinkToHome;
