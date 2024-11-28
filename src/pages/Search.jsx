import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

import Articles from "../routes/Articles";

import PictureLink from "../components/PictureLink";
import PaginationButtons from "../components/PaginationButtons";

import usePagination from "../hooks/usePagination";

const Search = () => {
  const [currentIndex, visiblePages, pageItems, lastIndex, prevArticles, nextArticles, handlePrevDisabled, handleNextDisabled, handleCurrentArticle] = usePagination(3, Articles.length);
  return (
    <section className="p-4">
      <div className="max-w-[1000px] mx-auto">
        <div className="md:flex md:flex-row md:gap-4 md:items-center">
          <h1 className="text-3xl font-semibold md:text-2xl text-[#111111]">Search</h1>
          <div className="mt-5 relative md:mt-0 md:w-full">
            <input
              className="border-2 border-[#17171724] w-full block rounded-md text-xl duration-300 placeholder:text-neutral-500 py-3 pl-12 pr-4 md:text-base focus-visible:outline-none focus:border-neutral-900 focus:rounded-md lg:hover:border-neutral-900"
              type="text"
              placeholder="What are you looking for ?"
            />
            <BsSearch size={20} className="text-black absolute left-4 top-1/2 -translate-y-1/2 -z-10" />
          </div>
        </div>
        <div className="flex flex-col gap-4 py-4 lg:grid lg:grid-cols-3">
          {Articles.slice(currentIndex * pageItems - pageItems, pageItems * currentIndex).map((article, index) => (
            <article key={index} className="border border-neutral-300 p-4 text-neutral-900">
              <div className="flex flex-row gap-4">
                <h2>
                  <Link to={article.link} className="text-lg line-clamp-3 overflow-wrap-anywhere lg:text-sm">
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
              <div className="whitespace-nowrap mt-2 lg:text-xs lg:mt-3">{article.posted}</div>
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
      </div>
    </section>
  );
};

export default Search;
