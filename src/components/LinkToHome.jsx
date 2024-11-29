import { Link } from "react-router-dom";

const LinkToHome = ({ className, children }) => {
  return (
    <Link to="/" className={className}>
      {children}
    </Link>
  );
};

export default LinkToHome;
