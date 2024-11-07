import { useRef, useState } from "react";

const useCarousel = () => {
  const [index, setIndex] = useState(0);
  const scrollRef = useRef(null);

  function handleNextSlide() {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        top: 0,
        left: scrollRef.current.clientWidth,
        behavior: "smooth",
      });
    }
    setIndex((previousIndex) => {
      return previousIndex + 1;
    });
  }

  function handlePreviousSlide() {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        top: 0,
        left: -scrollRef.current.clientWidth,
        behavior: "smooth",
      });
    }
    setIndex((previousIndex) => {
      return previousIndex - 1;
    });
  }

  return [index, scrollRef, handleNextSlide, handlePreviousSlide];
};

export default useCarousel;
