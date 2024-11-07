import { useState, useEffect } from "react";

const useWindowSize = () => {
  const [size, setSize] = useState(getSize(window.innerWidth));

  function getSize(width) {
    if (width >= 1024) return "large";
    if (width >= 768) return "medium";
    return "small";
  }

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
