import { useRef, useState } from "react";
import { FaCircle } from "react-icons/fa6";

const Slider = ({ children, length }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartRef = useRef(0);
  const touchEndRef = useRef(0);

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
      console.log(currentSlide);
    } else if (distance < -50) {
      prevSlide();
      console.log(currentSlide);
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prevCurrentSlide) => {
      const newCurrentSlide = prevCurrentSlide === length - 1 ? 0 : prevCurrentSlide + 1;
      return newCurrentSlide;
    });
  };

  const prevSlide = () => {
    setCurrentSlide((prevCurrentSlide) => {
      const newCurrentSlide = prevCurrentSlide === 0 ? length - 1 : prevCurrentSlide - 1;
      return newCurrentSlide;
    });
  };

  return (
    <div className="relative">
      <div
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="h-[805px] overflow-y-hidden"
      >
        {children}
      </div>
    </div>
  );
};

export default Slider;
