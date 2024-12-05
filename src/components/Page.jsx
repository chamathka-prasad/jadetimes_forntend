import MainArticles from "./MainArticles";
import ThirdSlider from "./ThirdSlider";
import Pagination from "./Pagination";
import Section from "./Section";
import H1 from "./H1";
import H2 from "./H2";

const Page = ({ name, articles }) => {
  return (
    <>
      <Section className="pt-2">
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
      <Section className="p-4">
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
