import { Link } from "react-router-dom";

import H2 from "../components/H2";
import UpdatesBadge from "../components/UpdatesBadge";
import Article from "../components/Article";
import PictureLink from "../components/PictureLink";
import FirstSlider from "../components/FirstSlider";
import SecondSlider from "../components/SecondSlider";
import ImageSlider from "../components/ImageSlider";

import Articles from "../routes/Articles";

import SpecialGraphics from "../assets/Adds/add-3.webp";
import DigitUsTecGlobal from "../assets/Adds/add-1.gif";
import SpecialPrinters from "../assets/Adds/add-2.gif";

import { FaCircle, FaChevronRight } from "react-icons/fa6";

const Home = () => {
  const articlesTwo = Articles.slice(1, 5);
  const articlesThree = Articles.slice(5, 9);
  const articlesFour = Articles.slice(0, 10);
  const articlesFive = Articles.slice(0, 2);
  const articlesSix = Articles.slice(0, 8);
  const articlesSeven = Articles.slice(0, 5);
  const articlesEight = Articles.slice(0, 3);

  const navigateToLink = (link) => {
    window.location.href = link;
  };

  return (
    <>
        <div className="max-w-[1305px] mx-auto md:p-4 2xl:grid 2xl:grid-cols-12 2xl:gap-4 2xl:max-w-[1560px]">
          <UpdatesBadge className="hidden md:block md:mb-4 md:px-2 md:py-[0.15rem] lg:col-start-2 2xl:mb-0">
            Latest Updates
          </UpdatesBadge>
          <div className="text-neutral-900 md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-[repeat(17,_minmax(0,_1fr))] lg:gap-6 xl:col-start-2 xl:col-span-10 xl:row-start-2">
            <article className="md:grid md:grid-cols-2 md:border md:border-neutral-300 md:col-span-2 md:row-span-2 lg:col-[13_span_/_13_span] lg:row-start-2 lg:row-span-3">
              <div className="relative">
                <UpdatesBadge className="block px-3 py-2 text-sm absolute -bottom-9 left-1/2 -translate-x-1/2 -translate-y-1/2 md:hidden">
                  Latest Updates
                </UpdatesBadge>
                <PictureLink link={Articles[0].link}>
                  <img
                    src={Articles[0].image}
                    alt={Articles[0].title}
                    className="object-cover object-center md:h-full"
                  />
                </PictureLink>
              </div>
              <div className="p-4 pt-8 flex flex-col justify-between gap-2 md:justify-start md:p-4 md:gap-4 lg:p-8">
                <div>
                  <Link className="hidden lg:inline-block lg:text-xs">
                    {Articles[0].authorName}
                  </Link>
                  <div className="whitespace-nowrap lg:text-xs">
                    <span>{Articles[0].posted}</span>
                    <FaCircle className="text-[2px] inline-block mx-2" />
                    <span>{Articles[0].readTime}</span>
                  </div>
                </div>
                <h2>
                  <Link
                    to={Articles[0].link}
                    className="text-2xl line-clamp-3 lg:text-3xl lg:leading-[2.8rem]"
                  >
                    {Articles[0].title}
                  </Link>
                </h2>
                <p className="line-clamp-2 lg:text-sm lg:line-clamp-3">
                  {Articles[0].title}
                </p>
              </div>
            </article>
            <div className="p-4 flex flex-col gap-4 md:p-0 md:grid md:grid-cols-2 md:col-span-2 md:gap-4 lg:grid-cols-12 lg:gap-5 lg:col-[13_span_/_13_span]">
              {articlesTwo.map((article, index) => (
                <article
                  key={index}
                  className="flex flex-row p-4 gap-4 justify-between border border-neutral-300 lg:p-0 lg:flex-col lg:col-span-3"
                >
                  <PictureLink
                    link={article.link}
                    className="order-2 lg:order-none"
                  >
                    <img
                      src={article.image}
                      alt={article.title}
                      className="min-w-24 w-24 min-h-24 h-24 object-cover object-center lg:w-full lg:h-full"
                    />
                  </PictureLink>
                  <div className="flex flex-col justify-between gap-4 lg:p-4 lg:pt-0">
                    <Link
                      to={article.categoryLink}
                      className="hidden lg:inline-block lg:w-fit text-sm font-light text-[#686868] lg:order-[-1]"
                    >
                      {article.categoryTitle}
                    </Link>
                    <h2>
                      <Link
                        to={article.link}
                        className="overflow-anywhere line-clamp-2 lg:text-sm lg:line-clamp-3"
                      >
                        {article.title}
                      </Link>
                    </h2>
                    <p className="hidden lg:line-clamp-2 lg:text-[0.6875rem]">
                      {article.title}
                    </p>
                    <div className="whitespace-nowrap lg:text-xs lg:hidden">
                      {article.posted}
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div className="lg:col-start-[14] lg:col-span-4 lg:row-start-5 lg:row-span-1">
              <a
                href="https://specialgraphics.us/"
                className="block"
                target="_blank"
                aria-label="visit special graphics website"
              >
                <img
                  src={SpecialGraphics}
                  alt="special graphics representation"
                  className="md:h-[320px] lg:h-auto"
                />
              </a>
              <div className="hidden lg:mt-3 lg:flex lg:flex-wrap lg:flex-row lg:items-center xl:flex-nowrap xl:gap-4">
                <UpdatesBadge className="block px-3 py-2 text-center w-full">
                  Latest Updates
                </UpdatesBadge>
                <a
                  href=""
                  className="w-full text-sm group flex flex-row items-center justify-center py-[0.4rem] text-nowrap"
                >
                  Read More
                  <FaChevronRight className="inline-block duration-300 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100" />
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-4 p-4 md:p-0 md:col-span-2 md:grid md:grid-cols-2 md:row-span-2 lg:grid-cols-4 lg:col-span-full lg:row-start-1 lg:row-span-1 lg:gap-0">
              {articlesThree.map((article, index) => (
                <article
                  key={index}
                  className="flex flex-col justify-between gap-4 lg:pr-6 lg:pl-6 lg:border-r-2 lg:border-[#51515137] lg:first:pl-0 lg:last:pr-0 lg:last:border-none"
                >
                  <PictureLink link={article.link} className="lg:hidden">
                    <img src={article.image} alt={article.title} />
                  </PictureLink>
                  <div className="flex flex-col justify-between gap-4">
                    <div className="whitespace-nowrap lg:text-xs">
                      {article.posted}
                    </div>
                    <h2>
                      <Link
                        to={article.link}
                        className="text-lg line-clamp-2 lg:text-base"
                      >
                        {article.title}
                      </Link>
                    </h2>
                  </div>
                </article>
              ))}
            </div>
            <div className="p-4 flex flex-col gap-4 md:p-0 md:col-start-2 md:row-start-4 lg:row-start-2 lg:row-span-3 lg:col-span-4 lg:gap-5">
              {articlesEight.map((article, index) => (
                <article
                  className="flex flex-row gap-4 lg:p-3 lg:border lg:border-neutral-300"
                  key={index}
                >
                  <PictureLink link={article.link} className="lg:order-2">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="min-w-24 w-24 min-h-24 h-24 lg:min-w-[4.25rem] lg:w-[4.25rem] lg:min-h-[4.25rem] lg:h-[4.25rem] object-cover object-center"
                    />
                  </PictureLink>
                  <div className="flex flex-col justify-center lg:justify-between lg:gap-2">
                    <h2>
                      <Link
                        to={article.link}
                        className="line-clamp-3 overflow-anywhere lg:text-sm"
                      >
                        {article.title}
                      </Link>
                    </h2>
                    <Link
                      to={article.categoryLink}
                      className="hidden lg:inline-block lg:w-fit text-sm text-[#686868] font-light"
                    >
                      {article.categoryTitle}
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <a
            href="http://www.digitustecglobal.com/"
            className="hidden 2xl:block 2xl:col-start-1 2xl:mt-[6.5rem] h-fit"
            target="_blank"
            aria-label="visit digit us tec global website"
          >
            <img
              src={DigitUsTecGlobal}
              alt="digit us tec global representation"
            />
          </a>
          <a
            href="https://www.specialprinters.us/"
            className="hidden 2xl:block 2xl:col-start-12 2xl:mt-[6.5rem] h-fit"
            target="_blank"
            aria-label="visit special printers website"
          >
            <img src={SpecialPrinters} alt="special printers representation" />
          </a>
        </div>
        <section className="p-4 max-w-[1305px] mx-auto text-neutral-900">
          <h2 className="border-b-[3px] border-b-[#FF322E] pb-1 text-[#111111] lg:mt-0">
            <Link className="font-semibold text-lg lg:text-xl">More News</Link>
          </h2>
          <div className="py-4 flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-10 lg:gap-5 lg:py-5">
            {articlesFour.map((article, index) => (
              <article
                key={index}
                className="flex flex-row p-4 gap-4 justify-between border border-neutral-300 lg:col-span-2 lg:flex-col lg:p-0"
              >
                <PictureLink
                  link={article.link}
                  className="order-2 lg:order-none"
                >
                  <img
                    src={article.image}
                    alt={article.title}
                    className="min-w-24 w-24 min-h-24 h-24 object-cover object-center lg:w-full lg:h-full"
                  />
                </PictureLink>
                <div className="flex flex-col justify-between gap-4 lg:p-4 lg:pt-0">
                  <h3>
                    <Link className="overflow-anywhere line-clamp-2 lg:text-sm lg:line-clamp-3">
                      {article.title}
                    </Link>
                  </h3>
                  <div className="whitespace-nowrap lg:hidden">
                    {article.posted}
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="lg:grid lg:grid-cols-10 lg:py-4">
            <div className="flex flex-col gap-4 md:flex-row lg:hidden">
              {articlesFive.map((article, index) => (
                <article
                  className="border border-neutral-300 bg-center bg-cover bg-no-repeat aspect-square"
                  style={{
                    backgroundImage: `url(${article.image})`,
                  }}
                  key={index}
                >
                  <div className="flex flex-col justify-between h-full p-8 bg-[#000000aa] text-white">
                    <div className="whitespace-nowrap">
                      {article.posted}
                    </div>
                    <h3>
                      <Link className="text-lg line-clamp-3">
                        {article.title}
                      </Link>
                    </h3>
                  </div>
                </article>
              ))}
            </div>
            <FirstSlider
              className="hidden lg:block lg:col-span-6 lg:border lg:border-neutral-300 lg:mr-10"
              articles={articlesFive}
            />
            <section className="lg:pl-10 lg:border-l lg:border-[#515151] lg:col-span-4 lg:flex lg:flex-col lg:gap-4">
              <div className="mb-4 lg:mx-0 lg:flex lg:flex-row lg:gap-4 lg:items-center lg:mb-0">
                <h3 className="mt-4 lg:mt-0">
                  <Link className="text-[#111111] text-lg lg:text-xl font-semibold">
                    Whats <span className="font-normal">Trending</span>
                  </Link>
                </h3>
                <Link
                  to="/membership"
                  className="hidden lg:block lg:bg-[#FF322F] lg:font-semibold lg:text-[0.625rem] lg:py-[0.35rem] lg:px-[0.938rem] lg:whitespace-nowrap lg:tracking-wide lg:text-white lg:border lg:border-[#FF322F] lg:duration-300 lg:hover:bg-white lg:hover:text-black lg:hover:border-neutral-900"
                >
                  Subscribe : 49.99/Year
                </Link>
              </div>
              <div className="flex flex-col gap-4 md:grid md:grid-cols-2 lg:grid-cols-2 lg:p-0 lg:h-full">
                {articlesSix.map((article, index) => (
                  <article
                    key={index}
                    className="flex flex-row p-4 gap-4 border border-neutral-300 lg:p-3"
                  >
                    <picture
                      className="lg:order-2 cursor-pointer"
                      onClick={() => navigateToLink(article.link)}
                    >
                      <img
                        src={article.image}
                        alt={article.title}
                        className="min-w-24 w-24 min-h-24 h-24 object-cover object-center lg:min-w-14 lg:w-14 lg:min-h-14 lg:h-14"
                      />
                    </picture>
                    <div className="flex flex-col justify-between gap-4 lg:justify-normal lg:gap-2">
                      <h4>
                        <Link className="line-clamp-2 overflow-anywhere lg:text-sm lg:line-clamp-3">
                          {article.title}
                        </Link>
                      </h4>
                      <div className="whitespace-nowrap lg:text-xs lg:hidden">
                        {article.posted}
                      </div>
                      <Link
                        to={article.categoryLink}
                        className="hidden lg:block text-sm font-light text-[#686868]"
                      >
                        {article.categoryTitle}
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>
          <section className="hidden lg:block">
            <h3 className="mb-4">
              <Link className="text-[#111111] font-semibold text-lg lg:text-xl">
                Must Watch{" "}
                <span className="font-normal">Top 10 Ranking Segments</span>
              </Link>
            </h3>
            <div className="grid grid-cols-[repeat(19,_minmax(0,_1fr))]">
              <SecondSlider />
            </div>
          </section>
        </section>
        <div className="mt-8 max-w-screen-xl mx-auto md:p-4 md:my-0 md:mx-auto md:grid md:gap-4 md:grid-cols-2 lg:grid-cols-4">
          <section>
            <H2
              heading="Asia"
              className="border-b-2 border-b-neutral-700 md:mx-0"
            />
            {articlesEight.map((article, index) => (
              <Article
                key={index}
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
            {articlesEight.map((article, index) => (
              <Article
                key={index}
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
            {articlesEight.map((article, index) => (
              <Article
                key={index}
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
            {articlesEight.map((article, index) => (
              <Article
                key={index}
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
          <H2
            heading="News Updates"
            className="border-b-[3px] border-b-red-700"
          >
            {" "}
            | Sports
          </H2>
          <div className="md:grid md:grid-cols-2 md:gap-4 md:p-4 lg:grid-cols-10">
            {articlesSeven.map((article, index) => (
              <Article
                key={index}
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
                sandbox="allow-same-origin allow-scripts allow-popups allow-presentation"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                loading="lazy"
              ></iframe>
              <div className="lg:w-96 lg:mx-auto">
                <a
                  href="https://www.youtube.com/@JadeTimes"
                  className="hidden md:bg-neutral-800 md:inline-block md:tracking-widest md:mb-4 md:text-nowrap md:uppercase md:font-medium md:text-xs md:px-2 md:py-1 md:duration-300 md:hover:bg-white md:hover:text-black"
                >
                  Youtube updates
                </a>
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
                    className="bg-neutral-800 inline-block uppercase tracking-widest text-nowrap font-medium text-xs px-3 py-2 duration-300 hover:bg-white hover:text-black md:hidden"
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
              {articlesEight.map((article, index) => (
                <Article
                  key={index}
                  link={article.link}
                  className="border border-neutral-300 block m-4 md:m-0 lg:border-none"
                >
                  <article className="flex flex-row p-4 gap-4 lg:p-0">
                    <picture>
                      <img
                        src={article.image}
                        alt=""
                        className="min-w-28 w-28 min-h-20 h-20 object-cover object-center"
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
              {articlesEight.map((article, index) => (
                <Article
                  key={index}
                  link={article.link}
                  className="border border-neutral-300 block m-4 md:m-0 lg:border-none"
                >
                  <article className="flex flex-row p-4 gap-4 lg:p-0">
                    <picture className="lg:order-2">
                      <img
                        src={article.image}
                        alt=""
                        className="min-w-28 w-28 min-h-20 h-20 object-cover object-center"
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
      <ImageSlider articles={articlesEight} />
    </>
  );
};

export default Home;
