import MainArticles from "../components/MainArticles";
import ThirdSlider from "../components/ThirdSlider";
import Pagination from "../components/Pagination";
import Section from "../components/Section";
import H1 from "../components/H1";
import H2 from "../components/H2";

import Articles from "../routes/Articles";

const News = () => {
  return (
    <>
      <Section className="pt-2">
        <H1>News</H1>
        <MainArticles articles={Articles} />
      </Section>
      <ThirdSlider articles={Articles.slice(0, 2)} />
      <Section className="p-4">
        <H2>More <span className="font-normal">News</span></H2>
        <Pagination articles={Articles} />
      </Section>
    </>
  );
};

export default News;