import { Link } from "react-router-dom";
import UpdatesBadge from "./UpdatesBadge";
import PictureLink from "./PictureLink";

const MainArticles = ({ articles }) => {
  return (
    <div className="max-w-[1300px] mx-auto md:p-4">
      <UpdatesBadge className="hidden md:block md:mb-4 md:px-2 md:py-[0.15rem]">Latest Updates</UpdatesBadge>
      <div className="text-neutral-900 md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-[repeat(17,_minmax(0,_1fr))] lg:gap-5 xl:col-start-2 xl:col-span-10 xl:row-start-2">
        <article className="relative p-4 border-b border-b-[#8B8B8B] mb-4 md:mb-0 md:p-0 md:grid md:grid-cols-2 md:border md:border-neutral-300 md:col-span-2 lg:col-[13_span_/_13_span] lg:row-start-2">
          <UpdatesBadge className="block px-3 py-2 text-sm absolute -bottom-9 left-1/2 -translate-x-1/2 -translate-y-1/2 md:hidden">Latest Updates</UpdatesBadge>
          <div className="relative">
            <PictureLink link={articles[0].link}>
              <img src={articles[0].image} alt={articles[0].title} className="object-cover object-center md:h-full" />
            </PictureLink>
          </div>
          <div className="py-4 pb-5 flex flex-col justify-between gap-2 md:justify-start md:p-4 md:gap-4 lg:p-8">
            <div>
              <Link className="hidden lg:block lg:w-fit lg:text-xs">{articles[0].authorName}</Link>
              <div className="flex flex-row items-center whitespace-nowrap lg:text-xs">{articles[0].posted}</div>
            </div>
            <h2>
              <Link to={articles[0].link} className="text-2xl line-clamp-3 lg:text-3xl lg:leading-[2.8rem]">
                {articles[0].title}
              </Link>
            </h2>
            <p className="line-clamp-2 lg:text-sm lg:line-clamp-3">{articles[0].title}</p>
          </div>
        </article>
        <div className="p-4 flex flex-col gap-4 md:p-0 md:grid md:grid-cols-2 md:col-span-2 md:gap-4 lg:grid-cols-10 lg:gap-5 lg:col-span-full">
          {articles.slice(0, 5).map((article, index) => (
            <article key={index} className="flex flex-row p-4 gap-4 justify-between border border-neutral-300 lg:p-0 lg:flex-col lg:gap-0 lg:col-span-2">
              <PictureLink link={article.link} className="order-2 lg:order-none">
                <img src={article.image} alt={article.title} className="min-w-24 w-24 min-h-24 h-24 object-cover object-center lg:w-full lg:h-full" />
              </PictureLink>
              <div className="flex flex-col justify-between gap-4 lg:p-4">
                <Link to={article.categoryLink} className="hidden lg:inline-block lg:w-fit text-sm font-light text-[#686868] lg:order-[-1]">
                  {article.categoryTitle}
                </Link>
                <h2>
                  <Link to={article.link} className="overflow-anywhere line-clamp-2 lg:text-sm lg:line-clamp-3">
                    {article.title}
                  </Link>
                </h2>
                <p className="hidden lg:line-clamp-2 lg:text-[0.6875rem]">{article.title}</p>
                <div className="whitespace-nowrap lg:text-xs lg:hidden">{article.posted}</div>
              </div>
            </article>
          ))}
        </div>
        <div className="flex flex-col gap-4 p-4 md:p-0 md:col-span-2 md:grid md:grid-cols-2 md:row-span-2 lg:grid-cols-4 lg:col-span-full lg:row-start-1 lg:row-span-1 lg:gap-0">
          {articles.slice(0, 4).map((article, index) => (
            <article key={index} className="flex flex-col justify-between gap-4 lg:pr-6 lg:pl-6 lg:border-r-2 lg:border-[#51515137] lg:first:pl-0 lg:last:pr-0 lg:last:border-none">
              <PictureLink link={article.link} className="lg:hidden">
                <img src={article.image} alt={article.title} />
              </PictureLink>
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
        <div className="p-4 flex flex-col gap-4 md:p-0 md:grid md:col-span-2 md:grid-cols-2 lg:flex lg:row-start-2 lg:col-span-4 lg:gap-5">
          {articles.slice(0, 3).map((article, index) => (
            <article className="flex flex-row gap-4 lg:p-3 lg:border lg:border-neutral-300" key={index}>
              <PictureLink link={article.link} className="lg:order-2">
                <img src={article.image} alt={article.title} className="min-w-24 w-24 min-h-24 h-24 lg:min-w-[4.25rem] lg:w-[4.25rem] lg:min-h-[4.25rem] lg:h-[4.25rem] object-cover object-center" />
              </PictureLink>
              <div className="flex flex-col justify-center lg:justify-between lg:gap-2">
                <h2>
                  <Link to={article.link} className="line-clamp-3 overflow-anywhere lg:text-sm">
                    {article.title}
                  </Link>
                </h2>
                <Link to={article.categoryLink} className="hidden lg:inline-block lg:w-fit text-sm text-[#686868] font-light">
                  {article.categoryTitle}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainArticles;
