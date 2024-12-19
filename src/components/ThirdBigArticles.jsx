import { Link } from "react-router-dom";

import PictureLink from "./PictureLink";

import useWindowSize from "../hooks/useWindowSize";

const ThirdBigArticles = ({ articles }) => {
  const screenSize = useWindowSize();
  return (
    <div className="flex flex-col gap-4 m-4 sm:m-0 sm:col-span-2 sm:grid sm:grid-cols-2 sm:row-span-2 lg:grid-cols-4 lg:col-span-full lg:row-start-1 lg:row-span-1 lg:gap-0">
      {articles.map((article, index) => (
        <article
          key={index}
          className="flex flex-col border border-neutral-300 lg:border-y-0 lg:border-l-0 lg:pr-5 lg:pl-5 lg:border-r lg:border-neutral-300 lg:first:pl-0 lg:last:pr-0 lg:last:border-none"
        >
          {screenSize < 1200 && (
            <PictureLink link={article.link}>
              <img src={article.image} alt={article.title} className="aspect-video object-cover object-center" />
            </PictureLink>
          )}
          <div className="flex flex-col gap-4 p-4 lg:p-0">
            <div className="whitespace-nowrap lg:text-xs">{article.posted}</div>
            <Link to={article.link} className="text-lg line-clamp-2 lg:text-base">
              {article.title}
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
};

export default ThirdBigArticles;
