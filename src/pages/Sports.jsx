import MainArticles from "../components/MainArticles";
import ThirdSlider from "../components/ThirdSlider";
import Pagination from "../components/Pagination";
import Section from "../components/Section";
import H1 from "../components/H1";
import H2 from "../components/H2";

import Articles from "../routes/Articles";

const Sports = () => {
  return (
    <>
      <Section className="pt-2">
        <H1>
          News
          <span className="font-normal">
            <span className="mx-4">|</span>
            Sports
          </span>
        </H1>
        <MainArticles articles={Articles} />
      </Section>
      <ThirdSlider articles={Articles.slice(0, 2)} />
      <Section className="p-4">
        <H2>More from <span className="font-normal">Sports</span></H2>
        <Pagination articles={Articles} />
      </Section>
    </>
  );
};

export default Sports;
