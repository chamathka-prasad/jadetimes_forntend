const Section = ({ div, className, children }) => {
  const Element = div ? div : "section";
  return <Element className={`max-w-[1288px] mx-auto ${className}`}>{children}</Element>;
};

export default Section;
