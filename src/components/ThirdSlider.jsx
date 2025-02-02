import { Link } from "react-router-dom";
import { useState, useRef } from "react";

import YouTubeArticle from "./YouTubeArticle.";
import Iframe from "./Iframe";

const ThirdSlider = ({ articles, className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
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
    } else if (distance < -50) {
      prevSlide();
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prevCurrentIndex) => {
      const newCurrentIndex = prevCurrentIndex === articles.length - 1 ? 0 : prevCurrentIndex + 1;
      return newCurrentIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevCurrentIndex) => {
      const newCurrentIndex = prevCurrentIndex === 0 ? articles.length - 1 : prevCurrentIndex - 1;
      return newCurrentIndex;
    });
  };

  return (
    <div className={`relative h-[800px] ${className}`}>
      <div className="flex flex-col overflow-y-hidden h-[800px] relative" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
        {articles.map((article, index) => (
          <article
            style={{
              backgroundImage: `url(${article.image})`,
            }}
            className={`w-full bg-center bg-cover bg-no-repeat absolute z-0 duration-1000 ease-in-out ${
              index === currentIndex ? "z-10 top-0" : index < currentIndex ? "-top-full" : "top-full"
            }`}
            key={index}
          >
            <div
              className={`bg-gradient-to-t from-black to-transparent relative ${currentIndex === index ? "" : "invisible"}`.trim()}
              style={{ transition: `visibility 1s ease-in-out` }}
            >
              <div className="h-[800px] flex flex-col">
                <div className="mt-auto p-4 mb-16 flex flex-col gap-4 max-w-[900px] w-full mx-auto md:grid md:grid-cols-2 lg:gap-5">
                  <Iframe title={article.title} videoId="" />
                  <YouTubeArticle className="text-white flex flex-col gap-4 md:justify-center" article={article} />
                </div>
              </div>
              <div className="text-neutral-500 absolute bottom-4 left-0 text-sm right-0 max-w-[900px] mx-auto px-4 lg:max-w-[1280px]">
                <Link>Photo By</Link>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="flex flex-row gap-4 items-center justify-center absolute left-1/2 -translate-x-1/2 max-w-[1288px] bottom-12 w-full z-10">
        {articles.map((_, index) => (
          <button
            onClick={() => {
              setCurrentIndex(index);
            }}
            className={`w-[8px] h-[8px] flex items-center justify-center rounded-full text-xs border border-white focus:rounded-full ${currentIndex === index ? "bg-white" : ""}`.trim()}
            key={index}
            aria-label={`go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ThirdSlider;
