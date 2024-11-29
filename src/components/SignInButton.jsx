const SignInButton = ({ className, onClick }) => {
  return (
    <button className={`text-nowrap ${className}`} onClick={onClick}>
      Sign In
    </button>
  );
};

export default SignInButton;
