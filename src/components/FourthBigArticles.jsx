import { Link } from "react-router-dom";

import PictureLink from "./PictureLink";

import useWindowSize from "../hooks/useWindowSize";

const FourthBigArticles = ({ articles }) => {
  const screenSize = useWindowSize();
  return (
    <div className="m-4 flex flex-col gap-4 sm:m-0 sm:grid sm:col-span-2 sm:grid-cols-2 lg:flex lg:row-start-2 lg:col-span-4 lg:gap-5">
      {articles.slice(0, 3).map((article, index) => (
        <article className="flex flex-row gap-4 p-4 border border-neutral-300" key={index}>
          <PictureLink link={article.link} className="lg:order-2">
            <img src={article.image} alt={article.title} className="aspect-square min-w-[5.5rem] w-[5.5rem] min-h-[5.5rem] h-[5.5rem] object-cover object-center lg:min-w-20 lg:w-20 lg:min-h-20 lg:h-20" />
          </PictureLink>
          <div className="flex flex-col justify-between gap-4">
            <Link to={article.link} className="line-clamp-2 overflow-wrap-anywhere lg:text-sm">
              {article.title}
            </Link>
            {screenSize >= 1200 && (
              <Link to={article.categoryLink} className="w-fit text-sm text-neutral-500 font-light">
                {article.categoryTitle}
              </Link>
            )}
            {screenSize < 1200 && <div className="whitespace-nowrap">{article.posted}</div>}
          </div>
        </article>
      ))}
    </div>
  );
};

export default FourthBigArticles;
