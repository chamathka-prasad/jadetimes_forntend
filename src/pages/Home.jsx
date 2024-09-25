import H1 from "../components/H1";
import H2 from "../components/H2";
import LatestUpdates from "../components/LatestUpdates";
import Article from "../components/Article";
import Slider from "../components/Slider";

import Articles from "../routes/Articles";

const Home = () => {

  const articlesTwo = Articles.slice(1, 5)
  const articlesThree = Articles.slice(5, 9)
  const articlesFour = Articles.slice(0, 10)
  const articlesFive = Articles.slice(0, 2)
  const articlesSix = Articles.slice(0, 8)

  return (
    <>
      <section className="max-w-screen-xl mx-auto">
        <H1 className="h-0 overflow-hidden" heading="Headlines" />
        <section>
          <LatestUpdates />
          <div className="sm:grid sm:grid-cols-2 sm:gap-4 sm:p-4 lg:grid-cols-10 lg:auto-rows-auto xl:auto-rows-auto">
            <Article link={Articles[0].link} className="block border-b border-b-neutral-300 sm:border sm:border-neutral-300 sm:col-span-2 lg:col-span-7 lg:row-start-1 lg:row-end-4 xl:col-start-1 xl:col-end-8 xl:row-start-2 xl:row-end-5">
              <article className="sm:grid sm:grid-cols-2 lg:h-full">
                <picture>
                  <img src={Articles[0].image} alt="" className="object-cover object-center sm:h-60 lg:h-full" />
                </picture>
                <p className="text-white uppercase text-sm font-medium text-center absolute left-0 right-0 -translate-y-3 sm:hidden" aria-hidden="true"><span className="bg-neutral-950 inline-block px-1">Latest Updates</span></p>
                <div className="py-6 px-4 flex flex-col justify-between gap-2 lg:p-6 sm:justify-center">
                  <h3 className="text-2xl">{Articles[0].title}</h3>
                  <p className="uppercase text-xs text-neutral-600 whitespace-nowrap">{Articles[0].posted}</p>
                </div>
              </article>
            </Article>
            {articlesTwo.map(article => (
              <Article key={article.title} link={article.link} className="border border-neutral-300 block m-4 sm:m-0 lg:row-start-4 lg:row-end-6 lg:col-span-2 xl:row-start-5 xl:row-end-7">
                <article className="flex flex-row p-4 gap-4 justify-between lg:flex-col lg:p-0 lg:gap-0">
                  <picture className="order-2 lg:order-none">
                    <img src={article.image} alt="" className="min-w-20 w-20 min-h-20 h-20 object-cover object-center lg:w-full lg:h-full" />
                  </picture>
                  <div className="flex flex-col justify-between gap-3 max-w-sm lg:p-4">
                    <h3 className="overflow-anywhere line-clamp-2 xl:line-clamp-3">{article.title}</h3>
                    <p className="uppercase text-xs text-neutral-600 whitespace-nowrap">{article.posted}</p>
                  </div>
                </article>
              </Article>
            ))}
            {/* <Article link="https://specialgraphics.us/" className="hidden lg:block lg:col-span-2 lg:row-span-2" target="_blank">
              <img src={AddImage} alt="" className="h-full" />
            </Article> */}
            <div className="flex flex-col gap-4 px-4 sm:col-span-2 sm:p-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 lg:col-span-10 xl:row-start-1">
              {articlesThree.map(article => (
                <Article key={article.title} link={article.link} className="border border-neutral-300 block">
                  <article className="flex flex-col justify-between">
                    <picture className="sm:hidden">
                      <img src={article.image} alt="" />
                    </picture>
                    <div className="flex flex-col justify-between gap-3 max-w-sm p-4">
                      <h3 className="line-clamp-2">{article.title}</h3>
                      <p className="uppercase text-xs text-neutral-600 whitespace-nowrap">{article.posted}</p>
                    </div>
                  </article>
                </Article>
              ))}
            </div>
            <Article link={Articles[9].link} className="border border-neutral-300 block m-4 sm:m-0 lg:col-span-2 lg:col-start-8 lg:col-end-11 lg:row-start-1 lg:row-end-2 xl:col-start-8 xl:col-end-11 xl:row-start-2 xl:row-end-3">
              <article className="flex flex-row p-4 gap-4 justify-between">
                <div className="flex flex-col justify-between gap-3 max-w-sm">
                  <h3 className="line-clamp-2 overflow-anywhere">{Articles[9].title}</h3>
                  <p className="uppercase text-xs text-neutral-600 whitespace-nowrap">{Articles[9].posted}</p>
                </div>
                <picture>
                  <img src={Articles[9].image} alt="" className="min-w-20 w-20 min-h-20 h-20 object-cover object-center" />
                </picture>
              </article>
            </Article>
            <Article link={Articles[10].link} className="border border-neutral-300 block m-4 sm:m-0 lg:col-span-2 lg:col-start-8 lg:col-end-11 lg:row-start-2 lg:row-end-3 xl:col-start-8 xl:col-end-11 xl:row-start-3 xl:row-end-4">
              <article className="flex flex-row p-4 gap-4 justify-between">
                <div className="flex flex-col justify-between gap-3 max-w-sm">
                  <h3 className="line-clamp-2 overflow-anywhere">{Articles[10].title}</h3>
                  <p className="uppercase text-xs text-neutral-600 whitespace-nowrap">{Articles[10].posted}</p>
                </div>
                <picture>
                  <img src={Articles[10].image} alt="" className="min-w-20 w-20 min-h-20 h-20 object-cover object-center" />
                </picture>
              </article>
            </Article>
            <Article link={Articles[11].link} className="border border-neutral-300 block m-4 sm:m-0 lg:col-span-2 lg:col-start-8 lg:col-end-11 lg:row-start-3 lg:row-end-4 xl:col-start-8 xl:col-end-11 xl:row-start-4 xl:row-end-5">
              <article className="flex flex-row p-4 gap-4 justify-between">
                <div className="flex flex-col justify-between gap-3 max-w-sm">
                  <h3 className="line-clamp-2 overflow-anywhere">{Articles[11].title}</h3>
                  <p className="uppercase text-xs text-neutral-600 whitespace-nowrap">{Articles[11].posted}</p>
                </div>
                <picture>
                  <img src={Articles[11].image} alt="" className="min-w-20 w-20 min-h-20 h-20 object-cover object-center" />
                </picture>
              </article>
            </Article>
          </div>
        </section>
        <section className="mt-6 sm:mt-2">
          <H2 heading="More News" />
          <div className="sm:grid sm:grid-cols-2 sm:gap-4 sm:p-4 lg:grid-cols-10 lg:auto-rows-auto">
            {articlesFour.map(article => (
              <Article key={article.title} link={article.link} className="border border-neutral-300 block m-4 sm:m-0 lg:col-span-2">
                <article className="flex flex-row p-4 gap-4 justify-between lg:flex-col lg:p-0 lg:gap-0">
                  <picture className="order-2 lg:order-none">
                    <img src={article.image} alt="" className="min-w-20 w-20 min-h-20 h-20 object-cover object-center lg:w-full lg:h-full" />
                  </picture>
                  <div className="flex flex-col justify-between gap-3 max-w-sm lg:p-4">
                    <h3 className="overflow-anywhere line-clamp-2 xl:line-clamp-3">{article.title}</h3>
                    <p className="uppercase text-xs text-neutral-600 whitespace-nowrap">{article.posted}</p>
                  </div>
                </article>
              </Article>
            ))}
          </div>
        </section>
        <section className="mt-6 sm:mt-2">
          <H2 heading="What's Trending" />
          <div className="sm:grid sm:grid-cols-2 sm:gap-4 sm:p-4 lg:grid-cols-4 lg:auto-rows-auto">
            <Slider articles={articlesFive} />
            <div className="sm:col-span-2 sm:grid sm:grid-cols-2 sm:gap-4">
              {articlesSix.map(article => (
                <Article key={article.title} link={article.link} className="border border-neutral-300 block m-4 sm:m-0">
                  <article className="flex flex-row p-4 gap-4 justify-between">
                    <div className="flex flex-col justify-between gap-3 max-w-sm">
                      <h3 className="line-clamp-2 overflow-anywhere">{article.title}</h3>
                      <p className="uppercase text-xs text-neutral-600 whitespace-nowrap">{article.posted}</p>
                    </div>
                    <picture>
                      <img src={article.image} alt="" className="min-w-20 w-20 min-h-20 h-20 object-cover object-center" />
                    </picture>
                  </article>
                </Article>
              ))}
            </div>
          </div>
        </section>
      </section>
    </>
  )
};

export default Home;