import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa6";

import UpdatesBadge from "../components/UpdatesBadge";
import MembershipBadge from "../components/MembershipBadge";
import PictureLink from "../components/PictureLink";
import FirstSlider from "../components/FirstSlider";
import SecondSlider from "../components/SecondSlider";
import ThirdSlider from "../components/ThirdSlider";

import Articles from "../routes/Articles";

import SpecialGraphics from "../assets/add-3.webp";
import DigitUsTecGlobal from "../assets/add-1.gif";
import SpecialPrinters from "../assets/add-2.gif";

import useWindowSize from "../hooks/useWindowSize";

const Home = () => {
  const screen = useWindowSize();

  const articlesTwo = Articles.slice(1, 5);
  const articlesThree = Articles.slice(5, 9);
  const articlesFour = Articles.slice(0, 10);
  const articlesFive = Articles.slice(0, 2);
  const articlesSix = Articles.slice(0, 8);
  const articlesSeven = Articles.slice(0, 5);
  const articlesEight = Articles.slice(0, 3);

  return (
    <>
      <div className="max-w-[1300px] mx-auto relative md:p-4">
        {screen !== "small" && <UpdatesBadge className="md:block md:mb-4 md:px-2 md:py-[0.15rem]">Latest Updates</UpdatesBadge>}
        <div className="text-neutral-900 md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-[repeat(17,_minmax(0,_1fr))] lg:gap-5 xl:col-start-2 xl:col-span-10 xl:row-start-2">
          <article className="md:grid md:grid-cols-2 md:border md:border-neutral-300 md:col-span-2 lg:col-[13_span_/_13_span] lg:row-start-2">
            <div className="relative">
              {screen === "small" && <UpdatesBadge className="block px-3 py-2 text-sm absolute -bottom-9 left-1/2 -translate-x-1/2 -translate-y-1/2">Latest Updates</UpdatesBadge>}
              <PictureLink link={Articles[0].link}>
                <img src={Articles[0].image} alt={Articles[0].title} className="object-cover object-center md:h-full" />
              </PictureLink>
            </div>
            <div className="p-4 pt-8 flex flex-col justify-between gap-2 md:justify-start md:p-4 md:gap-4 lg:p-8">
              <div>
                {screen === "large" && <Link className="lg:block lg:w-fit lg:text-xs">{Articles[0].authorName}</Link>}
                <div className="whitespace-nowrap lg:text-xs">{Articles[0].posted}</div>
              </div>
              <h2>
                <Link to={Articles[0].link} className="text-2xl line-clamp-3 lg:text-3xl lg:leading-[2.8rem]">
                  {Articles[0].title}
                </Link>
              </h2>
              <p className="line-clamp-2 lg:text-sm lg:line-clamp-3">{Articles[0].title}</p>
            </div>
          </article>
          <div className="p-4 flex flex-col gap-4 md:p-0 md:grid md:grid-cols-2 md:col-span-2 md:gap-4 lg:grid-cols-12 lg:gap-5 lg:col-[13_span_/_13_span]">
            {articlesTwo.map((article, index) => (
              <article key={index} className="flex flex-row p-4 gap-4 border border-neutral-300 lg:p-0 lg:flex-col lg:gap-0 lg:col-span-3">
                <PictureLink link={article.link} className="order-2 lg:order-none">
                  <img src={article.image} alt={article.title} className="min-w-24 w-24 min-h-24 h-24 object-cover object-center lg:w-full lg:h-full" />
                </PictureLink>
                <div className="flex flex-col justify-between gap-4 lg:p-4">
                  {screen === "large" && (
                    <Link to={article.categoryLink} className="lg:w-fit text-sm font-light text-[#686868] lg:order-[-1]">
                      {article.categoryTitle}
                    </Link>
                  )}
                  <h2>
                    <Link to={article.link} className="overflow-anywhere line-clamp-2 lg:text-sm lg:line-clamp-3">
                      {article.title}
                    </Link>
                  </h2>
                  {screen === "large" && <p className="lg:line-clamp-2 lg:text-[0.6875rem]">{article.title}</p>}
                  {screen !== "large" && <div className="whitespace-nowrap lg:text-xs">{article.posted}</div>}
                </div>
              </article>
            ))}
          </div>
          <div className="lg:col-start-[14] lg:col-span-4 lg:row-start-3 lg:row-span-1">
            <a href="https://specialgraphics.us/" className="block" target="_blank" aria-label="visit special graphics website">
              <img src={SpecialGraphics} alt="special graphics representation" className="md:h-[320px] lg:h-auto" />
            </a>
            {screen === "large" && (
              <div className="lg:mt-4 lg:flex lg:flex-row lg:items-center xl:gap-4">
                <UpdatesBadge className="block px-3 py-2 text-center w-full">Latest Updates</UpdatesBadge>
                <a href="" className="w-full text-[#282626] text-sm group flex flex-row items-center justify-center py-[0.4rem] text-nowrap">
                  Read More
                  <FaChevronRight className="inline-block" />
                </a>
              </div>
            )}
          </div>
          <div className="flex flex-col gap-4 p-4 md:p-0 md:col-span-2 md:grid md:grid-cols-2 md:row-span-2 lg:grid-cols-4 lg:col-span-full lg:row-start-1 lg:row-span-1 lg:gap-0">
            {articlesThree.map((article, index) => (
              <article key={index} className="flex flex-col justify-between gap-4 lg:pr-6 lg:pl-6 lg:border-r-2 lg:border-[#51515137] lg:first:pl-0 lg:last:pr-0 lg:last:border-none">
                {screen !== "large" && (
                  <PictureLink link={article.link}>
                    <img src={article.image} alt={article.title} />
                  </PictureLink>
                )}
                <div className="flex flex-col justify-between gap-4">
                  <div className="whitespace-nowrap lg:text-xs">{article.posted}</div>
                  <h2>
                    <Link to={article.link} className="text-lg line-clamp-2 lg:text-base">
                      {article.title}
                    </Link>
                  </h2>
                </div>
              </article>
            ))}
          </div>
          <div className="p-4 flex flex-col gap-4 md:p-0 md:col-start-2 md:row-start-3 lg:row-start-2 lg:col-span-4 lg:gap-5">
            {articlesEight.map((article, index) => (
              <article className="flex flex-row lg:p-3 lg:border lg:border-neutral-300 lg:gap-4" key={index}>
                <PictureLink link={article.link} className="lg:order-2">
                  <img src={article.image} alt={article.title} className="min-w-24 w-24 min-h-24 h-24 lg:min-w-[4.25rem] lg:w-[4.25rem] lg:min-h-[4.25rem] lg:h-[4.25rem] object-cover object-center" />
                </PictureLink>
                <div className="flex flex-col p-4 justify-center lg:justify-between lg:p-0 lg:gap-2">
                  <h2>
                    <Link to={article.link} className="line-clamp-3 overflow-anywhere lg:text-sm">
                      {article.title}
                    </Link>
                  </h2>
                  {screen === "large" && (
                    <Link to={article.categoryLink} className="lg:w-fit text-sm text-[#686868] font-light">
                      {article.categoryTitle}
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
        <a href="http://www.digitustecglobal.com/" className="hidden 2xl:block absolute top-[154px] -left-[118px] w-[117px]" target="_blank" aria-label="visit digit us tec global website">
          <img src={DigitUsTecGlobal} alt="digit us tec global representation" />
        </a>
        <a href="https://www.specialprinters.us/" className="hidden 2xl:block absolute top-[154px] -right-[118px] w-[117px]" target="_blank" aria-label="visit special printers website">
          <img src={SpecialPrinters} alt="special printers representation" />
        </a>
      </div>
      <section className="p-4 max-w-[1300px] mx-auto text-neutral-900">
        <h2 className="border-b-[3px] border-b-[#FF322E] pb-1 text-[#111111] lg:mt-0">
          <Link className="font-semibold text-lg lg:text-xl">More News</Link>
        </h2>
        <div className="py-4 flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-10 lg:gap-5 lg:py-5">
          {articlesFour.map((article, index) => (
            <article key={index} className="flex flex-row p-4 gap-4 justify-between border border-neutral-300 lg:col-span-2 lg:flex-col lg:p-0 lg:gap-0">
              <PictureLink link={article.link} className="order-2 lg:order-none">
                <img src={article.image} alt={article.title} className="min-w-24 w-24 min-h-24 h-24 object-cover object-center lg:w-full lg:h-full" />
              </PictureLink>
              <div className="flex flex-col justify-between gap-4 lg:p-4">
                <h3>
                  <Link className="overflow-anywhere line-clamp-2 lg:text-sm lg:line-clamp-3">{article.title}</Link>
                </h3>
                {screen !== "large" && <div className="whitespace-nowrap">{article.posted}</div>}
              </div>
            </article>
          ))}
        </div>
        <div className="lg:grid lg:grid-cols-10 lg:pb-4 lg:pt-5">
          {screen !== "large" && (
            <div className="flex flex-col gap-4 md:flex-row">
              {articlesFive.map((article, index) => (
                <article
                  className="border border-neutral-300 bg-center bg-cover bg-no-repeat aspect-square"
                  style={{
                    backgroundImage: `url(${article.image})`,
                  }}
                  key={index}
                >
                  <div className="flex flex-col justify-between h-full p-8 bg-[#000000aa] text-white">
                    <div className="whitespace-nowrap">{article.posted}</div>
                    <h3>
                      <Link className="text-lg line-clamp-3">{article.title}</Link>
                    </h3>
                  </div>
                </article>
              ))}
            </div>
          )}
          {screen === "large" && <FirstSlider className="lg:col-span-6 lg:border lg:border-neutral-300 lg:mr-10" articles={articlesFive} />}
          <section className="lg:pl-10 lg:border-l lg:border-[#515151] lg:col-span-4 lg:flex lg:flex-col lg:gap-5">
            <div className="mb-4 lg:mx-0 lg:flex lg:flex-row lg:gap-4 lg:items-center lg:mb-0">
              <h3 className="mt-4 lg:mt-0">
                <Link className="text-[#111111] text-lg lg:text-xl font-semibold block w-fit">
                  Whats <span className="font-normal inline-block">Trending</span>
                </Link>
              </h3>
              {screen === "large" && <MembershipBadge className="lg:font-semibold lg:text-[0.625rem]" />}
            </div>
            <div className="flex flex-col gap-4 md:grid md:grid-cols-2 lg:grid-cols-2 lg:gap-5 lg:p-0 lg:h-full">
              {articlesSix.map((article, index) => (
                <article key={index} className="flex flex-row p-4 gap-4 border border-neutral-300 lg:p-3">
                  <PictureLink className="lg:order-2 cursor-pointer" link={article.link}>
                    <img src={article.image} alt={article.title} className="min-w-24 w-24 min-h-24 h-24 object-cover object-center lg:min-w-14 lg:w-14 lg:min-h-14 lg:h-14" />
                  </PictureLink>
                  <div className="flex flex-col justify-between lg:h-fit gap-4 lg:justify-normal lg:gap-2">
                    <h4>
                      <Link className="line-clamp-2 overflow-anywhere lg:text-sm lg:line-clamp-3">{article.title}</Link>
                    </h4>
                    {screen !== "large" && <div className="whitespace-nowrap lg:text-xs">{article.posted}</div>}
                    {screen === "large" && (
                      <Link to={article.categoryLink} className="text-sm font-light w-fit text-[#686868]">
                        {article.categoryTitle}
                      </Link>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
        {screen === "large" && (
          <section>
            <h3 className="mb-4">
              <Link className="text-[#111111] font-semibold text-lg lg:text-xl">
                Must Watch <span className="font-normal">Top 10 Ranking Segments</span>
              </Link>
            </h3>
            <div className="grid grid-cols-[repeat(19,_minmax(0,_1fr))] gap-5">
              <SecondSlider />
              <div className="col-span-5">
                <div className="flex flex-col gap-5 mb-5">
                  {articlesEight.map((article, index) => (
                    <article className="flex flex-row gap-4" key={index}>
                      <PictureLink link={article.link}>
                        <img src={article.image} alt={article.title} className="min-w-24 w-24 min-h-24 h-24 object-cover object-center" />
                      </PictureLink>
                      <div className="flex flex-col gap-2 h-fit">
                        <h4>
                          <Link to={article.link} className="line-clamp-3 overflow-anywhere text-sm">
                            {article.title}
                          </Link>
                        </h4>
                        <Link to={article.categoryLink} className="inline-block w-fit text-sm text-[#686868] font-light">
                          {article.categoryTitle}
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
                <h4 className="mb-4 border-b border-[#17171723] pb-2">
                  <Link className="text-[#111111] font-semibold text-lg lg:text-xl">
                    Political <span className="font-normal">Updates</span>
                  </Link>
                </h4>
                {Articles.slice(0, 6).map((article, index) => (
                  <h5 key={index}>
                    <Link to={article.link} className="text-xs mb-3 line-clamp-2 overflow-anywhere">
                      {article.title}
                    </Link>
                  </h5>
                ))}
              </div>
            </div>
          </section>
        )}
      </section>
      <div className="bg-neutral-50">
        <div className="text-neutral-900 p-4 pt-2 max-w-[1300px] mx-auto md:grid md:gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-16 lg:pt-4">
          <section>
            <h3 className="mb-4 border-b-2 border-[#424242] pb-1 text-lg text-[#111111] font-semibold">
              <Link>Asia</Link>
            </h3>
            {articlesEight.map((article, index) => (
              <article key={index} link={article.link} className="mb-4 md:last-of-type:mb-0 lg:odd:my-8">
                <div className="flex flex-col justify-between gap-4">
                  {screen !== "large" && (
                    <PictureLink link={article.link}>
                      <img src={article.image} alt="" />
                    </PictureLink>
                  )}
                  <div className="flex flex-col justify-between gap-4">
                    <div className="whitespace-nowrap lg:text-xs lg:order-2">{article.posted}</div>
                    <h4>
                      <Link className="text-lg line-clamp-2 lg:text-base lg:line-clamp-3">{article.title}</Link>
                    </h4>
                  </div>
                </div>
              </article>
            ))}
          </section>
          <section>
            <h3 className="mb-4 border-b-2 border-[#424242] pb-1 text-lg text-[#111111] font-semibold">
              <Link>Australia</Link>
            </h3>
            {articlesEight.map((article, index) => (
              <article key={index} link={article.link} className="mb-4 md:last-of-type:mb-0 lg:odd:my-8">
                <div className="flex flex-col justify-between gap-4">
                  {screen !== "large" && (
                    <PictureLink link={article.link}>
                      <img src={article.image} alt="" />
                    </PictureLink>
                  )}
                  <div className="flex flex-col justify-between gap-4">
                    <div className="whitespace-nowrap lg:text-xs lg:order-2">{article.posted}</div>
                    <h4>
                      <Link className="text-lg line-clamp-2 lg:text-base lg:line-clamp-3">{article.title}</Link>
                    </h4>
                  </div>
                </div>
              </article>
            ))}
          </section>
          <section>
            <h3 className="mb-4 border-b-2 border-[#424242] pb-1 text-lg text-[#111111] font-semibold">
              <Link>USA</Link>
            </h3>
            {articlesEight.map((article, index) => (
              <article key={index} link={article.link} className="mb-4 md:last-of-type:mb-0 lg:odd:my-8">
                <div className="flex flex-col justify-between gap-4">
                  {screen !== "large" && (
                    <PictureLink link={article.link}>
                      <img src={article.image} alt="" />
                    </PictureLink>
                  )}
                  <div className="flex flex-col justify-between gap-4">
                    <div className="whitespace-nowrap lg:text-xs lg:order-2">{article.posted}</div>
                    <h4>
                      <Link className="text-lg line-clamp-2 lg:text-base lg:line-clamp-3">{article.title}</Link>
                    </h4>
                  </div>
                </div>
              </article>
            ))}
          </section>
          <section>
            <h3 className="mb-4 border-b-2 border-[#424242] pb-1 text-lg text-[#111111] font-semibold">
              <Link>Europe</Link>
            </h3>
            {articlesEight.map((article, index) => (
              <article key={index} link={article.link} className="mb-4 last-of-type:mb-0 lg:odd:my-8">
                <div className="flex flex-col justify-between gap-4">
                  {screen !== "large" && (
                    <PictureLink link={article.link}>
                      <img src={article.image} alt="" />
                    </PictureLink>
                  )}
                  <div className="flex flex-col justify-between gap-4">
                    <div className="whitespace-nowrap lg:text-xs lg:order-2">{article.posted}</div>
                    <h4>
                      <Link className="text-lg line-clamp-2 lg:text-base lg:line-clamp-3">{article.title}</Link>
                    </h4>
                  </div>
                </div>
              </article>
            ))}
          </section>
        </div>
        <section className="max-w-[1300px] mx-auto p-4 lg:pb-5">
          <h2 className="border-b-[3px] border-b-[#FF322E] pb-1 text-[#111111] lg:mt-0">
            <Link className="font-semibold text-lg lg:text-xl">
              News Updates <span className="font-normal">| Sports</span>
            </Link>
          </h2>
          <div className="pt-4 flex flex-col gap-4 md:grid md:grid-cols-2 lg:grid-cols-10 lg:gap-5 lg:pt-5 text-neutral-900">
            {articlesSeven.map((article, index) => (
              <article key={index} className="border border-neutral-300 block md:m-0 lg:col-span-2">
                <div className="flex flex-row p-4 gap-4 justify-between lg:p-0 lg:flex-col lg:gap-0">
                  <PictureLink className="order-2 lg:order-none">
                    <img src={article.image} alt="" className="min-w-24 w-24 min-h-24 h-24 object-cover object-center lg:w-full lg:h-full" />
                  </PictureLink>
                  <div className="flex flex-col justify-between gap-4 lg:p-4">
                    <h3>
                      <Link className="overflow-anywhere line-clamp-2 lg:text-sm lg:line-clamp-3">{article.title}</Link>
                    </h3>
                    {screen === "large" && <p className="lg:line-clamp-2 lg:text-xs">{article.title}</p>}
                    {screen !== "large" && <div className="whitespace-nowrap lg:text-xs lg:order-[-1]">{article.posted}</div>}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
      <section>
        <div className="bg-black">
          <div className="max-w-[1300px] mx-auto p-4 pt-3">
            <h2 className="border-b-[3px] border-b-[#FF322E] pb-1 text-white mb-4 lg:mt-0">
              <Link className="font-semibold text-lg lg:text-xl">
                Exclusive Pulse <span className="font-normal">| Jadetimes</span>
              </Link>
            </h2>
            <div className="text-white flex flex-col gap-4 md:grid md:grid-cols-2 place-items-center">
              <iframe
                className="block aspect-video"
                title="How Sri Lanka's 2024 Election Could Shape the Future of Entrepreneurs | Exclusive Pulse | Jadetimes"
                width="100%"
                src="https://www.youtube.com/embed/4W7SjwdQS64?autoplay=0&mute=0&controls=1&loop=0&rel=0&origin=https://www.jadetimes.com&playsinline=1"
                sandbox="allow-same-origin allow-scripts allow-popups allow-presentation"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                loading="lazy"
              ></iframe>
              <div className="flex flex-col gap-4 lg:w-96">
                <a
                  href="https://www.youtube.com/@JadeTimes"
                  className="hidden md:bg-neutral-800 md:block md:w-fit md:tracking-widest md:text-nowrap md:uppercase md:text-[0.625rem] md:px-2 md:py-1 lg:duration-300 lg:hover:bg-white lg:hover:text-black"
                >
                  Youtube updates
                </a>
                <h3 className="text-sm lg:text-base">How Sri Lanka's 2024 Election Could Shape the Future of Entrepreneurs</h3>
                <p className="text-xs">
                  We explore how the upcoming election could shape opportunities and challenges for business owners and startups across the country. A shocking revelation about the connection between
                  these two groups, shedding light on hidden influences and funding sources.
                </p>
                <div className="flex items-center gap-4 text-sm">
                  <a
                    href="https://www.youtube.com/@JadeTimes"
                    className="bg-neutral-800 inline-block uppercase tracking-widest text-nowrap px-3 py-2 md:hidden"
                  >
                    Youtube updates
                  </a>
                  <a
                    href="https://www.jadetimes.com/post/shocking-revelations-mr-neomal-perera-on-hidden-influences-in-sri-lanka-s-political-sphere"
                    className="text-nowrap flex items-center capitalize lg:duration-300 lg:hover:opacity-50"
                  >
                    Read more
                    <FaChevronRight className="inline" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 flex flex-col gap-4 md:grid md:grid-cols-3 lg:grid-cols-8 lg:gap-5 lg:py-5 max-w-[1300px] mx-auto">
          <div className="lg:col-span-2 lg:flex lg:flex-col lg:gap-5">
            <article className="border border-neutral-300 block lg:col-span-2 h-full lg:h-auto lg:border-none">
              <div className="flex flex-row p-4 justify-between gap-4 md:gap-0 md:p-0 md:flex-col">
                <PictureLink className="order-2 md:order-none">
                  <img src={Articles[0].image} alt="" className="min-w-24 w-24 min-h-24 h-24 object-cover object-center md:w-full md:h-full" />
                </PictureLink>
                <div className="flex flex-col justify-between gap-4 md:p-4 lg:p-0">
                  <h3>
                    <Link className="overflow-anywhere line-clamp-2 lg:text-lg lg:font-medium">{Articles[0].title}</Link>
                  </h3>
                  {screen !== "large" && <div className="whitespace-nowrap lg:text-xs md:order-[-1]">{Articles[0].posted}</div>}
                </div>
              </div>
            </article>
            {screen === "large" && (
              <div className="lg:flex lg:flex-col lg:gap-5">
                {articlesEight.map((article, index) => (
                  <article className="flex flex-row gap-4 items-center" key={index}>
                    <PictureLink>
                      <img src={article.image} alt="" className="min-w-28 w-28 min-h-20 h-20 object-cover object-center" />
                    </PictureLink>
                    <h3>
                      <Link className="overflow-anywhere text-sm line-clamp-3">{article.title}</Link>
                    </h3>
                  </article>
                ))}
              </div>
            )}
          </div>
          <div className="block aspect-square border border-neutral-300 h-full md:w-full lg:aspect-auto lg:col-span-4 lg:border-none">
            <article
              style={{
                backgroundImage: `url(${articlesFive[0].image})`,
              }}
              className="h-full bg-center bg-cover bg-no-repeat bg-image-none"
            >
              {screen === "large" && (
                <PictureLink>
                  <img src={articlesFive[0].image} alt="" />
                </PictureLink>
              )}
              <div className="flex flex-col justify-between h-full p-8 bg-[#000000aa] text-white lg:h-auto lg:bg-white lg:text-black lg:gap-2 lg:p-0 lg:pt-8">
                <h3 className="order-2">
                  <Link className="line-clamp-3 text-lg lg:text-2xl lg:line-clamp-2 lg:font-medium">{articlesFive[0].title}</Link>
                </h3>
                {screen === "large" && <p className="lg:line-clamp-2 lg:text-lg lg:order-3">{articlesFive[0].title}</p>}
                {screen !== "large" && <div className="whitespace-nowrap lg:text-xs">{articlesFive[0].posted}</div>}
              </div>
            </article>
          </div>
          <div className="lg:col-span-2 lg:flex lg:flex-col lg:gap-5">
            <article className="border border-neutral-300 block lg:col-span-2 h-full lg:h-auto lg:border-none">
              <div className="flex flex-row p-4 justify-between gap-4 md:gap-0 md:p-0 md:flex-col">
                <PictureLink className="order-2 md:order-none">
                  <img src={Articles[1].image} alt="" className="min-w-24 w-24 min-h-24 h-24 object-cover object-center md:w-full md:h-full" />
                </PictureLink>
                <div className="flex flex-col justify-between gap-4 md:p-4 lg:p-0">
                  <h3>
                    <Link className="overflow-anywhere line-clamp-2 lg:text-lg lg:font-medium">{Articles[1].title}</Link>
                  </h3>
                  {screen !== "large" && <div className="whitespace-nowrap lg:text-xs md:order-[-1]">{Articles[1].posted}</div>}
                </div>
              </div>
            </article>
            {screen === "large" && (
              <div className="lg:flex lg:flex-col lg:gap-5">
                {articlesEight.map((article, index) => (
                  <article className="flex flex-row gap-4 items-center" key={index}>
                    <PictureLink className="order-2">
                      <img src={article.image} alt="" className="min-w-28 w-28 min-h-20 h-20 object-cover object-center" />
                    </PictureLink>
                    <h3>
                      <Link className="overflow-anywhere text-sm line-clamp-3">{article.title}</Link>
                    </h3>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
      <ThirdSlider articles={articlesEight} />
    </>
  );
};

export default Home;
