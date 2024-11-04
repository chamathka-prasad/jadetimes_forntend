import { Link } from "react-router-dom";

const Login = ({ className, onClick }) => {
  return (
    <Link to="/login" className={`text-nowrap ${className}`} onClick={onClick}>
      Log In
    </Link>
  );
};

export default Login;
