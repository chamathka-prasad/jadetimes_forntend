import { Link } from "react-router-dom";

import PictureLink from "./PictureLink";

import useWindowSize from "../hooks/useWindowSize";

const FourthBigArticles = ({ articles }) => {
  const screenSize = useWindowSize();
  return (
    <div className="m-4 flex flex-col gap-4 md:m-0 md:grid md:col-span-2 md:grid-cols-2 lg:flex lg:row-start-2 lg:col-span-4 lg:gap-5">
      {articles.slice(0, 3).map((article, index) => (
        <article className="flex flex-row gap-4 p-4 border border-neutral-300" key={index}>
          <PictureLink link={article.link} className="lg:order-2">
            <img src={article.image} alt={article.title} className="min-w-24 w-24 min-h-24 h-24 object-cover object-center" />
          </PictureLink>
          <div className="flex flex-col justify-between gap-4">
            <Link to={article.link} className="line-clamp-2 overflow-wrap-anywhere lg:line-clamp-3 lg:text-sm">
              {article.title}
            </Link>
            {screenSize === "large" && (
              <Link to={article.categoryLink} className="lg:w-fit text-sm text-neutral-500 font-light">
                {article.categoryTitle}
              </Link>
            )}
            {screenSize !== "large" && <div className="whitespace-nowrap lg:text-xs">{article.posted}</div>}
          </div>
        </article>
      ))}
    </div>
  );
};

export default FourthBigArticles;
