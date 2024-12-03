const Section = ({ className, children }) => {
  return <section className={`max-w-[1288px] mx-auto ${className}`}>{children}</section>;
};

export default Section;
