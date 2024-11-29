import { Link } from "react-router-dom";

import PictureLink from "./PictureLink";

import useWindowSize from "../hooks/useWindowSize";

const ThirdBigArticles = ({ articles }) => {
  const screenSize = useWindowSize();
  return (
    <div className="flex flex-col gap-4 p-4 md:p-0 md:col-span-2 md:grid md:grid-cols-2 md:row-span-2 lg:grid-cols-4 lg:col-span-full lg:row-start-1 lg:row-span-1 lg:gap-0">
      {articles.map((article, index) => (
        <article key={index} className="flex flex-col border border-neutral-300 lg:border-y-0 lg:border-l-0 justify-between gap-4 lg:pr-6 lg:pl-6 lg:border-r lg:border-neutral-300 lg:first:pl-0 lg:last:pr-0 lg:last:border-none">
          {screenSize !== "large" && (
            <PictureLink link={article.link}>
              <img src={article.image} alt={article.title} />
            </PictureLink>
          )}
          <div className="flex flex-col justify-between gap-4 px-4 pb-4 lg:px-0 lg:pb-0">
            <div className="whitespace-nowrap lg:text-xs">{article.posted}</div>
            <h2>
              <Link to={article.link} className="text-lg line-clamp-2 lg:text-base">
                {article.title}
              </Link>
            </h2>
          </div>
        </article>
      ))}
    </div>
  );
};

export default ThirdBigArticles;
