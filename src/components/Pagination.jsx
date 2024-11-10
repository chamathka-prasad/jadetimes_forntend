import { useState } from "react";
import { Link } from "react-router-dom";
import { BsChevronRight, BsChevronDoubleRight, BsChevronLeft, BsChevronDoubleLeft } from "react-icons/bs";

import PictureLink from "./PictureLink";

import useWindowSize from "../hooks/useWindowSize";

const Pagination = ({ articles }) => {
  const screen = useWindowSize();
  const [currentIndex, setCurrentIndex] = useState(1);
  const [visiblePages, setVisiblePages] = useState([1, 2, 3, 4, 5]);
  const pageItems = 1;
  const lastIndex = Math.ceil(articles.length / pageItems);

  function prevArticles() {
    setCurrentIndex((prev) => {
      const newIndex = prev === 1 ? 1 : prev - 1;
      updateVisiblePages(newIndex);
      return newIndex;
    });
  }

  function nextArticles() {
    setCurrentIndex((prev) => {
      const newIndex = prev === lastIndex ? lastIndex : prev + 1;
      updateVisiblePages(newIndex);
      return newIndex;
    });
  }

  function updateVisiblePages(index) {
    if (index <= 3) {
      setVisiblePages([1, 2, 3, 4, 5]);
    } else if (index >= lastIndex - 1) {
      setVisiblePages([lastIndex - 4, lastIndex - 3, lastIndex - 2, lastIndex - 1, lastIndex]);
    } else {
      setVisiblePages([index - 2, index - 1, index, index + 1, index + 2]);
    }
  }

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
          {screen === "large" && (
            <button
              onClick={() => {
                setCurrentIndex(1);
                setVisiblePages([1, 2, 3, 4, 5]);
              }}
              disabled={currentIndex <= 3 || lastIndex === 5}
              className={`${currentIndex <= 3 || lastIndex === 5 ? "text-neutral-500" : null}`}
            >
              <BsChevronDoubleLeft size={20} />
            </button>
          )}
          {screen !== "large" && (
            <button
              onClick={() => {
                setCurrentIndex(1);
              }}
              disabled={currentIndex === 1}
              className={`${currentIndex === 1 && "text-neutral-500"}`}
            >
              <BsChevronDoubleLeft size={20} />
            </button>
          )}
          <button onClick={prevArticles} className={currentIndex === 1 && "text-neutral-500"} disabled={currentIndex === 1}>
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
                        setCurrentIndex(button);
                        updateVisiblePages(button);
                      }}
                      className={`px-2 ${currentIndex === button && "text-neutral-500"}`}
                    >
                      {button}
                    </button>
                  )
              )}
            </div>
          )}
          <button onClick={nextArticles} className={currentIndex === lastIndex && "text-neutral-500"} disabled={currentIndex === lastIndex}>
            <BsChevronRight size={20} />
          </button>
          {screen !== "large" && (
            <button
              onClick={() => {
                setCurrentIndex(lastIndex);
              }}
              disabled={currentIndex === lastIndex}
              className={`${currentIndex === lastIndex && "text-neutral-500"}`}
            >
              <BsChevronDoubleRight size={20} />
            </button>
          )}
          {screen === "large" && (
            <button
              onClick={() => {
                setCurrentIndex(lastIndex);
                setVisiblePages([lastIndex - 4, lastIndex - 3, lastIndex - 2, lastIndex - 1, lastIndex]);
              }}
              disabled={currentIndex === lastIndex || lastIndex === 5}
              className={`${currentIndex >= lastIndex - 2 || lastIndex === 5 ? "text-neutral-500" : ""}`}
            >
              <BsChevronDoubleRight size={20} />
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default Pagination;
