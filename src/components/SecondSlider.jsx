import { useState, useRef } from "react";

import { FaPlay, FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

const articles = [
  {
    title: "Discover the world's top 10 highest-paid athletes | Jadetimes",
    link: "KqaLqKYUp-M",
    index: 0
  },
  {
    title: "Top 10 Strategic Decisions That Saved Sri Lanka by president Ranil Wickremesinghe | Jadetimes",
    link: "4HAoFwSfupk",
    index: 1
  },
];

const SecondSlider = () => {
  const [currentVideo, setCurrentVideo] = useState({
    title: articles[0].title,
    image: articles[0].image,
    link: articles[0].link,
    index: articles[0].index
  });

  const [isPlaying, setIsPlaying] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollRef = useRef(null);

  function nextSlide() {
    scrollRef.current.scrollBy({
      top: 0,
      left: scrollRef.current.clientWidth,
      behavior: "smooth",
    });
    setCurrentIndex((prevCurrentIndex) => {
      return prevCurrentIndex + 1;
    });
  }

  function prevSlide() {
    scrollRef.current.scrollBy({
      top: 0,
      left: -scrollRef.current.clientWidth,
      behavior: "smooth",
    });
    setCurrentIndex((prevCurrentIndex) => {
      return prevCurrentIndex - 1;
    });
  }

  function handlePlay() {
    setIsPlaying(true);
  }

  function handleCurrentVideo(index) {
    setCurrentVideo({
      title: articles[index].title,
      image: articles[index].image,
      link: articles[index].link,
      index: articles[index].index
    });
  }

  return (
    <div className="col-[span_14_/_span_14]">
      <div className="aspect-video mb-5 bg-black">
        {isPlaying || (
          <div
            className="h-full bg-cover bg-center"
            style={{
              backgroundImage: `url("https://i.ytimg.com/vi/${currentVideo.link}/maxresdefault.jpg")`,
            }}
          >
            <div className="bg-[#000000aa] text-white h-full flex flex-col items-center justify-center">
              <h4 className="text-[0.9375rem] mb-2">{currentVideo.title}</h4>
              <div className="text-lg">Jadetimes</div>
              <button
                className="flex flex-row flex-nowrap items-center gap-3 bg-[#FF322E] px-7 py-2 mt-8 text-sm"
                onClick={handlePlay}
              >
                <FaPlay />
                Play Video
              </button>
            </div>
          </div>
        )}
        {isPlaying && (
          <iframe
            title="What We Know About Trump Shooting Suspect Thomas Matthew Crooks | JadeTimes"
            width="100%"
            src={`https://www.youtube.com/embed/${currentVideo.link}?autoplay=1&mute=0&controls=1&loop=0&rel=0&origin=https://www.jadetimes.com&playsinline=1&enablejsapi=1`}
            className="aspect-video"
            sandbox="allow-same-origin allow-scripts allow-popups allow-presentation"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            loading="lazy"
          ></iframe>
        )}
      </div>
      <div
        className="flex flex-row overflow-x-hidden snap-x snap-mandatory gap-3"
        ref={scrollRef}
      >
        <div className="flex flex-row w-full grow-0 shrink-0 h-fit gap-3 snap-start">
          {articles.map((article, index) => (
            <div
              className="text-sm w-full"
              onClick={() => handleCurrentVideo(index)}
              key={index}
            >
              <div
                className="aspect-video bg-cover bg-center cursor-pointer"
                style={{
                  backgroundImage: `url("https://i.ytimg.com/vi/${article.link}/maxresdefault.jpg")`,
                }}
              >
                <div className={`h-full ${index === currentVideo.index ? "bg-[#00000080]" : ""}`}></div>
              </div>
              <h5 className="line-clamp-1 mt-2">
                {article.title}
              </h5>
              <div className="text-[#17171780]">Jadetimes</div>
            </div>
          ))}
          <div className="text-sm w-full">
            <div className="aspect-video bg-black"></div>
            <h5 className="line-clamp-1 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
              eaque?
            </h5>
            <div className="text-[#17171780]">Jadetimes</div>
          </div>
          <div className="text-sm w-full">
            <div className="aspect-video bg-black"></div>
            <h5 className="line-clamp-1 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
              eaque?
            </h5>
            <div className="text-[#17171780]">Jadetimes</div>
          </div>
        </div>
        <div className="flex flex-row w-full grow-0 shrink-0 h-fit gap-3 snap-start mx-3">
          <div className="text-sm">
            <div className="aspect-video bg-black"></div>
            <h5 className="line-clamp-1 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
              eaque?
            </h5>
            <div className="text-[#17171780]">Jadetimes</div>
          </div>
          <div className="text-sm">
            <div className="aspect-video bg-black"></div>
            <h5 className="line-clamp-1 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
              eaque?
            </h5>
            <div className="text-[#17171780]">Jadetimes</div>
          </div>
          <div className="text-sm">
            <div className="aspect-video bg-black"></div>
            <h5 className="line-clamp-1 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
              eaque?
            </h5>
            <div className="text-[#17171780]">Jadetimes</div>
          </div>
          <div className="text-sm">
            <div className="aspect-video bg-black"></div>
            <h5 className="line-clamp-1 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
              eaque?
            </h5>
            <div className="text-[#17171780]">Jadetimes</div>
          </div>
        </div>
        <div className="flex flex-row grow-0 shrink-0 h-fit gap-3 snap-start w-1/2">
          <div className="text-sm">
            <div className="aspect-video bg-black"></div>
            <h5 className="line-clamp-1 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
              eaque?
            </h5>
            <div className="text-[#17171780]">Jadetimes</div>
          </div>
          <div className="text-sm">
            <div className="aspect-video bg-black"></div>
            <h5 className="line-clamp-1 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
              eaque?
            </h5>
            <div className="text-[#17171780]">Jadetimes</div>
          </div>
        </div>
      </div>
      <div className="relative flex mt-6">
        {currentIndex !== 0 && (
          <button
            className={`flex flex-row flex-nowrap items-center gap-3 text-sm`}
            onClick={prevSlide}
          >
            <FaArrowLeftLong />
            Prev
          </button>
        )}
        {currentIndex !== 2 && (
          <button
            className={`flex flex-row flex-nowrap items-center gap-3 text-sm ml-auto`}
            onClick={nextSlide}
          >
            Next
            <FaArrowRightLong />
          </button>
        )}
      </div>
    </div>
  );
};

export default SecondSlider;
