import { Link } from "react-router-dom";
import { BsChevronRight, BsChevronDoubleRight, BsChevronLeft, BsChevronDoubleLeft } from "react-icons/bs";

import PictureLink from "./PictureLink";

import useWindowSize from "../hooks/useWindowSize";
import usePagination from "../hooks/usePagination";

const Pagination = ({ articles }) => {
  const screen = useWindowSize();
  const [currentIndex, visiblePages, pageItems, lastIndex, prevArticles, nextArticles, handlePrevDisabled, handleNextDisabled, handleCurrentArticle] = usePagination(1, articles.length);

  return (
    <>
      <div className="flex flex-col gap-4 py-4">
        {articles.slice(currentIndex * pageItems - pageItems, pageItems * currentIndex).map((article, index) => (
          <article className="flex flex-row gap-4 border border-neutral-300 p-4 items-center lg:items-start lg:grid lg:grid-cols-4" key={index}>
            <PictureLink link={article.link} className="lg:order-2">
              <img src={article.image} alt={article.title} className="min-w-24 w-24 min-h-24 h-24 object-cover object-center lg:w-full lg:h-full" />
            </PictureLink>
            <div className="col-span-3">
              <h2>
                <Link to={article.link} className="line-clamp-3 overflow-anywhere lg:text-lg lg:mb-2">
                  {article.title}
                </Link>
              </h2>
              {screen === "large" && (
                <div>
                  <Link className="lg:block lg:w-fit lg:text-xs">{article.authorName}</Link>
                  <div className="whitespace-nowrap lg:text-xs">
                    <span>{article.posted}</span>
                    <span className="w-[2px] h-[2px] bg-neutral-900 inline-block mx-2 align-middle"></span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
              )}
            </div>
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

export default Pagination;
