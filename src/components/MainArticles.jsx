import LatestUpdatesLink from "./LatestUpdatesLink";
import FirstBigArticle from "./FirstBigArticle";
import SecondBigArticles from "./SecondBigArticles";
import ThirdBigArticles from "./ThirdBigArticles";
import FourthBigArticles from "./FourthBigArticles";

import useWindowSize from "../hooks/useWindowSize";

const MainArticles = ({ articles }) => {
  const screenSize = useWindowSize();
  return (
    <div className="md:p-4 lg:pb-5">
      {screenSize >= 600 && <LatestUpdatesLink className="text-[0.625rem] sm:mb-4 sm:px-2 sm:py-[0.15rem]" />}
      <div className="sm:grid sm:grid-cols-2 sm:gap-4 lg:grid-cols-[repeat(17,_minmax(0,_1fr))] lg:gap-5 xl:col-start-2 xl:col-span-10 xl:row-start-2">
        <FirstBigArticle article={articles[0]} />
        <SecondBigArticles articles={articles.slice(0, 5)} />
        <ThirdBigArticles articles={articles.slice(0, 4)} />
        <FourthBigArticles articles={articles.slice(0, 3)} />
      </div>
    </div>
  );
};

export default MainArticles;
