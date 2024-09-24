import React from "react";
import H1 from "../components/H1";
import H2 from "../components/H2";
// import LargeArticle from "../components/LargeArticle";
// import SmallToMediumArticle from "../components/SmallToMediumArticle";
import MediumArticle from "../components/MediumArticles";
import SmallArticle from "../components/SmallArticle";
import Article from "../components/Article";

import LargeImage from "../assets/1.webp"
import AddImage from "../assets/adds/1.webp"

const Home = () => {
  const articles = [
    {
      link: "https://www.jadetimes.com/post/us-hopes-for-the-middle-east-fade-away",
      image: "https://static.wixstatic.com/media/7aad08_aa064048b21b4f8ab3b11b3314998555~mv2.jpg/v1/fill/w_1280,h_722,fp_0.50_0.50,q_90,enc_auto/7aad08_aa064048b21b4f8ab3b11b3314998555~mv2.jpg",
      title: "U.S. hopes for the Middle East fade away",
      posted: "1 hour ago"
    },
    {
      link: "https://www.jadetimes.com/post/israel-conducts-major-air-strikes-on-hezbollah-targets-in-lebanon",
      image: "https://static.wixstatic.com/media/795fc2_88bf4e5f54ac498cbb0f70dc4e855e5c~mv2.jpg/v1/fill/w_228,h_128,fp_0.50_0.50,q_90,enc_auto/795fc2_88bf4e5f54ac498cbb0f70dc4e855e5c~mv2.webp",
      title: "Israel Conducts Major Air Strikes on Hezbollah Targets in Lebanon",
      posted: "1 hour ago"
    },
    {
      link: "https://www.jadetimes.com/post/sri-lanka-holds-its-first-election-since-the-ousting-of-its-president-by-mass-protests",
      image: "https://static.wixstatic.com/media/5f51cc_2959c338ec6c468da73b8bef9daff6e4~mv2.png/v1/fill/w_227,h_128,fp_0.50_0.50,q_95,enc_auto/5f51cc_2959c338ec6c468da73b8bef9daff6e4~mv2.webp",
      title: "Sri Lanka holds its first election since the ousting of its president by mass protests",
      posted: "1 hour ago"
    },
    {
      link: "https://www.jadetimes.com/post/ukraine-drone-strike-on-russian-ammunitions-depot-sparks-major-fire-injures-13",
      image: "https://static.wixstatic.com/media/de51cb_9321b9d79392409eabf98238dea74d97~mv2.webp/v1/fill/w_228,h_128,al_c,q_90,enc_auto/de51cb_9321b9d79392409eabf98238dea74d97~mv2.webp",
      title: "Ukraine Drone Strike on Russian Ammunitions Depot Sparks Major Fire, Injures 13",
      posted: "1 hour ago"
    },
    {
      link: "https://www.jadetimes.com/post/the-evolution-of-the-iphone",
      image: "https://static.wixstatic.com/media/d9efba_98c9ff85d2ba4d2782557452764c6383~mv2.jpg/v1/fill/w_227,h_128,fp_0.50_0.50,q_90,enc_auto/d9efba_98c9ff85d2ba4d2782557452764c6383~mv2.webp",
      title: "The Evolution of the iPhone",
      posted: "1 hour ago"
    },
    {
      link: "https://www.jadetimes.com/post/the-european-green-deal-is-already-helping-consumers",
      image: "https://static.wixstatic.com/media/7aad08_5df7cb52bd864d12888c396a9c1abdce~mv2.png/v1/fill/w_289,h_163,fp_0.50_0.50,q_95,enc_auto/7aad08_5df7cb52bd864d12888c396a9c1abdce~mv2.webp",
      title: "The European Green Deal Is Already Helping Consumers",
      posted: "1 hour ago"
    },
    {
      link: "https://www.jadetimes.com/post/hizbollah-struggles-after-multiple-explosions",
      image: "https://static.wixstatic.com/media/7aad08_47830005242d4febbb9ad42197db010b~mv2.jpg/v1/fill/w_289,h_163,fp_0.50_0.50,q_90,enc_auto/7aad08_47830005242d4febbb9ad42197db010b~mv2.webp",
      title: "Hizbollah struggles after multiple explosions",
      posted: "1 hour ago"
    },
    {
      link: "https://www.jadetimes.com/post/warning-of-painful-budget-shakes-consumer-confidence-in-the-uk",
      image: "https://static.wixstatic.com/media/de51cb_4c37dcf74fc24ef0856fc023fd051e67~mv2.webp/v1/fill/w_289,h_163,al_c,q_90,enc_auto/de51cb_4c37dcf74fc24ef0856fc023fd051e67~mv2.webp",
      title: "Warning of 'Painful' Budget Shakes Consumer Confidence in the UK",
      posted: "1 hour ago"
    },
    {
      link: "https://www.jadetimes.com/post/the-importance-of-setting-methane-goals",
      image: "https://static.wixstatic.com/media/7aad08_670dd683d5bd48dabeb7d7706760c6c5~mv2.jpg/v1/fill/w_289,h_163,fp_0.50_0.50,q_90,enc_auto/7aad08_670dd683d5bd48dabeb7d7706760c6c5~mv2.webp",
      title: "The Importance of Setting Methane Goals",
      posted: "1 hour ago"
    },
    {
      link: "https://www.jadetimes.com/post/hizbollah-struggles-after-multiple-explosions",
      image: "https://static.wixstatic.com/media/7aad08_47830005242d4febbb9ad42197db010b~mv2.jpg/v1/fill/w_289,h_163,fp_0.50_0.50,q_90,enc_auto/7aad08_47830005242d4febbb9ad42197db010b~mv2.webp",
      title: "Hizbollah struggles after multiple explosions",
      posted: "1 hour ago"
    },
    {
      link: "https://www.jadetimes.com/post/warning-of-painful-budget-shakes-consumer-confidence-in-the-uk",
      image: "https://static.wixstatic.com/media/de51cb_4c37dcf74fc24ef0856fc023fd051e67~mv2.webp/v1/fill/w_289,h_163,al_c,q_90,enc_auto/de51cb_4c37dcf74fc24ef0856fc023fd051e67~mv2.webp",
      title: "Warning of 'Painful' Budget Shakes Consumer Confidence in the UK",
      posted: "1 hour ago"
    },
    {
      link: "https://www.jadetimes.com/post/the-importance-of-setting-methane-goals",
      image: "https://static.wixstatic.com/media/7aad08_670dd683d5bd48dabeb7d7706760c6c5~mv2.jpg/v1/fill/w_289,h_163,fp_0.50_0.50,q_90,enc_auto/7aad08_670dd683d5bd48dabeb7d7706760c6c5~mv2.webp",
      title: "The Importance of Setting Methane Goals",
      posted: "1 hour ago"
    },
    {
      link: "https://www.jadetimes.com/post/israel-s-expanded-war-goals-amid-tensions-with-hezbollah",
      image: "https://static.wixstatic.com/media/795fc2_9826819f4c6d4f778a220d88e2427c4a~mv2.jpg/v1/fill/w_740,h_416,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/795fc2_9826819f4c6d4f778a220d88e2427c4a~mv2.jpg",
      title: "Israel's Expanded War Goals Amid Tensions with Hezbollah",
      posted: "1 hour ago"
    },
    {
      link: "https://www.jadetimes.com/post/the-smartphone-showdown-navigating-the-latest-releases-and-the-growing-push-for-simplicity",
      image: "https://static.wixstatic.com/media/e25f64_3821a3ba6a634a56bed5fca169b7df99~mv2.jpg/v1/fill/w_740,h_416,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/e25f64_3821a3ba6a634a56bed5fca169b7df99~mv2.jpg",
      title: "The Smartphone Showdown, Navigating the Latest Releases and the Growing Push for Simplicity",
      posted: "1 hour ago"
    },
    {
      link: "https://www.jadetimes.com/post/french-archaeological-dig-unveils-200-year-old-note-from-past-excavations",
      image: "https://static.wixstatic.com/media/de51cb_c72ae83755e24031ad5f5d0bc8f86d3b~mv2.webp/v1/fill/w_740,h_416,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/de51cb_c72ae83755e24031ad5f5d0bc8f86d3b~mv2.webp",
      title: "French Archaeological Dig Unveils 200-Year-Old Note from Past Excavations",
      posted: "1 hour ago"
    }
  ]

  const articlesTwo = articles.slice(1, 5)
  const articlesThree = articles.slice(5, 9)

  return (
    <>
      <section className="max-w-screen-xl mx-auto">
        <H1 className="h-0 overflow-hidden" heading="Headlines" />
        <section>
          <H2 />
          <div className="sm:grid sm:grid-cols-2 sm:gap-4 sm:p-4 lg:grid-cols-10 lg:auto-rows-auto xl:auto-rows-auto">
            <Article link={articles[0].link} className="block border-b border-b-neutral-300 sm:border sm:border-neutral-300 sm:col-span-2 lg:col-span-7 lg:row-start-1 lg:row-end-4 xl:col-start-1 xl:col-end-8 xl:row-start-2 xl:row-end-5">
              <article className="sm:grid sm:grid-cols-2 lg:h-full">
                <picture>
                  <img src={articles[0].image} alt="" className="object-cover object-center sm:h-60 lg:h-full" />
                </picture>
                <p className="text-white uppercase text-sm font-medium text-center absolute left-0 right-0 -translate-y-3 sm:hidden" aria-hidden="true"><span className="bg-neutral-950 inline-block px-1">Latest Updates</span></p>
                <div className="py-6 px-4 flex flex-col justify-between gap-2 lg:p-6 sm:justify-center">
                  <h3 className="text-2xl">{articles[0].title}</h3>
                  <p className="uppercase text-xs text-neutral-600 whitespace-nowrap">{articles[0].posted}</p>
                </div>
              </article>
            </Article>
            {articlesTwo.map(article => (
              <Article key={article.title} link={article.link} className="border border-neutral-300 block mx-4 mt-4 sm:m-0 lg:row-start-4 lg:row-end-6 lg:col-span-2 xl:row-start-5 xl:row-end-7">
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
            <Article link="https://specialgraphics.us/" className="hidden lg:block lg:col-span-2 lg:row-span-2" target="_blank">
              <img src={AddImage} alt="" className="h-full" />
            </Article>
            <div className="flex flex-col gap-4 p-4 sm:col-span-2 sm:p-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 lg:col-span-10 xl:row-start-1">
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
            <Article link={articles[12].link} className="border border-neutral-300 block mx-4 mb-4 sm:m-0 lg:col-span-2 lg:col-start-8 lg:col-end-11 lg:row-start-1 lg:row-end-2 xl:col-start-8 xl:col-end-11 xl:row-start-2 xl:row-end-3">
              <article className="flex flex-row p-4 gap-4 justify-between">
                <div className="flex flex-col justify-between gap-3 max-w-sm">
                  <h3 className="line-clamp-2">{articles[12].title}</h3>
                  <p className="uppercase text-xs text-neutral-600 whitespace-nowrap overflow-anywhere">{articles[12].posted}</p>
                </div>
                <picture>
                  <img src={articles[12].image} alt="" className="min-w-20 w-20 min-h-20 h-20 object-cover object-center" />
                </picture>
              </article>
            </Article>
            <Article link={articles[13].link} className="border border-neutral-300 block mx-4 mb-4 sm:m-0 lg:col-span-2 lg:col-start-8 lg:col-end-11 lg:row-start-2 lg:row-end-3 xl:col-start-8 xl:col-end-11 xl:row-start-3 xl:row-end-4">
              <article className="flex flex-row p-4 gap-4 justify-between">
                <div className="flex flex-col justify-between gap-3 max-w-sm">
                  <h3 className="line-clamp-2">{articles[13].title}</h3>
                  <p className="uppercase text-xs text-neutral-600 whitespace-nowrap overflow-anywhere">{articles[13].posted}</p>
                </div>
                <picture>
                  <img src={articles[13].image} alt="" className="min-w-20 w-20 min-h-20 h-20 object-cover object-center" />
                </picture>
              </article>
            </Article>
            <Article link={articles[14].link} className="border border-neutral-300 block mx-4 mb-4 sm:m-0 lg:col-span-2 lg:col-start-8 lg:col-end-11 lg:row-start-3 lg:row-end-4 xl:col-start-8 xl:col-end-11 xl:row-start-4 xl:row-end-5">
              <article className="flex flex-row p-4 gap-4 justify-between">
                <div className="flex flex-col justify-between gap-3 max-w-sm">
                  <h3 className="line-clamp-2">{articles[14].title}</h3>
                  <p className="uppercase text-xs text-neutral-600 whitespace-nowrap overflow-anywhere">{articles[14].posted}</p>
                </div>
                <picture>
                  <img src={articles[14].image} alt="" className="min-w-20 w-20 min-h-20 h-20 object-cover object-center" />
                </picture>
              </article>
            </Article>
          </div>
        </section>
      </section>
    </>
  )
};

export default Home;