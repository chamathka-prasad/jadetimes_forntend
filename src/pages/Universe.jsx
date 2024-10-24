import React from "react";
import { Link } from "react-router-dom";
import MainArticles from "../components/MainArticles";
import ThirdSlider from "../components/ThirdSlider";
import Articles from "../routes/Articles";
import Pagination from "../components/Pagination";

const Universe = () => {
  return (
    <>
      <div className="max-w-[1300px] mx-auto">
        <h1 className="border-b-[3px] border-b-[#FF322E] pb-1 text-[#111111] mx-4 mt-2 text-xl">
          <Link className="font-semibold">News</Link>
          <span className="mx-4">|</span>
          <Link>Universe</Link>
        </h1>
        <MainArticles articles={Articles} />
      </div>
      <ThirdSlider articles={Articles.slice(0, 2)} className="mt-4" />
      <div className="max-w-[1300px] mx-auto p-4">
        <h2 className="border-b border-[#424242] pb-1 text-xl font-semibold mb-2 text-[#111111]">More from <span className="font-normal">Universe</span></h2>
        <Pagination articles={Articles} />
      </div>
    </>
  );
};

export default Universe;