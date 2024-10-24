function navigateToLink(link) {
  window.location.href = link;
};

const PictureLink = ({ children, className, link }) => {
  return (
    <picture
      className={`cursor-pointer h-fit ${className}`}
      onClick={() => navigateToLink(link)}
    >
      {children}
    </picture>
  );
};

export default PictureLink;