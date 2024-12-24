import { Link } from "react-router-dom";

import PictureLink from "./PictureLink";
import PaginationButtons from "./PaginationButtons";

import useWindowSize from "../hooks/useWindowSize";
import usePagination from "../hooks/usePagination";

const Pagination = ({ articles }) => {
  const screenSize = useWindowSize();
  const [currentIndex, visiblePages, pageItems, lastIndex, prevArticles, nextArticles, handlePrevDisabled, handleNextDisabled, handleCurrentArticle] = usePagination(1, articles.length);

  return (
    <>
      <div className="flex flex-col gap-4 py-4 lg:py-5">
        {articles.slice(currentIndex * pageItems - pageItems, pageItems * currentIndex).map((article, index) => (
          <article className="flex flex-row gap-4 border border-neutral-300 p-4 items-center lg:items-start lg:grid lg:grid-cols-4" key={index}>
            <PictureLink link={article.link} className="lg:order-2">
              <img src={article.image} alt={article.title} className="min-w-24 w-24 min-h-24 h-24 object-cover object-center lg:w-full lg:h-full" />
            </PictureLink>
            <div className="col-span-3">
              <Link to={article.link} className="line-clamp-3 overflow-wrap-anywhere lg:text-lg lg:mb-2">
                {article.title}
              </Link>
              {screenSize >= 1200 && (
                <div>
                  <Link className="mb-1 lg:block lg:w-fit lg:text-xs">{article.authorName}</Link>
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
        <PaginationButtons
          currentIndex={currentIndex}
          lastIndex={lastIndex}
          prevArticles={prevArticles}
          nextArticles={nextArticles}
          handlePrevDisabled={handlePrevDisabled}
          handleNextDisabled={handleNextDisabled}
          handleCurrentArticle={handleCurrentArticle}
          visiblePages={visiblePages}
        />
      )}
    </>
  );
};

export default Pagination;
