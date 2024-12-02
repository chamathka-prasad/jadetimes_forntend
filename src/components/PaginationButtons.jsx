import { BsChevronRight, BsChevronDoubleRight, BsChevronLeft, BsChevronDoubleLeft } from "react-icons/bs";

import useWindowSize from "../hooks/useWindowSize";

const PaginationButtons = ({ currentIndex, lastIndex, prevArticles, nextArticles, handlePrevDisabled, handleNextDisabled, handleCurrentArticle, visiblePages }) => {
  const screenSize = useWindowSize();
  return (
    <div className="flex flex-row gap-8 items-center justify-center">
      <button onClick={handlePrevDisabled} disabled={currentIndex <= 3 || lastIndex === 5} className={currentIndex <= 3 || lastIndex === 5 ? "text-neutral-500" : "text-black"} aria-label="go to first page">
        <BsChevronDoubleLeft size={20} />
      </button>
      <button onClick={prevArticles} className={(currentIndex === 1 && "text-neutral-500") || "text-black"} disabled={currentIndex === 1} aria-label="go to previous page">
        <BsChevronLeft size={20} />
      </button>
      {screenSize !== "large" && (
        <div className="w-20 text-center text-lg">
          {currentIndex}/{lastIndex}
        </div>
      )}
      {screenSize === "large" && (
        <div className="flex flex-row gap-4 text-neutral-900">
          {visiblePages.map(
            (button) =>
              button > 0 &&
              button <= lastIndex && (
                <button
                  key={button}
                  onClick={() => {
                    handleCurrentArticle(button);
                  }}
                  className={`px-2 ${currentIndex === button ? "text-accent" : ""}`.trim()}
                >
                  {button}
                </button>
              )
          )}
        </div>
      )}
      <button onClick={nextArticles} className={(currentIndex === lastIndex && "text-neutral-500") || "text-black"} disabled={currentIndex === lastIndex} aria-label="go to next page">
        <BsChevronRight size={20} />
      </button>
      <button onClick={handleNextDisabled} disabled={currentIndex === lastIndex || lastIndex === 5} className={currentIndex >= lastIndex - 2 || lastIndex === 5 ? "text-neutral-500" : "text-black"} aria-label="go to last page">
        <BsChevronDoubleRight size={20} />
      </button>
    </div>
  );
};

export default PaginationButtons;
