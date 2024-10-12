import { Link } from "react-router-dom";
import { useState, useRef } from "react";

const ImageSlider = ({ articles }) => {
  const [Index, setIndex] = useState(0);
  const scrollRef = useRef(null);
  return (
    <div className="relative">
      <div
        className="flex overflow-hidden h-80 snap-x snap-mandatory"
        ref={scrollRef}
      >
        {articles.map((article, index) => (
          <article
            style={{
              backgroundImage: `url(${article.image})`,
              //   translate: `${-100 * Index}%`,
              //   transition: "translate 700ms ease-in",
            }}
            key={index}
            className={`flex-shrink-0 flex-grow-0 bg-center bg-cover w-full snap-start`}
          >
            <picture className="hidden">
              <img src={article.image} alt={article.title} />
            </picture>
            <div className="flex justify-between flex-col h-full p-8 bg-[#00000050] text-white">
              <div>
                <Link className="hidden">{article.authorName}</Link>
                <div>{article.posted}</div>
              </div>
              <Link className="hidden" to={article.categoryLink}>
                {article.categoryTitle}
              </Link>
              <h3>
                <Link className="text-xl">{article.title}</Link>
              </h3>
              <p className="hidden">{article.title}</p>
            </div>
          </article>
        ))}
      </div>
      <button
        onClick={() => {
          setIndex((prevIndex) => {
            const newIndex = prevIndex === 0 ? 0 : prevIndex - 1;
            return newIndex;
          });
          scrollRef.current.scrollBy({
            top: 0,
            left: -scrollRef.current.clientWidth,
            behavior: "smooth",
          });
        }}
        className={`absolute top-1/2 -translate-y-1/2 left-4 bg-white px-2 rounded-sm ${
          Index === 0 ? "hidden" : ""
        }`}
      >
        Prev
      </button>
      <button
        onClick={() => {
          setIndex((prevIndex) => {
            const newIndex =
              prevIndex === articles.length - 1
                ? articles.length - 1
                : prevIndex + 1;
            return newIndex;
          });
          scrollRef.current.scrollBy({
            top: 0,
            left: scrollRef.current.clientWidth,
            behavior: "smooth",
          });
        }}
        className={`absolute top-1/2 -translate-y-1/2 right-4 bg-white px-2 rounded-sm ${
          Index === articles.length - 1 ? "hidden" : ""
        }`}
      >
        Next
      </button>
      <div className="flex flex-row gap-2 items-center justify-center absolute bottom-4 left-1/2 -translate-x-1/2">
        {articles.map((_, index) => (
          <button
            onClick={() => {
              setIndex(index);
              scrollRef.current.scrollTo({
                top: 0,
                left: scrollRef.current.clientWidth * index,
                behavior: "smooth",
              });
            }}
            className="bg-white text-black w-2 h-2 flex items-center justify-center rounded-full text-xs duration-300 hover:w-3 hover:h-3"
            key={index}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
