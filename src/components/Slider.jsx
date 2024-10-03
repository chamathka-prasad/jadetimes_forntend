import { useRef, useState } from "react";

import {
  FaCircleChevronLeft,
  FaCircleChevronRight,
  FaCircle,
} from "react-icons/fa6";

const Slider = ({ children, length }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartRef = useRef(0);
  const touchEndRef = useRef(0);
  const scrollRef = useRef(null);

  const handleTouchStart = (e) => {
    touchStartRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndRef.current = e.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const distance = touchStartRef.current - touchEndRef.current;

    if (distance > 50) {
      nextSlide();
    } else if (distance < -50) {
      prevSlide();
    }
  };

  const nextSlide = () => {
    scrollRef.current.scrollBy({
      left: 0,
      top: scrollRef.current.clientHeight,
      behavior: "smooth",
    });
  };

  const prevSlide = () => {
    scrollRef.current.scrollBy({
      left: 0,
      top: -scrollRef.current.clientHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      <div
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="h-[90vh] overflow-y-hidden"
        ref={scrollRef}
      >
        {children}
      </div>
      {currentSlide == length - 1 || (
        <button
          onClick={() => {
            nextSlide();
            setCurrentSlide((prevCurrentSlide) => prevCurrentSlide + 1);
          }}
          className="absolute top-0 bottom-0 right-0 p-6 text-white opacity-0 md:opacity-100"
        >
          <FaCircleChevronRight size={30} />
        </button>
      )}
      {currentSlide == 0 || (
        <button
          onClick={() => {
            prevSlide();
            setCurrentSlide((prevCurrentSlide) => prevCurrentSlide - 1);
          }}
          className="absolute top-0 bottom-0 left-0 p-6 text-white opacity-0 md:opacity-100"
        >
          <FaCircleChevronLeft size={30} />
        </button>
      )}
      <ul className="absolute bottom-4 w-full flex flex-row justify-center gap-1">
        {Array.from({ length }).map((_, index) => (
          <li key={index} className="text-white">
            <FaCircle size={8} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Slider;
