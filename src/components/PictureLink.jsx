import { useNavigate } from "react-router-dom";

const PictureLink = ({ children, className, link }) => {
  const navigate = useNavigate();
  function navigateToLink(link) {
    navigate(link)
  }
  return (
    <picture className={`cursor-pointer h-fit ${className || ""}`.trim()} onClick={() => navigateToLink(link)}>
      {children}
    </picture>
  );
};

export default PictureLink;