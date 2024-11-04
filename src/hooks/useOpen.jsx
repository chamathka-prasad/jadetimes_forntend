import { useState } from "react";

function useOpen() {
  const [isOpen, setIsOpen] = useState(false);

  function handleOnTrue() {
    setIsOpen(true);
  }

  function handleOnFalse() {
    setIsOpen(false);
  }

  return [isOpen, handleOnTrue, handleOnFalse];
}

export default useOpen;