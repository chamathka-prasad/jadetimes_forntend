import { Link } from "react-router-dom";
import { BsChevronRight, BsChevronDoubleRight, BsChevronLeft, BsChevronDoubleLeft } from "react-icons/bs";

import PictureLink from "./PictureLink";

import usePagination from "../hooks/usePagination";

const SearchPagination = ({ articles }) => {
  const [currentIndex, visiblePages, pageItems, lastIndex, prevArticles, nextArticles, handlePrevDisabled, handleNextDisabled, handleCurrentArticle] = usePagination(3, articles.length);
  return (
    <>
      <div className="flex flex-col gap-4 py-4 lg:grid lg:grid-cols-3">
        {articles.slice(currentIndex * pageItems - pageItems, pageItems * currentIndex).map((article, index) => (
          <article key={index} className="border border-neutral-300 p-4">
            <div className="flex flex-row gap-4">
              <h2>
                <Link to={article.link} className="text-lg line-clamp-3 overflow-anywhere lg:text-sm">
                  {article.title}
                </Link>
              </h2>
              <PictureLink link={article.link}>
                <img src={article.image} alt={article.title} className="min-w-20 w-20 min-h-20 h-20 object-cover object-center lg:min-w-16 lg:w-16 lg:min-h-16 lg:h-16" />
              </PictureLink>
            </div>
            <Link to={article.categoryLink} className="w-fit text-lg mt-2 block text-[#686868] font-light lg:text-sm">
              {article.categoryTitle}
            </Link>
            <div className="whitespace-nowrap mt-2 lg:text-xs">{article.posted}</div>
          </article>
        ))}
      </div>
      {lastIndex !== 1 && (
        <div className="flex flex-row gap-8 items-center justify-center">
          <button onClick={handlePrevDisabled} disabled={currentIndex <= 3 || lastIndex === 5} className={currentIndex <= 3 || lastIndex === 5 ? "text-neutral-500" : undefined}>
            <BsChevronDoubleLeft size={20} />
          </button>
          <button onClick={prevArticles} className={(currentIndex === 1 && "text-neutral-500") || undefined} disabled={currentIndex === 1}>
            <BsChevronLeft size={20} />
          </button>
          {screen !== "large" && (
            <div className="w-20 text-center text-lg">
              {currentIndex}/{lastIndex}
            </div>
          )}
          {screen === "large" && (
            <div className="flex flex-row gap-4">
              {visiblePages.map(
                (button) =>
                  button > 0 &&
                  button <= lastIndex && (
                    <button
                      key={button}
                      onClick={() => {
                        handleCurrentArticle(button);
                      }}
                      className={(currentIndex === button && "text-neutral-500 px-2") || "px-2"}
                    >
                      {button}
                    </button>
                  )
              )}
            </div>
          )}
          <button onClick={nextArticles} className={(currentIndex === lastIndex && "text-neutral-500") || undefined} disabled={currentIndex === lastIndex}>
            <BsChevronRight size={20} />
          </button>
          <button onClick={handleNextDisabled} disabled={currentIndex === lastIndex || lastIndex === 5} className={currentIndex >= lastIndex - 2 || lastIndex === 5 ? "text-neutral-500" : undefined}>
            <BsChevronDoubleRight size={20} />
          </button>
        </div>
      )}
    </>
  );
};

export default SearchPagination;
