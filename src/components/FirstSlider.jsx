import { Link } from "react-router-dom";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

import PictureLink from "./PictureLink";

import useCarousel from "../hooks/useCarousel";

const FirstSlider = ({ articles }) => {
  const [currentIndex, scrollRef, handleNextSlide, handlePreviousSlide] = useCarousel(articles.length);

  return (
    <div className="lg:col-span-6 lg:border lg:border-neutral-300 lg:mr-10">
      <div className="relative">
        <div className="flex flex-row overflow-x-hidden snap-x snap-mandatory" ref={scrollRef}>
          {articles.map((article, index) => (
            <article key={index} className={`${currentIndex === index ? "" : "invisible"} snap-end flex-none w-full duration-1000`.trim()}>
              <PictureLink>
                <img src={article.image} alt={articles[0].title} />
              </PictureLink>
              <div className="flex flex-col p-4 gap-4">
                <div>
                  <Link className="block w-fit text-xs">{article.authorName}</Link>
                  <div className="whitespace-nowrap text-xs">{article.posted}</div>
                </div>
                <Link to={article.categoryLink} className="w-fit text-sm text-[#686868] font-light">
                  {article.categoryTitle}
                </Link>
                <h3>
                  <Link className="text-lg text-[1.375rem] line-clamp-2">{article.title}</Link>
                </h3>
                <p className="line-clamp-1 text-base">{article.title}</p>
              </div>
            </article>
          ))}
        </div>
        {currentIndex !== articles.length - 1 && (
          <button className="text-neutral-900 absolute top-1/3 right-4" onClick={handleNextSlide} aria-label="next slide">
            <BsChevronRight size={35} />
          </button>
        )}
        {currentIndex !== 0 && (
          <button className="text-neutral-900 absolute top-1/3 left-4" onClick={handlePreviousSlide} aria-label="previous slide">
            <BsChevronLeft size={35} />
          </button>
        )}
      </div>
    </div>
  );
};

export default FirstSlider;
