import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import PictureLink from "./PictureLink";

const FirstSlider = ({ articles, className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef(null);
  return (
    <div className={className}>
      <div className="relative">
        <div
          className="flex flex-row overflow-x-hidden snap-mandatory snap-x"
          ref={scrollRef}
        >
          {articles.map((article, index) => (
            <article
              className={`snap-start shrink-0 grow-0 w-full duration-500 ${currentIndex === index ? "visible" : "invisible"}`}
              aria-hidden={currentIndex !== index}
              key={index}
            >
              <PictureLink>
                <img src={article.image} alt={articles[0].title} />
              </PictureLink>
              <div className="flex flex-col p-4 gap-4">
                <div>
                  <Link className="inline-block text-xs">
                    {article.authorName}
                  </Link>
                  <div className="whitespace-nowrap text-xs">
                    {article.posted}
                  </div>
                </div>
                <Link
                  to={article.categoryLink}
                  className="w-fit text-sm text-[#686868] font-light"
                >
                  {article.categoryTitle}
                </Link>
                <h3>
                  <Link className="text-lg text-[1.375rem] line-clamp-2">
                    {article.title}
                  </Link>
                </h3>
                <p className="line-clamp-1 text-base">{article.title}</p>
              </div>
            </article>
          ))}
        </div>
        <button
          className={`text-neutral-900 absolute top-1/3 right-4 ${currentIndex === articles.length - 1 ? "hidden" : "block"}`}
          onClick={() => {
            scrollRef.current.scrollBy({
              top: 0,
              left: scrollRef.current.clientWidth,
              behavior: "smooth",
            });
            setCurrentIndex((prevCurrentIndex) => {
              const newCurrentIndex =
                prevCurrentIndex === articles.length - 1
                  ? 0
                  : prevCurrentIndex + 1;
              return newCurrentIndex;
            });
            console.log(currentIndex);
          }}
          aria-label="next slide"
        >
          <FaChevronRight size={32} />
        </button>
        <button
          className={`text-neutral-900 absolute top-1/3 left-4 ${currentIndex === 0 ? "hidden" : "block"}`}
          onClick={() => {
            scrollRef.current.scrollBy({
              top: 0,
              left: -scrollRef.current.clientWidth,
              behavior: "smooth",
            });
            setCurrentIndex((prevCurrentIndex) => {
                const newCurrentIndex =
                  prevCurrentIndex === 0
                    ? articles.length - 1
                    : prevCurrentIndex - 1;
                return newCurrentIndex;
              });
          }}
          aria-label="previous slide"
        >
          <FaChevronLeft size={32} />
        </button>
      </div>
    </div>
  );
};

export default FirstSlider;
