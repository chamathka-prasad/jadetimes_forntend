import { useState } from "react";

function useOpen() {
  const [value, setValue] = useState(false);

  function handleTrue() {
    setValue(true);
  }

  function handleFalse() {
    setValue(false);
  }

  return [value, handleTrue, handleFalse];
}

export default useOpen;