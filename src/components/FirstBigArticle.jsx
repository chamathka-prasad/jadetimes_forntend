import { Link } from "react-router-dom";

import PictureLink from "./PictureLink";
import LatestUpdatesLink from "./LatestUpdatesLink";

import useWindowSize from "../hooks/useWindowSize";

const FirstBigArticle = ({ article }) => {
  const screenSize = useWindowSize();
  return (
    <article className="relative p-4 border-b border-b-neutral-300 mb-10 md:mb-0 md:p-0 md:grid md:grid-cols-2 md:border md:border-neutral-300 md:col-span-2 lg:col-[13_span_/_13_span] lg:row-start-2">
      {screenSize === "small" && <LatestUpdatesLink className="px-3 py-2 text-sm absolute -bottom-9 left-1/2 -translate-x-1/2 -translate-y-1/2 md:hidden" />}
      <PictureLink link={article.link} className="h-full">
        <img src={article.image} alt={article.title} className="object-cover object-center md:h-full" />
      </PictureLink>
      <div className="py-4 pb-5 flex flex-col gap-2 md:p-4 md:gap-4 lg:p-8">
        <div>
          {screenSize === "large" && <Link className="mb-1 lg:block lg:w-fit lg:text-xs">{article.authorName}</Link>}
          <div className="flex flex-row items-center whitespace-nowrap lg:text-xs">{article.posted}</div>
        </div>
        <h2>
          <Link to={article.link} className="text-2xl line-clamp-3 lg:text-3xl lg:leading-[2.8rem]">
            {article.title}
          </Link>
        </h2>
        <p className="line-clamp-2 lg:text-sm lg:line-clamp-3">{article.title}</p>
      </div>
    </article>
  );
};

export default FirstBigArticle;
