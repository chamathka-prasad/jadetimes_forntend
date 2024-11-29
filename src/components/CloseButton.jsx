import { BsXLg } from "react-icons/bs";

const CloseButton = ({className, onClick}) => {
  return (
    <button className={className} onClick={onClick}>
      <BsXLg />
    </button>
  );
};

export default CloseButton;