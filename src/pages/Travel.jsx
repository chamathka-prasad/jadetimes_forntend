import React from "react";
import { Link } from "react-router-dom";
import MainArticles from "../components/MainArticles";
import ThirdSlider from "../components/ThirdSlider";
import Articles from "../routes/Articles";

const Travel = () => {
  return (
    <>
      <div className="max-w-[1300px] mx-auto">
        <h1 className="border-b-[3px] border-b-[#FF322E] pb-1 text-[#111111] mx-4 mt-2 text-xl">
          <Link className="font-semibold">News</Link>
          <span className="mx-4">|</span>
          <Link>Travel</Link>
        </h1>
        <MainArticles articles={Articles} />
      </div>
      <ThirdSlider articles={Articles.slice(0, 2)} className="mt-4" />
    </>
  );
};

export default Travel;