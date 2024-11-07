const LoginButton = ({ className, onClick }) => {
  return (
    <button className={`text-nowrap ${className}`} onClick={onClick}>
      Log In
    </button>
  );
};

export default LoginButton;
