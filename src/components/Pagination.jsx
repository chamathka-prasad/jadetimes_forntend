import { useState } from "react";
import PictureLink from "./PictureLink";
import { Link } from "react-router-dom";
import { BsChevronRight, BsChevronDoubleRight, BsChevronLeft, BsChevronDoubleLeft } from "react-icons/bs";

const Pagination = ({ articles }) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const pageItems = 5;
  const lastIndex = Math.ceil(articles.length / pageItems);

  function prevArticles() {
    setCurrentIndex((prev) => (prev === 1 ? 1 : prev - 1));
  }

  function nextArticles() {
    setCurrentIndex((prev) => (prev === lastIndex ? lastIndex : prev + 1));
  }

  return (
    <>
      <div className="p-4 flex flex-col gap-4 max-w-[1300px] mx-auto">
        {articles.slice(currentIndex * pageItems - pageItems, pageItems * currentIndex).map((article, index) => (
          <article className="flex flex-row gap-4 border border-neutral-300 p-4 items-center lg:items-start lg:grid lg:grid-cols-4" key={index}>
            <PictureLink link={article.link} className="lg:order-2">
              <img src={article.image} alt={article.title} className="min-w-24 w-24 min-h-24 h-24 object-cover object-center lg:w-full lg:h-full" />
            </PictureLink>
            <div className="col-span-3">
              <h2>
                <Link to={article.link} className="line-clamp-3 overflow-anywhere lg:text-lg">
                  {article.title}
                </Link>
              </h2>
            </div>
          </article>
        ))}
      </div>
      <div className="flex flex-row gap-8 items-center justify-center mb-4">
        <button
          onClick={() => {
            setCurrentIndex(1);
          }}
          className={currentIndex === 1 ? "text-neutral-500" : ""}
          disabled={currentIndex === 1}
        >
          <BsChevronDoubleLeft size={20} />
        </button>
        <button onClick={prevArticles} className={currentIndex === 1 ? "text-neutral-500" : ""} disabled={currentIndex === 1}>
          <BsChevronLeft size={20} />
        </button>
        <div>
          <div className="w-20 text-center text-lg">
            {currentIndex}/{lastIndex}
          </div>
        </div>
        <button onClick={nextArticles} className={currentIndex === lastIndex ? "text-neutral-500" : ""} disabled={currentIndex === lastIndex}>
          <BsChevronRight size={20} />
        </button>
        <button
          onClick={() => {
            setCurrentIndex(lastIndex);
          }}
          className={currentIndex === lastIndex ? "text-neutral-500" : ""}
          disabled={currentIndex === lastIndex}
        >
          <BsChevronDoubleRight size={20} />
        </button>
      </div>
    </>
  );
};

export default Pagination;
