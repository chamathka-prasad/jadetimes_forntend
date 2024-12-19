import { useState, useEffect } from "react";

const useWindowSize = () => {
  function getSize(width) {
    return width;
  }
  const [size, setSize] = useState(getSize(window.innerWidth));
  useEffect(() => {
    const handleResize = () => {
      setSize(getSize(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return size;
};

export default useWindowSize;
