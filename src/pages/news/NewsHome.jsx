import MainArticles from "../../components/MainArticles";
import ThirdSlider from "../../components/ThirdSlider";
import Pagination from "../../components/Pagination";

import Articles from "../../routes/Articles";

const NewsHome = () => {
  return (
    <>
      <div className="max-w-[1288px] mx-auto pt-2">
        <h1 className="border-b-[3px] border-b-accent pb-1 font-semibold text-xl text-heading mx-4">News</h1>
        <MainArticles articles={Articles} />
      </div>
      <ThirdSlider articles={Articles.slice(0, 2)} />
      <div className="max-w-[1288px] mx-auto p-4">
        <h2 className="border-b-2 border-neutral-900 pb-1 text-xl font-semibold text-heading">More News</h2>
        <Pagination articles={Articles} />
      </div>
    </>
  );
};

export default NewsHome;
