import PropTypes from "prop-types";

function navigateToLink(link) {
  window.location.href = link;
};

const PictureLink = ({ children, className, link }) => {
  return (
    <picture
      className={`cursor-pointer ${className}`}
      onClick={() => navigateToLink(link)}
    >
      {children}
    </picture>
  );
};

PictureLink.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  link: PropTypes.string
}

export default PictureLink;