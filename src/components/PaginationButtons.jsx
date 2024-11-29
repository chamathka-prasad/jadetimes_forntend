import { BsChevronRight, BsChevronDoubleRight, BsChevronLeft, BsChevronDoubleLeft } from "react-icons/bs";

import useWindowSize from "../hooks/useWindowSize";

const PaginationButtons = ({ currentIndex, lastIndex, prevArticles, nextArticles, handlePrevDisabled, handleNextDisabled, handleCurrentArticle, visiblePages }) => {
  const screenSize = useWindowSize();
  return (
    <div className="flex flex-row gap-8 items-center justify-center">
      <button onClick={handlePrevDisabled} disabled={currentIndex <= 3 || lastIndex === 5} className={currentIndex <= 3 || lastIndex === 5 ? "text-neutral-500" : "text-black"}>
        <BsChevronDoubleLeft size={20} />
      </button>
      <button onClick={prevArticles} className={(currentIndex === 1 && "text-neutral-500") || "text-black"} disabled={currentIndex === 1}>
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
                  className={`px-2 ${currentIndex === button ? "text-[#FF322E]" : ""}`.trim()}
                >
                  {button}
                </button>
              )
          )}
        </div>
      )}
      <button onClick={nextArticles} className={(currentIndex === lastIndex && "text-neutral-500") || "text-black"} disabled={currentIndex === lastIndex}>
        <BsChevronRight size={20} />
      </button>
      <button onClick={handleNextDisabled} disabled={currentIndex === lastIndex || lastIndex === 5} className={currentIndex >= lastIndex - 2 || lastIndex === 5 ? "text-neutral-500" : "text-black"}>
        <BsChevronDoubleRight size={20} />
      </button>
    </div>
  );
};

export default PaginationButtons;
