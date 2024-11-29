import { useState } from "react";

function useSwitch() {
  const [value, setValue] = useState(false);

  function handleTrue() {
    setValue(true);
  }

  function handleFalse() {
    setValue(false);
  }

  return [value, handleTrue, handleFalse];
}

export default useSwitch;