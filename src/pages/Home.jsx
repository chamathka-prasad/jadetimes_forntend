import React from "react";
import H1 from "../components/H1";
import H2 from "../components/H2";
import LargeArticle from "../components/LargeArticle";
import SmallToMediumArticle from "../components/SmallToMediumArticle";
import MediumArticle from "../components/MediumArticles";
import SmallArticle from "../components/SmallArticle";
import Advertise from "../components/Advertise";
import AdvertiseImage from "../assets/adds/5.webp"

const Home = () => {
  return (
    <>
      <section className="max-w-screen-xl mx-auto">
        <H1 className="h-0 sm:overflow-hidden" heading="Headlines" />
        <section>
          <H2 />
          <div className="sm:grid sm:grid-cols-2 sm:gap-4 sm:p-4 lg:grid-cols-8 lg:grid-rows-6 xl:grid-cols-11 xl:grid-rows-6">
            <LargeArticle />
            <SmallToMediumArticle className="block mx-4 mt-4 sm:m-0 lg:row-start-4 lg:row-end-6 lg:col-span-2 xl:row-start-5 xl:row-end-7" articleClassName="flex flex-row p-4 gap-4 justify-between lg:flex-col lg:p-0 lg:gap-0" pictureClassName="order-2 min-w-20 max-w-20 max-w-full lg:order-none" divClassName="lg:p-4" />
            <SmallToMediumArticle className="block mx-4 mt-4 sm:m-0 lg:row-start-4 lg:row-end-6 lg:col-span-2 xl:row-start-5 xl:row-end-7" articleClassName="flex flex-row p-4 gap-4 justify-between lg:flex-col lg:p-0 lg:gap-0" pictureClassName="order-2 min-w-20 max-w-20 max-w-full lg:order-none" divClassName="lg:p-4" />
            <SmallToMediumArticle className="block mx-4 mt-4 sm:m-0 lg:row-start-4 lg:row-end-6 lg:col-span-2 xl:row-start-5 xl:row-end-7" articleClassName="flex flex-row p-4 gap-4 justify-between lg:flex-col lg:p-0 lg:gap-0" pictureClassName="order-2 min-w-20 max-w-20 max-w-full lg:order-none" divClassName="lg:p-4" />
            <SmallToMediumArticle className="block mx-4 mt-4 sm:m-0 lg:row-start-4 lg:row-end-6 lg:col-span-2 xl:row-start-5 xl:row-end-7" articleClassName="flex flex-row p-4 gap-4 justify-between lg:flex-col lg:p-0 lg:gap-0" pictureClassName="order-2 min-w-20 max-w-20 max-w-full lg:order-none" divClassName="lg:p-4" />
            <div className="flex flex-col gap-4 p-4 sm:col-span-2 sm:p-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 lg:col-span-8 xl:col-span-11">
              <MediumArticle pictureClassName="sm:hidden" />
              <MediumArticle pictureClassName="sm:hidden" />
              <MediumArticle pictureClassName="sm:hidden" />
              <MediumArticle pictureClassName="sm:hidden" />
            </div>
            <SmallArticle className="mx-4 mb-4 sm:m-0 lg:col-span-2 lg:col-start-6 lg:col-end-9 lg:row-start-1 lg:row-end-2 xl:col-start-9 xl:col-end-12 xl:row-start-2 xl:row-end-3" />
            <SmallArticle className="mx-4 mb-4 sm:m-0 lg:col-span-2 lg:col-start-6 lg:col-end-9 lg:row-start-2 lg:row-end-3 xl:col-start-9 xl:col-end-12 xl:row-start-3 xl:row-end-4" />
            <SmallArticle className="mx-4 mb-4 sm:m-0 lg:col-span-2 lg:col-start-6 lg:col-end-9 lg:row-start-3 lg:row-end-4 xl:col-start-9 xl:col-end-12 xl:row-start-4 xl:row-end-5" />
          </div>
        </section>
      </section>
    </>
  )
};

export default Home;