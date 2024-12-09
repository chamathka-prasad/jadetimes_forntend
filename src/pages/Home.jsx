import { Link } from "react-router-dom";

import LatestUpdatesLink from "../components/LatestUpdatesLink";
import LinkToMembership from "../components/LinkToMembership";
import PictureLink from "../components/PictureLink";
import FirstSlider from "../components/FirstSlider";
import SecondSlider from "../components/SecondSlider";
import ThirdSlider from "../components/ThirdSlider";
import ThirdBigArticles from "../components/ThirdBigArticles";
import FourthBigArticles from "../components/FourthBigArticles";
import YouTubeArticle from "../components/YouTubeArticle.";
import Iframe from "../components/Iframe";
import Section from "../components/Section";

import useWindowSize from "../hooks/useWindowSize";

import Articles from "../routes/Articles";

import SpecialGraphics from "../assets/advertise/specialgraphics.webp";
import DigitUsTecGlobal from "../assets/advertise/digitustecglobal.mp4";
import SpecialPrinters from "../assets/advertise/specialprinters.mp4";

const Home = () => {
  const screenSize = useWindowSize();

  return (
    <>
      <Section tag="div" className="relative md:p-4">
        {screenSize !== "small" && <LatestUpdatesLink className="text-[0.625rem] md:mb-4 md:px-2 md:py-[0.15rem]" />}
        <div className="md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-[repeat(17,_minmax(0,_1fr))] lg:gap-5 xl:col-start-2 xl:col-span-10 xl:row-start-2">
          <article className="md:grid md:grid-cols-2 md:border md:border-neutral-300 md:col-span-2 lg:col-[13_span_/_13_span] lg:row-start-2">
            <div className="relative">
              {screenSize === "small" && <LatestUpdatesLink className="px-3 py-2 text-sm absolute -bottom-9 left-1/2 -translate-x-1/2 -translate-y-1/2" />}
              <PictureLink link={Articles[0].link}>
                <img src={Articles[0].image} alt={Articles[0].title} className="object-cover object-center md:h-full" />
              </PictureLink>
            </div>
            <div className="p-4 pt-8 flex flex-col gap-2 md:p-4 md:gap-4 lg:p-8">
              <div>
                {screenSize === "large" && <Link className="mb-1 lg:block lg:w-fit lg:text-xs">{Articles[0].authorName}</Link>}
                <div className="whitespace-nowrap lg:text-xs">{Articles[0].posted}</div>
              </div>
              <Link to={Articles[0].link} className="text-2xl line-clamp-3 lg:text-3xl lg:leading-[2.8rem]">
                {Articles[0].title}
              </Link>
              <p className="line-clamp-2 lg:text-sm lg:line-clamp-3">{Articles[0].title}</p>
            </div>
          </article>
          <div className="m-4 flex flex-col gap-4 md:m-0 md:grid md:grid-cols-2 md:col-span-2 md:gap-4 lg:grid-cols-10 lg:gap-5 lg:col-span-full">
            {Articles.slice(0, 4).map((article, index) => (
              <article key={index} className="flex flex-row p-4 gap-4 justify-between border border-neutral-300 lg:justify-normal lg:p-0 lg:flex-col lg:gap-0 lg:col-span-2">
                <PictureLink link={article.link} className="order-2 lg:order-none">
                  <img src={article.image} alt={article.title} className="min-w-24 w-24 min-h-24 h-24 object-cover object-center lg:w-full lg:h-full" />
                </PictureLink>
                <div className="flex flex-col justify-between gap-4 lg:justify-normal lg:p-4">
                  {screenSize === "large" && (
                    <Link to={article.categoryLink} className="lg:w-fit text-sm font-light text-neutral-500 lg:order-[-1]">
                      {article.categoryTitle}
                    </Link>
                  )}
                  <Link to={article.link} className="overflow-wrap-anywhere line-clamp-2 lg:text-sm lg:line-clamp-3">
                    {article.title}
                  </Link>
                  {screenSize === "large" && <p className="lg:line-clamp-2 lg:text-xs">{article.title}</p>}
                  {screenSize !== "large" && <div className="whitespace-nowrap lg:text-xs">{article.posted}</div>}
                </div>
              </article>
            ))}
            {screenSize === "large" && (
              <div className="lg:col-span-2">
                <a href="https://specialgraphics.us/" className="block" target="_blank" aria-label="visit special graphics website">
                  <img src={SpecialGraphics} alt="special graphics representation" className="md:h-[320px] lg:h-auto w-full" loading="lazy" />
                </a>
                <LatestUpdatesLink className="px-3 py-2 w-full text-xs mt-5" />
              </div>
            )}
          </div>
          <ThirdBigArticles articles={Articles.slice(0, 4)} />
          <FourthBigArticles articles={Articles.slice(0, 3)} />
        </div>
        <a href="http://www.digitustecglobal.com/" className="hidden 2xl:block absolute top-[154px] -left-[118px] w-[117px]" target="_blank" aria-label="visit digit us tec global website">
          <video autoPlay loop muted playsInline>
            <source src={DigitUsTecGlobal} type="video/mp4" />
          </video>
        </a>
        <a href="https://www.specialprinters.us/" className="hidden 2xl:block absolute top-[154px] -right-[118px] w-[117px]" target="_blank" aria-label="visit special printers website">
          <video autoPlay loop muted playsInline>
            <source src={SpecialPrinters} type="video/mp4" />
          </video>
        </a>
      </Section>
      <Section className="p-4">
        <h2 className="border-b-[3px] border-b-accent pb-1 font-semibold text-lg lg:mt-0 lg:text-xl">More News</h2>
        <div className="my-4 flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-4 lg:my-5 lg:grid-cols-10 lg:gap-5">
          {Articles.map((article, index) => (
            <article key={index} className="flex flex-row p-4 gap-4 justify-between lg:justify-normal border border-neutral-300 lg:col-span-2 lg:flex-col lg:p-0 lg:gap-0">
              <PictureLink link={article.link} className="order-2 lg:order-none">
                <img src={article.image} alt={article.title} className="min-w-24 w-24 min-h-24 h-24 object-cover object-center lg:w-full lg:h-full" />
              </PictureLink>
              <div className="flex flex-col justify-between lg:justify-normal gap-4 lg:p-4">
                <Link to={article.link} className="overflow-wrap-anywhere line-clamp-2 lg:text-sm lg:line-clamp-3">{article.title}</Link>
                {screenSize !== "large" && <div className="whitespace-nowrap">{article.posted}</div>}
              </div>
            </article>
          ))}
        </div>
        <div className="lg:grid lg:grid-cols-10 lg:mb-5">
          {screenSize !== "large" && (
            <div className="flex flex-col gap-4 md:flex-row">
              {Articles.slice(0, 2).map((article, index) => (
                <article className="border border-neutral-300 aspect-square relative" key={index}>
                  {screenSize !== "large" && <img src={article.image} alt="" className="absolute top-0 h-full object-cover object-center -z-[1]" loading="lazy" />}
                  <div className="flex flex-col justify-between h-full p-4 bg-[#000000aa] text-white">
                    <div className="whitespace-nowrap">{article.posted}</div>
                    <Link to={article.link} className="text-lg line-clamp-3">{article.title}</Link>
                  </div>
                </article>
              ))}
            </div>
          )}
          {screenSize === "large" && <FirstSlider articles={Articles.slice(0, 2)} />}
          <section className="lg:pl-5 lg:border-l lg:border-neutral-300 lg:col-span-4 lg:flex lg:flex-col lg:gap-5">
            <div className="my-4 lg:mx-0 lg:flex lg:flex-row lg:gap-5 lg:items-center lg:my-0">
              <h3 className="text-lg lg:text-xl font-semibold lg:mt-0">
                Whats <span className="font-normal">Trending</span>
              </h3>
              {screenSize === "large" && <LinkToMembership className="lg:font-semibold lg:text-[0.625rem]" />}
            </div>
            <div className="flex flex-col gap-4 md:grid md:grid-cols-2 lg:grid-cols-2 lg:gap-5 lg:p-0">
              {Articles.slice(0, 8).map((article, index) => (
                <article key={index} className="flex flex-row p-4 gap-4 border border-neutral-300">
                  <PictureLink className="lg:order-2 cursor-pointer" link={article.link}>
                    <img
                      src={article.image}
                      alt={article.title}
                      className="min-w-24 w-24 min-h-24 h-24 lg:min-w-[3.75rem] lg:w-[3.75rem] lg:min-h-[3.75rem] lg:h-[3.75rem] object-cover object-center"
                    />
                  </PictureLink>
                  <div className="flex flex-col justify-between lg:h-fit gap-4 lg:justify-normal lg:gap-2">
                    <Link to={article.link} className="line-clamp-2 overflow-wrap-anywhere lg:text-sm lg:line-clamp-3">{article.title}</Link>
                    {screenSize !== "large" && <div className="whitespace-nowrap lg:text-xs">{article.posted}</div>}
                    {screenSize === "large" && (
                      <Link to={article.categoryLink} className="text-sm font-light w-fit text-neutral-500">
                        {article.categoryTitle}
                      </Link>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
        {screenSize === "large" && (
          <div className="grid grid-cols-[repeat(19,_minmax(0,_1fr))] gap-5">
            <section className="col-[span_14_/_span_14]">
              <h3 className="mb-5 font-semibold text-lg lg:text-xl">
                Must Watch <span className="font-normal">Top 10 Ranking Segments</span>
              </h3>
              <SecondSlider />
            </section>
            <div className="col-span-5 mt-12">
              <div className="flex flex-col gap-5 mb-5">
                {Articles.slice(0, 3).map((article, index) => (
                  <article className="flex flex-row gap-4 border border-neutral-300 p-4" key={index}>
                    <PictureLink link={article.link}>
                      <img src={article.image} alt={article.title} className="min-w-24 w-24 min-h-24 h-24 object-cover object-center" />
                    </PictureLink>
                    <div className="flex flex-col gap-4 justify-between">
                      <h4>
                        <Link to={article.link} className="line-clamp-3 overflow-wrap-anywhere text-sm">
                          {article.title}
                        </Link>
                      </h4>
                      <Link to={article.categoryLink} className="inline-block w-fit text-sm text-neutral-500 font-light">
                        {article.categoryTitle}
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
              <section>
                <h3 className="mb-4 border-b-2 border-neutral-900 pb-1">
                  <Link to="/political" className="font-semibold text-lg lg:text-xl">
                    Political <span className="font-normal">Updates</span>
                  </Link>
                </h3>
                {Articles.slice(0, 6).map((article, index) => (
                  <Link key={index} to={article.link} className="text-xs mb-3 line-clamp-2 overflow-wrap-anywhere last:mb-0">
                    {article.title}
                  </Link>
                ))}
              </section>
            </div>
          </div>
        )}
        <div className="md:grid md:gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-10 mt-4 lg:mt-5">
          <section>
            <h3 className="mb-4 border-b-2 border-neutral-900 pb-1 text-lg font-semibold">
              <Link to="news/asia">Asia</Link>
            </h3>
            {Articles.slice(0, 3).map((article, index) => (
              <article key={index} link={article.link} className="mb-4 md:last-of-type:mb-0 lg:odd:my-8 border border-neutral-300 lg:border-0">
                <div className="flex flex-col gap-4">
                  {screenSize !== "large" && (
                    <PictureLink link={article.link}>
                      <img src={article.image} alt="" />
                    </PictureLink>
                  )}
                  <div className="flex flex-col gap-4 px-4 pb-4 lg:p-0">
                    <div className="whitespace-nowrap lg:text-xs lg:order-2">{article.posted}</div>
                    <Link to={article.link} className="text-lg line-clamp-2 lg:text-base lg:line-clamp-3">{article.title}</Link>
                  </div>
                </div>
              </article>
            ))}
          </section>
          <section>
            <h3 className="mb-4 border-b-2 border-neutral-900 pb-1 text-lg font-semibold">
              <Link to="news/australia">Australia</Link>
            </h3>
            {Articles.slice(0, 3).map((article, index) => (
              <article key={index} link={article.link} className="mb-4 md:last-of-type:mb-0 lg:odd:my-8 border border-neutral-300 lg:border-0">
                <div className="flex flex-col gap-4">
                  {screenSize !== "large" && (
                    <PictureLink link={article.link}>
                      <img src={article.image} alt="" />
                    </PictureLink>
                  )}
                  <div className="flex flex-col gap-4 px-4 pb-4 lg:p-0">
                    <div className="whitespace-nowrap lg:text-xs lg:order-2">{article.posted}</div>
                    <Link to={article.link} className="text-lg line-clamp-2 lg:text-base lg:line-clamp-3">{article.title}</Link>
                  </div>
                </div>
              </article>
            ))}
          </section>
          <section>
            <h3 className="mb-4 border-b-2 border-neutral-900 pb-1 text-lg font-semibold">
              <Link to="news/usa">USA</Link>
            </h3>
            {Articles.slice(0, 3).map((article, index) => (
              <article key={index} link={article.link} className="mb-4 md:last-of-type:mb-0 lg:odd:my-8 border border-neutral-300 lg:border-0">
                <div className="flex flex-col gap-4">
                  {screenSize !== "large" && (
                    <PictureLink link={article.link}>
                      <img src={article.image} alt="" />
                    </PictureLink>
                  )}
                  <div className="flex flex-col gap-4 px-4 pb-4 lg:p-0">
                    <div className="whitespace-nowrap lg:text-xs lg:order-2">{article.posted}</div>
                    <Link to={article.link} className="text-lg line-clamp-2 lg:text-base lg:line-clamp-3">{article.title}</Link>
                  </div>
                </div>
              </article>
            ))}
          </section>
          <section>
            <h3 className="mb-4 border-b-2 border-neutral-900 pb-1 text-lg font-semibold">
              <Link to="news/europe">Europe</Link>
            </h3>
            {Articles.slice(0, 3).map((article, index) => (
              <article key={index} link={article.link} className="mb-4 last-of-type:mb-0 lg:odd:my-8 border border-neutral-300 lg:border-0">
                <div className="flex flex-col gap-4">
                  {screenSize !== "large" && (
                    <PictureLink link={article.link}>
                      <img src={article.image} alt="" />
                    </PictureLink>
                  )}
                  <div className="flex flex-col gap-4 px-4 pb-4 lg:p-0">
                    <div className="whitespace-nowrap lg:text-xs lg:order-2">{article.posted}</div>
                    <Link to={article.link} className="text-lg line-clamp-2 lg:text-base lg:line-clamp-3">{article.title}</Link>
                  </div>
                </div>
              </article>
            ))}
          </section>
        </div>
      </Section>
      <Section className="p-4 lg:pb-5">
        <h2 className="border-b-[3px] border-b-accent pb-1 font-semibold text-lg lg:text-xl lg:mt-0">
          <Link to="/sports">News Updates<span className="font-normal"> | Sports</span></Link>
        </h2>
        <div className="mt-4 flex flex-col gap-4 md:grid md:grid-cols-2 lg:grid-cols-10 lg:gap-5 lg:mt-5">
          {Articles.slice(0, 5).map((article, index) => (
            <article key={index} className="border border-neutral-300 block md:m-0 lg:col-span-2">
              <div className="flex flex-row p-4 gap-4 justify-between lg:justify-normal lg:p-0 lg:flex-col lg:gap-0">
                <PictureLink className="order-2 lg:order-none" link={article.link}>
                  <img src={article.image} alt="" className="min-w-24 w-24 min-h-24 h-24 object-cover object-center lg:w-full lg:h-full" />
                </PictureLink>
                <div className="flex flex-col justify-between lg:justify-normal gap-4 lg:p-4">
                  <Link to={article.link} className="overflow-wrap-anywhere line-clamp-2 lg:text-sm lg:line-clamp-3">{article.title}</Link>
                  {screenSize === "large" && <p className="lg:line-clamp-2 lg:text-xs">{article.title}</p>}
                  {screenSize !== "large" && <div className="whitespace-nowrap lg:text-xs lg:order-[-1]">{article.posted}</div>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>
      <div className="bg-neutral-900">
        <Section className="p-4 pt-3">
          <h2 className="border-b-[3px] border-b-accent pb-1 text-white font-semibold text-lg lg:text-xl mb-4 lg:m-0">
            Exclusive Pulse <span className="font-normal">| Jadetimes</span>
          </h2>
          <div className="text-white flex flex-col gap-4 md:grid md:grid-cols-2 place-items-center lg:gap-5 lg:mt-5 lg:mb-1">
            <Iframe title={Articles[0].title} videoId="" />
            <YouTubeArticle className="flex flex-col gap-4 lg:w-96" article={Articles[0]} />
          </div>
        </Section>
      </div>
      <Section tag="div" className="p-4 flex flex-col gap-4 md:grid md:grid-cols-3 lg:grid-cols-8 lg:gap-5 lg:py-5">
        <div className="lg:col-span-2 lg:flex lg:flex-col lg:gap-5">
          <article className="border border-neutral-300 lg:col-span-2 h-full lg:h-auto lg:border-none flex flex-row p-4 justify-between md:justify-normal gap-4 md:gap-0 lg:gap-2 md:p-0 md:flex-col">
            <PictureLink link={Articles[0].link} className="order-2 md:order-none">
              <img src={Articles[0].image} alt="" className="min-w-24 w-24 min-h-24 h-24 object-cover object-center md:w-full md:h-full" />
            </PictureLink>
            <div className="flex flex-col justify-between md:justify-normal gap-4 md:p-4 lg:p-0">
              <Link to={Articles[0].link} className="overflow-wrap-anywhere line-clamp-2 lg:text-lg lg:font-medium lg:text-heading">{Articles[0].title}</Link>
              {screenSize !== "large" && <div className="whitespace-nowrap lg:text-xs md:order-[-1]">{Articles[0].posted}</div>}
            </div>
          </article>
          {screenSize === "large" && (
            <div className="lg:flex lg:flex-col lg:gap-5">
              {Articles.slice(0, 3).map((article, index) => (
                <article className="flex flex-row gap-4 items-center" key={index}>
                  <PictureLink link={article.link}>
                    <img src={article.image} alt="" className="min-w-28 w-28 min-h-20 h-20 object-cover object-center" />
                  </PictureLink>
                  <Link to={article.link} className="overflow-wrap-anywhere text-sm line-clamp-3">{article.title}</Link>
                </article>
              ))}
            </div>
          )}
        </div>
        <div className="block aspect-square border border-neutral-300 h-full md:w-full lg:aspect-auto lg:col-span-4 lg:border-none">
          <article className="h-full relative">
            {screenSize !== "large" && <img src={Articles[0].image} alt="" className="absolute top-0 h-full object-cover object-center -z-[1]" loading="lazy" />}
            {screenSize === "large" && (
              <PictureLink link={Articles[0].link}>
                <img src={Articles[0].image} alt="" />
              </PictureLink>
            )}
            <div className="flex flex-col justify-between h-full p-4 bg-[#000000aa] lg:h-auto lg:bg-white lg:gap-2 lg:p-0 lg:justify-normal lg:mt-2">
              <Link to={Articles[0].link} className="order-2 line-clamp-3 text-white text-lg lg:text-2xl lg:line-clamp-2 lg:font-medium lg:text-heading">{Articles[0].title}</Link>
              {screenSize === "large" && <p className="lg:line-clamp-2 lg:text-lg lg:order-3">{Articles[0].title}</p>}
              {screenSize !== "large" && <div className="whitespace-nowrap text-white lg:text-xs lg:text-neutral-900">{Articles[0].posted}</div>}
            </div>
          </article>
        </div>
        <div className="lg:col-span-2 lg:flex lg:flex-col lg:gap-5">
          <article className="border border-neutral-300 lg:col-span-2 h-full lg:h-auto lg:border-none flex flex-row p-4 justify-between md:justify-normal gap-4 md:gap-0 lg:gap-2 md:p-0 md:flex-col">
            <PictureLink link={Articles[0].link} className="order-2 md:order-none">
              <img src={Articles[0].image} alt="" className="min-w-24 w-24 min-h-24 h-24 object-cover object-center md:w-full md:h-full" />
            </PictureLink>
            <div className="flex flex-col justify-between md:justify-normal gap-4 md:p-4 lg:p-0">
              <Link to={Articles[0].link} className="overflow-wrap-anywhere line-clamp-2 lg:text-lg lg:font-medium lg:text-heading">{Articles[0].title}</Link>
              {screenSize !== "large" && <div className="whitespace-nowrap lg:text-xs md:order-[-1]">{Articles[0].posted}</div>}
            </div>
          </article>
          {screenSize === "large" && (
            <div className="lg:flex lg:flex-col lg:gap-5">
              {Articles.slice(0, 3).map((article, index) => (
                <article className="flex flex-row gap-4 items-center" key={index}>
                  <PictureLink link={article.link} className="order-2">
                    <img src={article.image} alt="" className="min-w-28 w-28 min-h-20 h-20 object-cover object-center" />
                  </PictureLink>
                  <Link to={article.link} className="overflow-wrap-anywhere text-sm line-clamp-3">{article.title}</Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </Section>
      <ThirdSlider articles={Articles.slice(0, 3)} />
    </>
  );
};

export default Home;
