import MainArticles from "../components/MainArticles";
import ThirdSlider from "../components/ThirdSlider";
import Pagination from "../components/Pagination";
import Section from "../components/Section";
import H1 from "../components/H1";
import H2 from "../components/H2";

const Page = ({ name, articles }) => {
  return (
    <>
      <Section className="mt-3 lg:max-w-[1280px]">
        <H1>
          News
          {name && (
            <span className="font-normal">
              <span className="mx-4">|</span>
              {name}
            </span>
          )}
        </H1>
        <MainArticles articles={articles} />
      </Section>
      <ThirdSlider articles={articles.slice(0, 2)} />
      <Section className="p-4 lg:max-w-[1280px]">
        <H2>
          {name ? (
            <>
              More from <span className="font-normal">{name}</span>
            </>
          ) : (
            <>More <span className="font-normal">News</span></>
          )}
        </H2>
        <Pagination articles={articles} />
      </Section>
    </>
  );
};

export default Page;
