import ReadMoreLink from "./ReadMoreLink";
import YouTubeUpdatesLink from "./YouTubeUpdatesLink";

import useWindowSize from "../hooks/useWindowSize";

const YouTubeArticle = ({ className, article }) => {
  const screenSize = useWindowSize();
  return (
    <div className={className}>
      {screenSize >= 768 && <YouTubeUpdatesLink className="text-[0.625rem] px-2 py-[0.15rem]" />}
      <div className="line-clamp-2 text-lg">{article.title}</div>
      <p className="lg:text-xs line-clamp-5">{article.description}</p>
      <div className="flex flex-row gap-4 text-sm">
        {screenSize < 768 && <YouTubeUpdatesLink className="px-3 py-2" />}
        <ReadMoreLink to={article.link} ariaLabel={article.title} />
      </div>
    </div>
  );
};

export default YouTubeArticle;
