import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { FaChevronRight } from "react-icons/fa6";

const ImageSlider = ({ articles }) => {
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
      const newCurrentIndex =
        prevCurrentIndex === articles.length - 1 ? 0 : prevCurrentIndex + 1;
      return newCurrentIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevCurrentIndex) => {
      const newCurrentIndex =
        prevCurrentIndex === 0 ? articles.length - 1 : prevCurrentIndex - 1;
      return newCurrentIndex;
    });
  };

  return (
    <div className="relative">
      <div
        className="flex flex-col overflow-y-hidden h-[800px] snap-y snap-mandatory"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {articles.map((article, index) => (
          <article
            style={{
              backgroundImage: `url(${article.image})`,
              transform: `translateY(${-100 * currentIndex}%)`,
              transition: `transform 1s cubic-bezier(0.75, 0, 0.25, 1)`,
            }}
            className="h-full w-full bg-center bg-cover bg-no-repeat snap-start"
            key={index}
            aria-hidden={index !== currentIndex}
          >
            <div className="h-full bg-gradient-to-t from-black to-transparent">
              <div className="h-[800px] flex flex-col p-4">
                <div className="mt-auto mb-16 flex flex-col gap-4 max-w-[850px] md:gap-8 mx-auto md:flex-row md:items-center">
                  <iframe
                    title="What We Know About Trump Shooting Suspect Thomas Matthew Crooks | JadeTimes"
                    width="100%"
                    src="https://www.youtube.com/embed/uHcsQKx6AzY?autoplay=0&mute=0&controls=1&loop=0&origin=https://www.jadetimes.com&playsinline=1&enablejsapi=1"
                    className="aspect-video md:w-1/2"
                    sandbox="allow-same-origin allow-scripts allow-popups allow-presentation"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    loading="lazy"
                  ></iframe>
                  <div className="text-white md:w-1/2">
                    <a
                      href="https://www.youtube.com/@JadeTimes"
                      className="hidden tracking-widest md:bg-neutral-800 md:inline-block md:mb-4 md:text-nowrap md:uppercase md:font-medium md:text-xs md:px-2 md:py-1 md:duration-300 md:hover:bg-white md:hover:text-black"
                    >
                      Youtube updates
                    </a>
                    <h3 className="text-sm mb-3 lg:text-base">
                      How Sri Lanka's 2024 Election Could Shape the Future of
                      Entrepreneurs
                    </h3>
                    <p className="text-xs mb-4">
                      We explore how the upcoming election could shape
                      opportunities and challenges for business owners and
                      startups across the country. A shocking revelation about
                      the connection between these two groups, shedding light on
                      hidden influences and funding sources.
                    </p>
                    <div>
                      <a
                        href="https://www.youtube.com/@JadeTimes"
                        className="bg-neutral-800 inline-block text-nowrap uppercase font-medium text-xs px-3 py-2 mr-4 duration-300 md:hidden hover:bg-white hover:text-black"
                      >
                        Youtube updates
                      </a>
                      <Link
                        href="https://www.jadetimes.com/post/shocking-revelations-mr-neomal-perera-on-hidden-influences-in-sri-lanka-s-political-sphere"
                        className="text-xs capitalize text-nowrap duration-300 hover:opacity-50"
                        aria-label="read more about this article"
                      >
                        Read more
                        <FaChevronRight className="inline" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="flex flex-row gap-2 items-center justify-center absolute bottom-9 w-full">
        {articles.map((_, index) => (
          <button
            onClick={() => {
              setCurrentIndex(index);
            }}
            className={`w-[6px] h-[6px] flex items-center justify-center rounded-full text-xs bg-white`}
            key={index}
            aria-label={`go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
