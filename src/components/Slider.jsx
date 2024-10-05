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

    if (distance > 50 && currentSlide < length - 1) {
      nextSlide();
    } else if (distance < -50 && currentSlide > 0) {
        prevSlide();
    }
  };

  const nextSlide = () => {
    scrollRef.current.scrollBy({
      left: 0,
      top: scrollRef.current.clientHeight,
      behavior: "smooth",
    });
    setCurrentSlide((prevCurrentSlide) => prevCurrentSlide + 1);
  };

  const prevSlide = () => {
    scrollRef.current.scrollBy({
      left: 0,
      top: -scrollRef.current.clientHeight,
      behavior: "smooth",
    });
    setCurrentSlide((prevCurrentSlide) => prevCurrentSlide - 1);
  };

  return (
    <div className="relative">
      <div
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="h-[90vh] overflow-y-hidden snap-y snap-mandatory"
        ref={scrollRef}
      >
        {children}
      </div>
      <button
        onClick={() => {
          nextSlide();
        }}
        className={`absolute bottom-4 right-4 text-white ${
          currentSlide === length - 1 ? "opacity-50" : "opacity-100"
        }`}
        tabIndex="-1"
        aria-hidden="true"
        disabled={currentSlide === length - 1}
      >
        <FaCircleChevronRight size={30} />
      </button>
      <button
        onClick={() => {
          prevSlide();
        }}
        className={`absolute bottom-4 right-14 text-white ${
          currentSlide <= 0 ? "opacity-50" : "opacity-100"
        }`}
        tabIndex="-1"
        aria-hidden="true"
        disabled={currentSlide <= 0}
      >
        <FaCircleChevronLeft size={30} />
      </button>
    </div>
  );
};

export default Slider;
