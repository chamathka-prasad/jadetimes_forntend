import ReadMoreLink from "./ReadMoreLink";
import YouTubeUpdatesLink from "./YouTubeUpdatesLink";

import useWindowSize from "../hooks/useWindowSize";

const YouTubeArticle = ({ className, article }) => {
  const screenSize = useWindowSize();
  return (
    <div className={className}>
      {screenSize !== "small" && <YouTubeUpdatesLink className="text-[0.625rem] md:px-2 md:py-[0.15rem]" />}
      <div className="text-sm lg:text-base line-clamp-2">{article.title}</div>
      <p className="text-xs line-clamp-5">{article.description}</p>
      <div className="flex flex-row gap-4 text-sm">
        {screenSize === "small" && <YouTubeUpdatesLink className="px-3 py-2" />}
        <ReadMoreLink to={article.link} ariaLabel={article.title} />
      </div>
    </div>
  );
};

export default YouTubeArticle;
