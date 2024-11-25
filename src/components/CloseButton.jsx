import { BsXLg } from "react-icons/bs";

const CloseButton = ({className, ariaLabel, onClick}) => {
  return (
    <button className={className} aria-label={ariaLabel} onClick={onClick}>
      <BsXLg />
    </button>
  );
};

export default CloseButton;