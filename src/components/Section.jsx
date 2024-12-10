const Section = ({ tag, className, children }) => {
  const Element = tag ? tag : "section";
  return <Element className={`max-w-[1288px] mx-auto ${className}`}>{children}</Element>;
};

export default Section;
