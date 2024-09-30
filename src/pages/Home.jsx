import { useRef, useState } from "react";

import H1 from "../components/H1";
import H2 from "../components/H2";
import LatestUpdates from "../components/LatestUpdates";
import Article from "../components/Article";

import Articles from "../routes/Articles";

import SpecialGraphics from "../assets/Adds/add-3.webp";
import DigitUsTecGlobal from "../assets/Adds/add-1.gif";
import SpecialPrinters from "../assets/Adds/add-2.gif";

import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";

const Home = () => {
  const articlesTwo = Articles.slice(1, 5);
  const articlesThree = Articles.slice(5, 9);
  const articlesFour = Articles.slice(0, 10);
  const articlesFive = Articles.slice(0, 2);
  const articlesSix = Articles.slice(0, 8);

  const scrollRef = useRef();

  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  return (
    <div className="max-w-screen-xl mx-auto 2xl:max-w-[1535px]">
      <H1 className="h-0 overflow-hidden" heading="Headlines" />
      <section className="md:p-4 2xl:grid 2xl:grid-cols-12 2xl:gap-4">
        <LatestUpdates />
        <div className="md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-11 xl:col-start-2 xl:col-span-10 xl:row-start-2">
          <Article
            link={Articles[0].link}
            className="block md:border md:border-neutral-300 md:col-span-2 md:row-span-2 lg:col-span-8 lg:row-start-2 lg:row-span-3"
          >
            <article className="md:grid md:grid-cols-2 lg:h-full">
              <picture>
                <img
                  src={Articles[0].image}
                  alt=""
                  className="object-cover object-center lg:h-full"
                />
              </picture>
              <p
                className="text-white uppercase text-xs text-center absolute left-0 right-0 -translate-y-5 md:hidden"
                aria-hidden="true"
              >
                <span className="bg-neutral-900 inline-block px-3 py-2 tracking-wider text-nowrap">
                  Latest Updates
                </span>
              </p>
              <div className="pt-8 py-6 px-4 flex flex-col justify-between gap-2 md:p-4 md:gap-4 md:justify-center">
                <p className="whitespace-nowrap lg:text-xs">
                  {Articles[0].posted}
                </p>
                <h3 className="text-2xl lg:text-3xl">{Articles[0].title}</h3>
                <p className="lg:text-sm">{Articles[0].title}</p>
              </div>
            </article>
          </Article>
          {articlesTwo.map((article) => (
            <Article
              key={article.title}
              link={article.link}
              className="border border-neutral-300 block mx-4 mb-4 md:m-0 lg:col-span-2 lg:row-start-5"
            >
              <article className="flex flex-row p-4 gap-4 justify-between lg:p-0 lg:flex-col">
                <picture className="order-2 lg:order-none">
                  <img
                    src={article.image}
                    alt=""
                    className="min-w-20 w-20 min-h-20 h-20 object-cover object-center lg:w-full lg:h-full"
                  />
                </picture>
                <div className="flex flex-col justify-between gap-4 lg:p-4 lg:pt-0">
                  <h3 className="overflow-anywhere line-clamp-2 lg:text-sm lg:line-clamp-3">
                    {article.title}
                  </h3>
                  <p className="hidden lg:line-clamp-2 lg:text-xs">
                    {article.title}
                  </p>
                  <p className="whitespace-nowrap lg:text-xs lg:order-[-1]">
                    {article.posted}
                  </p>
                </div>
              </article>
            </Article>
          ))}
          <Article
            link="https://specialgraphics.us/"
            className="block md:row-span-3 lg:col-start-9 lg:col-span-3 lg:row-start-5 lg:row-span-1"
            target="_blank"
          >
            <img src={SpecialGraphics} alt="" />
          </Article>
          <div className="flex flex-col gap-4 px-4 pt-4 md:p-0 md:col-span-2 md:grid md:grid-cols-2 md:row-span-2 lg:grid-cols-4 lg:col-span-full lg:row-start-1 lg:row-span-1">
            {articlesThree.map((article) => (
              <Article
                key={article.title}
                link={article.link}
                className="border border-neutral-300 block"
              >
                <article className="flex flex-col justify-between">
                  <picture className="sm:hidden">
                    <img src={article.image} alt="" />
                  </picture>
                  <div className="flex flex-col justify-between gap-4 p-4">
                    <p className="whitespace-nowrap lg:text-xs">
                      {article.posted}
                    </p>
                    <h3 className="text-lg line-clamp-2 lg:text-base">
                      {article.title}
                    </h3>
                  </div>
                </article>
              </Article>
            ))}
          </div>
          <Article
            link={Articles[9].link}
            className="border border-neutral-300 block m-4 md:m-0 md:col-start-2 md:row-start-5 lg:col-span-3 lg:row-start-2"
          >
            <article className="flex flex-row p-4 gap-4 md:h-full">
              <picture className="lg:order-2">
                <img
                  src={Articles[9].image}
                  alt=""
                  className="min-w-20 w-20 min-h-20 h-20 object-cover object-center md:h-full"
                />
              </picture>
              <div className="flex flex-col justify-center gap-4">
                <h3 className="line-clamp-4 overflow-anywhere lg:text-sm lg:line-clamp-3">
                  {Articles[9].title}
                </h3>
                <p className="hidden whitespace-nowrap lg:block lg:text-xs">
                  {Articles[9].posted}
                </p>
              </div>
            </article>
          </Article>
          <Article
            link={Articles[10].link}
            className="border border-neutral-300 block m-4 md:m-0 md:col-start-2 md:row-start-6 lg:col-span-3 lg:row-start-3"
          >
            <article className="flex flex-row p-4 gap-4 md:h-full">
              <picture className="lg:order-2">
                <img
                  src={Articles[10].image}
                  alt=""
                  className="min-w-20 w-20 min-h-20 h-20 object-cover object-center md:h-full"
                />
              </picture>
              <div className="flex flex-col justify-center gap-4">
                <h3 className="line-clamp-4 overflow-anywhere lg:text-sm lg:line-clamp-3">
                  {Articles[10].title}
                </h3>
                <p className="hidden whitespace-nowrap lg:block lg:text-xs">
                  {Articles[10].posted}
                </p>
              </div>
            </article>
          </Article>
          <Article
            link={Articles[11].link}
            className="border border-neutral-300 block m-4 md:m-0 md:col-start-2 md:row-start-7 lg:col-span-3 lg:row-start-4"
          >
            <article className="flex flex-row p-4 gap-4 md:h-full">
              <picture className="lg:order-2">
                <img
                  src={Articles[11].image}
                  alt=""
                  className="min-w-20 w-20 min-h-20 h-20 object-cover object-center md:h-full"
                />
              </picture>
              <div className="flex flex-col justify-center gap-4">
                <h3 className="line-clamp-4 overflow-anywhere lg:text-sm lg:line-clamp-3">
                  {Articles[11].title}
                </h3>
                <p className="hidden whitespace-nowrap lg:block lg:text-xs">
                  {Articles[11].posted}
                </p>
              </div>
            </article>
          </Article>
        </div>
        <Article
          link="http://www.digitustecglobal.com/"
          className="hidden 2xl:block 2xl:col-start-1 2xl:mt-32"
          target="_blank"
        >
          <img src={DigitUsTecGlobal} alt="" />
        </Article>
        <Article
          link="https://www.specialprinters.us/"
          className="hidden 2xl:block 2xl:col-start-12 2xl:mt-32"
          target="_blank"
        >
          <img src={SpecialPrinters} alt="" />
        </Article>
      </section>
      <section className="mt-8 md:mt-4 max-w-screen-xl mx-auto">
        <H2 heading="More News" />
        <div className="md:grid md:grid-cols-2 md:gap-4 md:p-4 lg:grid-cols-10">
          {articlesFour.map((article) => (
            <Article
              key={article.title}
              link={article.link}
              className="border border-neutral-300 block m-4 md:m-0 lg:col-span-2"
            >
              <article className="flex flex-row p-4 gap-4 justify-between lg:flex-col lg:p-0">
                <picture className="order-2 lg:order-none">
                  <img
                    src={article.image}
                    alt=""
                    className="min-w-20 w-20 min-h-20 h-20 object-cover object-center lg:w-full lg:h-full"
                  />
                </picture>
                <div className="flex flex-col justify-between gap-4 lg:p-4 lg:pt-0">
                  <h3 className="overflow-anywhere line-clamp-2 lg:text-sm lg:line-clamp-3">
                    {article.title}
                  </h3>
                  <p className="whitespace-nowrap lg:hidden">
                    {article.posted}
                  </p>
                </div>
              </article>
            </Article>
          ))}
        </div>
      </section>
      <section className="mt-8 md:mt-4 max-w-screen-xl mx-auto">
        <H2 heading="What's Trending" />
        <div className="lg:grid lg:grid-cols-4 lg:p-4 lg:gap-4">
          <div className="lg:col-span-2 lg:border lg:border-neutral-300 lg:relative">
            <div className="lg:overflow-x-hidden lg:h-full" ref={scrollRef}>
              <div className="pt-4 px-4 flex flex-col gap-4 md:flex-row lg:p-0 lg:flex-row lg:gap-0 lg:h-full">
                <Article
                  link={articlesFive[0].link}
                  className="block md:w-full lg:min-w-full lg:overflow-hidden"
                >
                  <article
                    style={{ backgroundImage: `url(${articlesFive[0].image})` }}
                    className="h-72 bg-center bg-cover bg-no-repeat"
                  >
                    <picture className="hidden lg:block">
                      <img
                        src={articlesFive[0].image}
                        alt=""
                        className="lg:h-80"
                      />
                    </picture>
                    <div className="flex flex-col justify-between h-full p-8 bg-[#000000aa] text-white lg:h-auto lg:bg-white lg:text-black lg:gap-4 lg:p-4">
                      <h3 className="order-2 text-lg lg:text-2xl lg:line-clamp-2">
                        {articlesFive[0].title}
                      </h3>
                      <p className="hidden lg:line-clamp-2 lg:text-sm lg:order-3">
                        {articlesFive[0].title}
                      </p>
                      <p className="whitespace-nowrap lg:text-xs">
                        {articlesFive[0].posted}
                      </p>
                    </div>
                  </article>
                </Article>
                <Article
                  link={articlesFive[1].link}
                  className="block md:w-full lg:min-w-full lg:overflow-hidden"
                >
                  <article
                    style={{ backgroundImage: `url(${articlesFive[1].image})` }}
                    className="h-72 bg-center bg-cover bg-no-repeat"
                  >
                    <picture className="hidden lg:block">
                      <img
                        src={articlesFive[1].image}
                        alt=""
                        className="lg:h-80"
                      />
                    </picture>
                    <div className="flex flex-col justify-between h-full p-8 bg-[#000000aa] text-white lg:h-auto lg:bg-white lg:text-black lg:gap-4 lg:p-4">
                      <h3 className="order-2 text-lg lg:text-2xl lg:line-clamp-2">
                        {articlesFive[1].title}
                      </h3>
                      <p className="hidden lg:line-clamp-2 lg:text-sm lg:order-3">
                        {articlesFive[1].title}
                      </p>
                      <p className="whitespace-nowrap lg:text-xs">
                        {articlesFive[1].posted}
                      </p>
                    </div>
                  </article>
                </Article>
              </div>
            </div>
            {showRightButton && ( <button
              className={`hidden lg:block lg:absolute lg:right-4 lg:top-1/2 lg:text-white lg:border lg:border-black lg:rounded-full lg:bg-black`}
              onClick={() => {
                scrollRef.current.scrollBy({
                  top: 0,
                  left: scrollRef.current.clientWidth,
                  behavior: "smooth",
                });
                setShowLeftButton(true);
                setShowRightButton(false);
              }}
            >
              <FaCircleChevronRight size={40} />
            </button>)}
            {showLeftButton && (<button
              className="hidden lg:block lg:absolute lg:left-4 lg:top-1/2 lg:text-white lg:border lg:border-black lg:rounded-full lg:bg-black"
              onClick={() => {
                scrollRef.current.scrollBy({
                  top: 0,
                  left: -scrollRef.current.clientWidth,
                  behavior: "smooth",
                });
                setShowLeftButton(false);
                setShowRightButton(true);
              }}
            >
              <FaCircleChevronLeft size={40} />
            </button>)}
          </div>
          <div className="md:grid md:grid-cols-2 md:p-4 md:gap-4 lg:col-span-2 lg:grid-cols-2 lg:p-0">
            {articlesSix.map((article) => (
              <Article
                key={article.title}
                link={article.link}
                className="border border-neutral-300 block m-4 md:m-0"
              >
                <article className="flex flex-row p-4 gap-4">
                  <picture className="lg:order-2">
                    <img
                      src={article.image}
                      alt=""
                      className="min-w-20 w-20 min-h-20 h-20 object-cover object-center"
                    />
                  </picture>
                  <div className="flex flex-col justify-between gap-4">
                    <h3 className="line-clamp-2 overflow-anywhere lg:text-sm">
                      {article.title}
                    </h3>
                    <p className="whitespace-nowrap lg:text-xs">
                      {article.posted}
                    </p>
                  </div>
                </article>
              </Article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
