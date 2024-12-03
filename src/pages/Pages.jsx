import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import pages from "../routes/pages";
import Articles from "../routes/Articles";

import MainArticles from "../components/MainArticles";
import ThirdSlider from "../components/ThirdSlider";
import Pagination from "../components/Pagination";
import Section from "../components/Section";
import H1 from "../components/H1";
import H2 from "../components/H2";
import NotFound from "./NotFound";

const Pages = () => {
  const param = useParams();
  const [page, setPage] = useState();

  useEffect(() => {
    const pageItem = pages.find((page) => page.id === param.page);
    if (pageItem) {
      setPage(pageItem);
    } else {
      setPage();
    }
  }, [param]);

  if (!page) {
    return <NotFound />;
  }

  return (
    <>
      <Section className="pt-2">
        <H1>
          News
          {page.name && (
            <span className="font-normal">
              <span className="mx-4">|</span>
              {page.name}
            </span>
          )}
        </H1>
        <MainArticles articles={Articles} />
      </Section>
      <ThirdSlider articles={Articles.slice(0, 2)} />
      <Section className="p-4">
        <H2>
          {page.name ? (
            <>
              More from <span className="font-normal">{page.name}</span>
            </>
          ) : (
            <>More News</>
          )}
        </H2>
        <Pagination articles={Articles} />
      </Section>
    </>
  );
};

export default Pages;
