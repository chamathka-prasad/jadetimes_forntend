import { useRef, useState } from "react";

import H1 from "../components/H1";
import H2 from "../components/H2";
import LatestUpdates from "../components/LatestUpdates";
import Article from "../components/Article";
import Slider from "../components/Slider";

import Articles from "../routes/Articles";

import SpecialGraphics from "../assets/Adds/add-3.webp";
import DigitUsTecGlobal from "../assets/Adds/add-1.gif";
import SpecialPrinters from "../assets/Adds/add-2.gif";

import {
  FaChevronLeft,
  FaChevronRight
} from "react-icons/fa6";

const Home = () => {
  const articlesTwo = Articles.slice(1, 5);
  const articlesThree = Articles.slice(5, 9);
  const articlesFour = Articles.slice(0, 10);
  const articlesFive = Articles.slice(0, 2);
  const articlesSix = Articles.slice(0, 8);
  const articlesSeven = Articles.slice(0, 5);
  const articlesEight = Articles.slice(0, 3);

  const scrollRef = useRef(null);

  const [showButton, setShowButton] = useState(true);

  return (
    <div>
      <div className="max-w-screen-xl mx-auto 2xl:max-w-[1535px]">
        <H1 className="h-0 overflow-hidden" heading="Headlines" />
        <section className="md:p-4 2xl:grid 2xl:grid-cols-12 2xl:gap-4">
          <LatestUpdates />
          <div className="md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-12 xl:col-start-2 xl:col-span-10 xl:row-start-2">
            <Article
              link={Articles[0].link}
              className="block md:border md:border-neutral-300 md:col-span-2 md:row-span-2 lg:col-span-9 lg:row-start-2 lg:row-span-3"
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
                  className="text-white uppercase text-xs text-center absolute left-0 right-0 -translate-y-4 md:hidden"
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
            <div className="md:grid md:grid-cols-2 md:col-span-2 md:gap-4 lg:grid-cols-12 lg:col-span-9">
              {articlesTwo.map((article) => (
                <Article
                  key={article.title}
                  link={article.link}
                  className="border border-neutral-300 block mx-4 mb-4 md:m-0 lg:col-span-3"
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
            </div>
            <Article
              link="https://specialgraphics.us/"
              className="block md:row-span-3 lg:col-start-10 lg:col-span-3 lg:row-start-5 lg:row-span-1"
              target="_blank"
              aria-label="visit special graphics website"
            >
              <img
                src={SpecialGraphics}
                alt="special graphics representation"
                className="md:h-[272px] lg:h-full"
              />
            </Article>
            <div className="flex flex-col gap-4 px-4 pt-4 md:p-0 md:col-span-2 md:grid md:grid-cols-2 md:row-span-2 lg:grid-cols-4 lg:col-span-full lg:row-start-1 lg:row-span-1 lg:gap-0">
              {articlesThree.map((article) => (
                <Article
                  key={article.title}
                  link={article.link}
                  className="block lg:pr-4 lg:pl-4 lg:border-r-2 lg:border-neutral-300 lg:first:pl-0 lg:last:pr-0 lg:last:border-none"
                >
                  <article className="flex flex-col justify-between gap-4">
                    <picture className="lg:hidden">
                      <img src={article.image} alt="" />
                    </picture>
                    <div className="flex flex-col justify-between gap-4">
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
              className="block m-4 md:m-0 md:col-start-2 md:row-start-4 lg:col-span-3 lg:row-start-2 lg:border lg:border-neutral-300"
            >
              <article className="flex flex-row gap-4 lg:p-4">
                <picture className="lg:order-2">
                  <img
                    src={Articles[9].image}
                    alt=""
                    className="min-w-20 w-20 min-h-20 h-20 object-cover object-center"
                  />
                </picture>
                <div className="flex flex-col justify-center gap-4">
                  <h3 className="line-clamp-4 overflow-anywhere lg:text-sm lg:line-clamp-2">
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
              className="block m-4 md:m-0 md:col-start-2 md:row-start-5 lg:col-span-3 lg:row-start-3 lg:border lg:border-neutral-300"
            >
              <article className="flex flex-row gap-4 lg:p-4">
                <picture className="lg:order-2">
                  <img
                    src={Articles[10].image}
                    alt=""
                    className="min-w-20 w-20 min-h-20 h-20 object-cover object-center"
                  />
                </picture>
                <div className="flex flex-col justify-center gap-4">
                  <h3 className="line-clamp-4 overflow-anywhere lg:text-sm lg:line-clamp-2">
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
              className="block m-4 md:m-0 md:col-start-2 md:row-start-6 lg:col-span-3 lg:row-start-4 lg:border lg:border-neutral-300"
            >
              <article className="flex flex-row gap-4 lg:p-4">
                <picture className="lg:order-2">
                  <img
                    src={Articles[11].image}
                    alt=""
                    className="min-w-20 w-20 min-h-20 h-20 object-cover object-center"
                  />
                </picture>
                <div className="flex flex-col justify-center gap-4">
                  <h3 className="line-clamp-4 overflow-anywhere lg:text-sm lg:line-clamp-2">
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
            className="hidden 2xl:block 2xl:col-start-1 2xl:mt-24 h-fit"
            target="_blank"
            aria-label="visit digit us tec global website"
          >
            <img
              src={DigitUsTecGlobal}
              alt="digit us tec global representation"
            />
          </Article>
          <Article
            link="https://www.specialprinters.us/"
            className="hidden 2xl:block 2xl:col-start-12 2xl:mt-24 h-fit"
            target="_blank"
            aria-label="visit special printers website"
          >
            <img src={SpecialPrinters} alt="special printers representation" />
          </Article>
        </section>
        <section className="mt-8 md:mt-4 max-w-screen-xl mx-auto">
          <H2 heading="More News" className="border-b-[3px] border-b-red-700" />
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
          <H2
            heading="What's Trending"
            className="border-b-[3px] border-b-red-700"
          />
          <div className="lg:grid lg:grid-cols-4 lg:p-4">
            <div className="lg:col-span-2 lg:border lg:border-neutral-300 lg:mr-4 lg:relative non-focus">
              <div className="lg:overflow-x-hidden lg:h-full" ref={scrollRef}>
                <div className="pt-4 px-4 flex flex-col gap-4 md:flex-row lg:p-0 lg:flex-row lg:gap-0 lg:h-full">
                  <Article
                    link={articlesFive[0].link}
                    className={`block duration-300 border border-neutral-300 md:w-full ${showButton ? "lg:visible" : "lg:invisible"} lg:min-w-full lg:overflow-hidden lg:border-none`}
                  >
                    <article
                      style={{
                        backgroundImage: `url(${articlesFive[0].image})`,
                      }}
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
                    className={`block duration-300 border border-neutral-300 md:w-full ${showButton ? "lg:invisible" : "lg:visible"} lg:min-w-full lg:overflow-hidden lg:border-none`}
                  >
                    <article
                      style={{
                        backgroundImage: `url(${articlesFive[1].image})`,
                      }}
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
              {showButton && (
                <button
                  className="hidden lg:block lg:absolute lg:right-4 lg:top-1/2 lg:text-neutral-500"
                  onClick={() => {
                    scrollRef.current.scrollBy({
                      top: 0,
                      left: scrollRef.current.clientWidth,
                      behavior: "smooth",
                    });
                    setShowButton(false);
                  }}
                  aria-label="next article"
                >
                  <FaChevronRight size={40} />
                </button>
              )}
              {showButton || (
                <button
                  className="hidden lg:block lg:absolute lg:left-4 lg:top-1/2 lg:text-neutral-500"
                  onClick={() => {
                    scrollRef.current.scrollBy({
                      top: 0,
                      left: -scrollRef.current.clientWidth,
                      behavior: "smooth",
                    });
                    setShowButton(true);
                  }}
                  aria-label="previous article"
                >
                  <FaChevronLeft size={40} />
                </button>
              )}
            </div>
            <div className="md:grid md:grid-cols-2 md:p-4 md:gap-4 lg:col-span-2 lg:grid-cols-2 lg:p-0 lg:pl-4 lg:border-l lg:border-black">
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
        <div className="mt-8 max-w-screen-xl mx-auto md:p-4 md:my-0 md:mx-auto md:grid md:gap-4 md:grid-cols-2 lg:grid-cols-4">
          <section>
            <H2
              heading="Asia"
              className="border-b-2 border-b-neutral-700 md:mx-0"
            />
            {articlesEight.map((article) => (
              <Article
                key={article.title}
                link={article.link}
                className="block m-4 md:m-0 md:mt-4 md:odd:my-8"
              >
                <article className="flex flex-col justify-between gap-4">
                  <picture className="sm:hidden">
                    <img src={article.image} alt="" />
                  </picture>
                  <div className="flex flex-col justify-between gap-4">
                    <p className="whitespace-nowrap lg:text-xs lg:order-2">
                      {article.posted}
                    </p>
                    <h3 className="text-lg line-clamp-2 lg:text-base lg:line-clamp-3">
                      {article.title}
                    </h3>
                  </div>
                </article>
              </Article>
            ))}
          </section>
          <section>
            <H2
              heading="Australia"
              className="border-b-2 border-b-neutral-700 md:mx-0"
            />
            {articlesEight.map((article) => (
              <Article
                key={article.title}
                link={article.link}
                className="block m-4 md:m-0 md:mt-4 md:odd:my-8"
              >
                <article className="flex flex-col justify-between gap-4">
                  <picture className="sm:hidden">
                    <img src={article.image} alt="" />
                  </picture>
                  <div className="flex flex-col justify-between gap-4">
                    <p className="whitespace-nowrap lg:text-xs lg:order-2">
                      {article.posted}
                    </p>
                    <h3 className="text-lg line-clamp-2 lg:text-base lg:line-clamp-3">
                      {article.title}
                    </h3>
                  </div>
                </article>
              </Article>
            ))}
          </section>
          <section>
            <H2
              heading="USA"
              className="border-b-2 border-b-neutral-700 md:mx-0"
            />
            {articlesEight.map((article) => (
              <Article
                key={article.title}
                link={article.link}
                className="block m-4 md:m-0 md:mt-4 md:odd:my-8"
              >
                <article className="flex flex-col justify-between gap-4">
                  <picture className="sm:hidden">
                    <img src={article.image} alt="" />
                  </picture>
                  <div className="flex flex-col justify-between gap-4">
                    <p className="whitespace-nowrap lg:text-xs lg:order-2">
                      {article.posted}
                    </p>
                    <h3 className="text-lg line-clamp-2 lg:text-base lg:line-clamp-3">
                      {article.title}
                    </h3>
                  </div>
                </article>
              </Article>
            ))}
          </section>
          <section>
            <H2
              heading="Europe"
              className="border-b-2 border-b-neutral-700 md:mx-0"
            />
            {articlesEight.map((article) => (
              <Article
                key={article.title}
                link={article.link}
                className="block m-4 md:m-0 md:mt-4 md:odd:my-8"
              >
                <article className="flex flex-col justify-between gap-4">
                  <picture className="sm:hidden">
                    <img src={article.image} alt="" />
                  </picture>
                  <div className="flex flex-col justify-between gap-4">
                    <p className="whitespace-nowrap lg:text-xs lg:order-2">
                      {article.posted}
                    </p>
                    <h3 className="text-lg line-clamp-2 lg:text-base lg:line-clamp-3">
                      {article.title}
                    </h3>
                  </div>
                </article>
              </Article>
            ))}
          </section>
        </div>
        <section className="mt-8 md:mt-4 max-w-screen-xl mx-auto">
          <H2 heading="News Updates" className="border-b-[3px] border-b-red-700">
            {" "}
            | Sports
          </H2>
          <div className="md:grid md:grid-cols-2 md:gap-4 md:p-4 lg:grid-cols-10">
            {articlesSeven.map((article) => (
              <Article
                key={article.title}
                link={article.link}
                className="border border-neutral-300 block m-4 md:m-0 lg:col-span-2"
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
                    <p className="whitespace-nowrap lg:text-xs lg:order-[-1] lg:hidden">
                      {article.posted}
                    </p>
                  </div>
                </article>
              </Article>
            ))}
          </div>
        </section>
      </div>
      <section>
        <div className="mt-8 md:mt-4 bg-black">
          <div className="max-w-screen-xl mx-auto py-3 pb-4">
            <H2
              heading="Exclusive Pulse"
              className="text-white border-b-[3px] border-b-red-700"
            >
              {" "}
              | Jadetimes
            </H2>
            <div className="p-4 pb-1 text-white flex flex-col gap-4 md:grid md:grid-cols-2 items-center">
              <iframe
                className="block aspect-video"
                title="How Sri Lanka's 2024 Election Could Shape the Future of Entrepreneurs | Exclusive Pulse | Jadetimes"
                width="100%"
                src="https://www.youtube.com/embed/4W7SjwdQS64?autoplay=0&mute=0&controls=1&loop=0&origin=https://www.jadetimes.com&playsinline=1&enablejsapi=1"
                sandbox="allow-same-origin allow-scripts allow-popups"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                loading="lazy"
              ></iframe>
              <div className="lg:w-96 lg:mx-auto">
                <h3 className="text-sm mb-3 lg:text-base">
                  How Sri Lanka's 2024 Election Could Shape the Future of
                  Entrepreneurs
                </h3>
                <p className="text-xs">
                  We explore how the upcoming election could shape opportunities
                  and challenges for business owners and startups across the
                  country. A shocking revelation about the connection between
                  these two groups, shedding light on hidden influences and
                  funding sources.
                </p>
                <div className="mt-4 flex items-center gap-4">
                  <a
                    href="https://www.youtube.com/@JadeTimes"
                    className="bg-neutral-800 inline-block uppercase text-nowrap font-medium text-xs px-3 py-2 lg:px-2 lg:py-1 duration-300 hover:bg-white hover:text-black"
                  >
                    Youtube updates
                  </a>
                  <p>
                    <a
                      href="https://www.jadetimes.com/post/shocking-revelations-mr-neomal-perera-on-hidden-influences-in-sri-lanka-s-political-sphere"
                      className="text-xs text-nowrap capitalize duration-300 hover:opacity-50"
                    >
                      Read more
                      <FaChevronRight className="inline" />
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 flex flex-col gap-4 md:grid md:grid-cols-3 lg:grid-cols-8 max-w-screen-xl mx-auto">
          <div className="lg:col-span-2 lg:flex lg:flex-col lg:gap-4">
            <Article
              key={Articles[0].title}
              link={Articles[0].link}
              className="border border-neutral-300 block lg:col-span-2 h-full lg:h-auto lg:border-none"
            >
              <article className="flex flex-row p-4 gap-4 justify-between md:p-0 md:flex-col">
                <picture className="order-2 md:order-none">
                  <img
                    src={Articles[0].image}
                    alt=""
                    className="min-w-20 w-20 min-h-20 h-20 object-cover object-center md:w-full md:h-full"
                  />
                </picture>
                <div className="flex flex-col justify-between gap-4 md:p-4 md:pt-0 lg:p-0">
                  <h3 className="overflow-anywhere line-clamp-2 lg:text-lg lg:font-medium">
                    {Articles[0].title}
                  </h3>
                  <p className="whitespace-nowrap lg:text-xs md:order-[-1] lg:hidden">
                    {Articles[0].posted}
                  </p>
                </div>
              </article>
            </Article>
            <div className="hidden lg:flex lg:flex-col lg:gap-4">
              {articlesEight.map((article) => (
                <Article
                  key={article.title}
                  link={article.link}
                  className="border border-neutral-300 block m-4 md:m-0 lg:border-none"
                >
                  <article className="flex flex-row p-4 gap-4 lg:p-0">
                    <picture>
                      <img
                        src={article.image}
                        alt=""
                        className="min-w-20 w-20 min-h-20 h-20 object-cover object-center"
                      />
                    </picture>
                    <div className="flex flex-col justify-center gap-4">
                      <h3 className="line-clamp-2 overflow-anywhere lg:text-sm lg:line-clamp-3">
                        {article.title}
                      </h3>
                      <p className="whitespace-nowrap lg:text-xs lg:hidden">
                        {article.posted}
                      </p>
                    </div>
                  </article>
                </Article>
              ))}
            </div>
          </div>
          <Article
            link={articlesFive[0].link}
            className="block border border-neutral-300 md:w-full lg:col-span-4 lg:border-none"
          >
            <article
              style={{
                backgroundImage: `url(${articlesFive[0].image})`,
              }}
              className="h-72 bg-center bg-cover bg-no-repeat"
            >
              <picture className="hidden lg:block">
                <img src={articlesFive[0].image} alt="" className="lg:h-80" />
              </picture>
              <div className="flex flex-col justify-between h-full p-8 bg-[#000000aa] text-white lg:h-auto lg:bg-white lg:text-black lg:gap-2 lg:p-0 lg:pt-8">
                <h3 className="order-2 text-lg lg:text-2xl lg:line-clamp-2 lg:font-medium">
                  {articlesFive[0].title}
                </h3>
                <p className="hidden lg:line-clamp-2 lg:text-lg lg:order-3">
                  {articlesFive[0].title}
                </p>
                <p className="whitespace-nowrap lg:text-xs lg:hidden">
                  {articlesFive[0].posted}
                </p>
              </div>
            </article>
          </Article>
          <div className="lg:col-span-2 lg:flex lg:flex-col lg:gap-4">
            <Article
              key={Articles[1].title}
              link={Articles[1].link}
              className="border border-neutral-300 block lg:col-span-2 h-full lg:h-auto lg:border-none"
            >
              <article className="flex flex-row p-4 gap-4 justify-between md:p-0 md:flex-col">
                <picture className="order-2 md:order-none">
                  <img
                    src={Articles[1].image}
                    alt=""
                    className="min-w-20 w-20 min-h-20 h-20 object-cover object-center md:w-full md:h-full"
                  />
                </picture>
                <div className="flex flex-col justify-between gap-4 md:p-4 md:pt-0 lg:p-0">
                  <h3 className="overflow-anywhere line-clamp-2 lg:text-lg lg:font-medium">
                    {Articles[1].title}
                  </h3>
                  <p className="whitespace-nowrap lg:text-xs md:order-[-1] lg:hidden">
                    {Articles[1].posted}
                  </p>
                </div>
              </article>
            </Article>
            <div className="hidden lg:flex lg:flex-col lg:gap-4">
              {articlesEight.map((article) => (
                <Article
                  key={article.title}
                  link={article.link}
                  className="border border-neutral-300 block m-4 md:m-0 lg:border-none"
                >
                  <article className="flex flex-row p-4 gap-4 lg:p-0">
                    <picture className="lg:order-2">
                      <img
                        src={article.image}
                        alt=""
                        className="min-w-20 w-20 min-h-20 h-20 object-cover object-center"
                      />
                    </picture>
                    <div className="flex flex-col justify-center gap-4">
                      <h3 className="line-clamp-2 overflow-anywhere lg:text-sm lg:line-clamp-3">
                        {article.title}
                      </h3>
                      <p className="whitespace-nowrap lg:text-xs lg:hidden">
                        {article.posted}
                      </p>
                    </div>
                  </article>
                </Article>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div>
        <Slider length="3">
          <article
            style={{
              backgroundImage: `url(${articlesFive[0].image})`,
            }}
            className="h-full w-full bg-center bg-cover bg-no-repeat snap-start"
          >
            <div className="h-full bg-gradient-to-t from-black to-transparent p-4 flex">
              <div className="mt-auto mb-8 md:grid md:grid-cols-2 md:gap-4 md:items-center md:max-w-screen-md md:mx-auto">
                <iframe
                  title="What We Know About Trump Shooting Suspect Thomas Matthew Crooks | JadeTimes"
                  width="100%"
                  src="https://www.youtube.com/embed/uHcsQKx6AzY?autoplay=0&mute=0&controls=1&loop=0&origin=https://www.jadetimes.com&playsinline=1&enablejsapi=1"
                  className="aspect-video"
                  sandbox="allow-same-origin allow-scripts allow-popups"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  loading="lazy"
                ></iframe>

                <div className="text-white">
                  <h3 className="text-sm my-3 lg:text-base md:mt-0">
                    How Sri Lanka's 2024 Election Could Shape the Future of
                    Entrepreneurs
                  </h3>
                  <p className="text-xs">
                    We explore how the upcoming election could shape
                    opportunities and challenges for business owners and
                    startups across the country. A shocking revelation about the
                    connection between these two groups, shedding light on
                    hidden influences and funding sources.
                  </p>
                  <div className="mt-4">
                    <a
                      href="https://www.youtube.com/@JadeTimes"
                      className="bg-neutral-800 inline-block uppercase font-medium text-xs px-3 py-2 mr-4 lg:px-2 lg:py-1 duration-300 hover:bg-white hover:text-black"
                    >
                      Youtube updates
                    </a>
                    <a
                      href="https://www.jadetimes.com/post/shocking-revelations-mr-neomal-perera-on-hidden-influences-in-sri-lanka-s-political-sphere"
                      className="text-xs capitalize duration-300 hover:opacity-50"
                      aria-label="read more about this article"
                    >
                      Read more
                      <FaChevronRight className="inline" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </article>
          <article
            style={{
              backgroundImage: `url(${articlesFive[1].image})`,
            }}
            className="h-full w-full bg-center bg-cover bg-no-repeat snap-start"
          >
            <div className="h-full bg-gradient-to-t from-black to-transparent p-4 flex">
              <div className="mt-auto mb-8 md:grid md:grid-cols-2 md:gap-4 md:items-center md:max-w-screen-md md:mx-auto">
                <iframe
                  title="What We Know About Trump Shooting Suspect Thomas Matthew Crooks | JadeTimes"
                  width="100%"
                  src="https://www.youtube.com/embed/uHcsQKx6AzY?autoplay=0&mute=0&controls=1&loop=0&origin=https://www.jadetimes.com&playsinline=1&enablejsapi=1"
                  className="aspect-video"
                  sandbox="allow-same-origin allow-scripts allow-popups"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  loading="lazy"
                ></iframe>

                <div className="text-white">
                  <h3 className="text-sm my-3 lg:text-base md:mt-0">
                    How Sri Lanka's 2024 Election Could Shape the Future of
                    Entrepreneurs
                  </h3>
                  <p className="text-xs">
                    We explore how the upcoming election could shape
                    opportunities and challenges for business owners and
                    startups across the country. A shocking revelation about the
                    connection between these two groups, shedding light on
                    hidden influences and funding sources.
                  </p>
                  <div className="mt-4">
                    <a
                      href="https://www.youtube.com/@JadeTimes"
                      className="bg-neutral-800 inline-block uppercase font-medium text-xs px-3 py-2 mr-4 lg:px-2 lg:py-1 duration-300 hover:bg-white hover:text-black"
                    >
                      Youtube updates
                    </a>
                    <a
                      href="https://www.jadetimes.com/post/shocking-revelations-mr-neomal-perera-on-hidden-influences-in-sri-lanka-s-political-sphere"
                      className="text-xs capitalize duration-300 hover:opacity-50"
                      aria-label="read more about this article"
                    >
                      Read more
                      <FaChevronRight className="inline" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </article>
          <article
            style={{
              backgroundImage: `url(${articlesFive[0].image})`,
            }}
            className="h-full w-full bg-center bg-cover bg-no-repeat snap-start"
          >
            <div className="h-full bg-gradient-to-t from-black to-transparent p-4 flex">
              <div className="mt-auto mb-8 md:grid md:grid-cols-2 md:gap-4 md:items-center md:max-w-screen-md md:mx-auto">
                <iframe
                  title="What We Know About Trump Shooting Suspect Thomas Matthew Crooks | JadeTimes"
                  width="100%"
                  src="https://www.youtube.com/embed/uHcsQKx6AzY?autoplay=0&mute=0&controls=1&loop=0&origin=https://www.jadetimes.com&playsinline=1&enablejsapi=1"
                  className="aspect-video"
                  sandbox="allow-same-origin allow-scripts allow-popups"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  loading="lazy"
                ></iframe>

                <div className="text-white">
                  <h3 className="text-sm my-3 lg:text-base md:mt-0">
                    How Sri Lanka's 2024 Election Could Shape the Future of
                    Entrepreneurs
                  </h3>
                  <p className="text-xs">
                    We explore how the upcoming election could shape
                    opportunities and challenges for business owners and
                    startups across the country. A shocking revelation about the
                    connection between these two groups, shedding light on
                    hidden influences and funding sources.
                  </p>
                  <div className="mt-4">
                    <a
                      href="https://www.youtube.com/@JadeTimes"
                      className="bg-neutral-800 inline-block uppercase font-medium text-xs px-3 py-2 mr-4 lg:px-2 lg:py-1 duration-300 hover:bg-white hover:text-black"
                    >
                      Youtube updates
                    </a>
                    <a
                      href="https://www.jadetimes.com/post/shocking-revelations-mr-neomal-perera-on-hidden-influences-in-sri-lanka-s-political-sphere"
                      className="text-xs capitalize duration-300 hover:opacity-50"
                      aria-label="read more about this article"
                    >
                      Read more
                      <FaChevronRight className="inline" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </Slider>
      </div>
    </div>
  );
};

export default Home;
