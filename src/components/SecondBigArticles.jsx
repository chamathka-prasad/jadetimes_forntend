import { Link } from "react-router-dom";

import PictureLink from "./PictureLink";

import useWindowSize from "../hooks/useWindowSize";

const SecondBigArticles = ({ articles }) => {
  const screenSize = useWindowSize();
  return (
    <div className="m-4 flex flex-col gap-4 md:m-0 md:grid md:grid-cols-2 md:col-span-2 md:gap-4 lg:grid-cols-10 lg:gap-5 lg:col-span-full">
      {articles.map((article, index) => (
        <article key={index} className="flex flex-row p-4 gap-4 justify-between border border-neutral-300 lg:p-0 lg:flex-col lg:gap-0 lg:col-span-2">
          <PictureLink link={article.link} className="order-2 lg:order-none">
            <img src={article.image} alt={article.title} className="min-w-24 w-24 min-h-24 h-24 object-cover object-center lg:w-full lg:h-full" />
          </PictureLink>
          <div className="flex flex-col justify-between gap-4 lg:p-4">
            {screenSize === "large" && (
              <Link to={article.categoryLink} className="lg:w-fit text-sm font-light text-neutral-500 lg:order-[-1]">
                {article.categoryTitle}
              </Link>
            )}
            <h2>
              <Link to={article.link} className="overflow-wrap-anywhere line-clamp-2 lg:text-sm lg:line-clamp-3">
                {article.title}
              </Link>
            </h2>
            {screenSize === "large" && <p className="lg:line-clamp-2 lg:text-xs">{article.title}</p>}
            {screenSize !== "large" && <div className="whitespace-nowrap lg:text-xs">{article.posted}</div>}
          </div>
        </article>
      ))}
    </div>
  );
};

export default SecondBigArticles;
