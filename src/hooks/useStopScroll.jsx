import { useEffect } from "react";

const useStopScroll = (isValue) => {
  useEffect(() => {
    if (isValue) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.removeAttribute("style");
    }

    return () => document.body.removeAttribute("style");
  }, [isValue]);
};

export default useStopScroll;
