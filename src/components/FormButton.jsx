const FormButton = ({ className, children }) => {
  return <button className={`bg-neutral-900 text-white w-full px-4 py-3 lg:duration-300 lg:hover:bg-neutral-600 ${className}`}>{children}</button>;
};

export default FormButton;
