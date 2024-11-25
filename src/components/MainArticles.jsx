import LatestUpdatesLink from "./LatestUpdatesLink";
import FirstBigArticle from "./FirstBigArticle";
import SecondBigArticles from "./SecondBigArticles";
import ThirdBigArticles from "./ThirdBigArticles";
import FourthBigArticles from "./FourthBigArticles";

import useWindowSize from "../hooks/useWindowSize";

const MainArticles = ({ articles }) => {
  const screenSize = useWindowSize();
  return (
    <div className="max-w-[1300px] mx-auto md:p-4">
      {screenSize !== "small" && <LatestUpdatesLink className="text-[0.625rem] md:mb-4 md:px-2 md:py-[0.15rem]" />}
      <div className="text-neutral-900 md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-[repeat(17,_minmax(0,_1fr))] lg:gap-5 xl:col-start-2 xl:col-span-10 xl:row-start-2">
        <FirstBigArticle article={articles[0]} />
        <SecondBigArticles articles={articles.slice(0, 5)} />
        <ThirdBigArticles articles={articles.slice(0, 4)} />
        <FourthBigArticles articles={articles.slice(0, 3)} />
      </div>
    </div>
  );
};

export default MainArticles;
