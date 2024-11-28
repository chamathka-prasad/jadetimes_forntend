import { Link } from "react-router-dom";

import PictureLink from "./PictureLink";

import useWindowSize from "../hooks/useWindowSize";

const FourthBigArticles = ({ articles }) => {
  const screenSize = useWindowSize();
  return (
    <div className="p-4 flex flex-col gap-4 md:p-0 md:grid md:col-span-2 md:grid-cols-2 lg:flex lg:row-start-2 lg:col-span-4 lg:gap-5">
      {articles.slice(0, 3).map((article, index) => (
        <article className="flex flex-row gap-4 lg:p-3 lg:border lg:border-neutral-300" key={index}>
          <PictureLink link={article.link} className="lg:order-2">
            <img src={article.image} alt={article.title} className="min-w-24 w-24 min-h-24 h-24 object-cover object-center" />
          </PictureLink>
          <div className="flex flex-col justify-center lg:justify-between lg:gap-2">
            <h2>
              <Link to={article.link} className="line-clamp-3 overflow-wrap-anywhere lg:text-sm">
                {article.title}
              </Link>
            </h2>
            {screenSize === "large" && (
              <Link to={article.categoryLink} className="lg:w-fit text-sm text-[#686868] font-light">
                {article.categoryTitle}
              </Link>
            )}
          </div>
        </article>
      ))}
    </div>
  );
};

export default FourthBigArticles;