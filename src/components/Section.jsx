const Section = ({ tag, className, children }) => {
  const Element = tag ? tag : "section";
  return <Element className={`max-w-[900px] lg:max-w-[1280px] mx-auto ${className}`}>{children}</Element>;
};

export default Section;
