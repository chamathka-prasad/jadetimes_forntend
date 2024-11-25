import { useRef, useState } from "react";

const useCarousel = ({ length }) => {
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
      return previousIndex === length - 1 ? length - 1 : previousIndex + 1;
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
      return previousIndex === 0 ? 0 : previousIndex - 1;
    });
  }

  return [index, scrollRef, handleNextSlide, handlePreviousSlide];
};

export default useCarousel;
