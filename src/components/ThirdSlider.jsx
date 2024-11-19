import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { FaChevronRight } from "react-icons/fa6";

import useWindowSize from "../hooks/useWindowSize";

const ThirdSlider = ({ articles, className }) => {
  const screenSize = useWindowSize();
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
      <div className="flex flex-col overflow-y-hidden h-[800px] snap-y snap-mandatory relative" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
        {articles.map((article, index) => (
          <article
            style={{
              backgroundImage: `url(${article.image})`,
            }}
            className={`w-full bg-center bg-cover bg-no-repeat snap-start absolute z-0 duration-1000 ease-in-out ${
              index === currentIndex ? "z-10 top-0" : index < currentIndex ? "-top-full" : "top-full"
            }`}
            key={index}
            aria-hidden={index !== currentIndex}
          >
            <div
              className={`bg-gradient-to-t from-black to-transparent relative ${currentIndex !== index && "invisible opacity-0"}`}
              style={{ transition: `visibility 1s ease-in-out, opacity 1s ease-in-out` }}
            >
              <div className="h-[800px] flex flex-col p-4">
                <div className="mt-auto mb-16 flex flex-col gap-4 max-w-[850px] md:gap-8 mx-auto md:flex-row md:items-center">
                  <iframe
                    title={article.title}
                    width="100%"
                    src="https://www.youtube.com/embed/?autoplay=0&mute=0&controls=1&loop=0&rel=0&origin=https://www.jadetimes.com&playsinline=1"
                    className="aspect-video md:w-1/2"
                    sandbox="allow-same-origin allow-scripts allow-popups allow-presentation"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    loading="lazy"
                  ></iframe>
                  <div className="text-white md:w-1/2 flex flex-col gap-4 md:justify-between md:h-full">
                    {screenSize !== "small" && (
                      <a
                        href="https://www.youtube.com/@JadeTimes"
                        className="md:tracking-widest md:bg-neutral-800 md:block md:w-fit md:text-nowrap md:uppercase md:text-[0.625rem] md:px-2 md:py-1 lg:duration-300 lg:hover:bg-white lg:hover:text-black"
                      >
                        Youtube updates
                      </a>
                    )}
                    <h3 className="text-sm lg:text-base">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, autem</h3>
                    <p className="text-xs">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam facere eos minus, non officia beatae molestiae laudantium ullam quasi nisi corporis voluptates hic vitae
                      mollitia iste et itaque alias repellendus consectetur. Nisi tempore iste minima nam nostrum nulla repudiandae perspiciatis.
                    </p>
                    <div className="flex flex-row gap-4">
                      {screenSize === "small" && (
                        <a href="https://www.youtube.com/@JadeTimes" className="bg-neutral-800 block w-fit text-nowrap uppercase text-sm px-3 py-2">
                          Youtube updates
                        </a>
                      )}
                      <Link href={article.link} className="flex w-fit items-center text-sm capitalize text-nowrap lg:duration-300 lg:hover:opacity-50" aria-label="read more about this article">
                        Read more
                        <FaChevronRight className="inline" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-neutral-600 absolute bottom-4 left-0 text-sm right-0 max-w-[1300px] mx-auto px-4">
                <Link>Photo By</Link>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="flex flex-row gap-3 items-center justify-center absolute bottom-[2.3rem] w-full z-10">
        {articles.map((_, index) => (
          <button
            onClick={() => {
              setCurrentIndex(index);
            }}
            className="w-[8px] h-[8px] flex items-center justify-center rounded-full text-xs bg-white lg:w-[6px] lg:h-[6px]"
            key={index}
            aria-label={`go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ThirdSlider;
