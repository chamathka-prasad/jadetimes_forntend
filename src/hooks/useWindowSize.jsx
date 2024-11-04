import { useState, useEffect } from "react";

const useWindowSize = () => {
  const getSizeCategory = (width) => {
    if (width >= 1024) return 'large';
    if (width >= 768) return 'medium';
    return 'small';
  };

  const [sizeCategory, setSizeCategory] = useState(getSizeCategory(window.innerWidth));

  useEffect(() => {
    const handleResize = () => {
      setSizeCategory(getSizeCategory(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return sizeCategory;
};

export default useWindowSize;
