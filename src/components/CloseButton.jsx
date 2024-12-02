import { BsXLg } from "react-icons/bs";

const CloseButton = ({className, onClick, ariaLabel}) => {
  return (
    <button className={className} onClick={onClick} aria-label={ariaLabel}>
      <BsXLg />
    </button>
  );
};

export default CloseButton;