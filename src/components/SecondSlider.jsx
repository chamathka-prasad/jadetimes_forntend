import { useState, useRef } from "react";
import { BsPlayFill, BsArrowRight, BsArrowLeft, BsPlayCircle } from "react-icons/bs";

const articles = [
  {
    title: "Top 10 Challenges Threatening Donald Trump’s 2024 Election Campaign | Jadetimes",
    link: "e4RYz0Kq5wY",
    index: 0,
    duration: "08:00",
  },
  {
    title: "Discover the world's top 10 highest-paid athletes | Jadetimes",
    link: "KqaLqKYUp-M",
    index: 1,
    duration: "08:00",
  },
  {
    title: "Top 10 Strategic Decisions That Saved Sri Lanka by president Ranil Wickremesinghe | Jadetimes",
    link: "4HAoFwSfupk",
    index: 2,
    duration: "08:00",
  },
  {
    title: "World top 10 Cities | Jadetimes",
    link: "OrEexOPbynE",
    index: 3,
    duration: "08:00",
  },
  {
    title: "Top 10 key moves kamala haris will make to secure the election success | Jadetimes",
    link: "e4RYz0Kq5wY",
    index: 4,
    duration: "08:00",
  },
  {
    title: "Discover the world's top 10 highest-paid athletes | Jadetimes",
    link: "KqaLqKYUp-M",
    index: 5,
    duration: "08:00",
  },
  {
    title: "Paris Olympics 2024 | Discover The Most Common Types of Sport Injuries | Jadetimes",
    link: "4HAoFwSfupk",
    index: 6,
    duration: "08:00",
  },
  {
    title: "Golden Pheasant Have 24k Gold? Discover World’s Top 10 Beautiful Birds | JadeTimes",
    link: "OrEexOPbynE",
    index: 7,
    duration: "08:00",
  },
  {
    title: "Met Gala 2024 Top Ten Looks: Discover the Indian Celebrity beats all | Jadetimes",
    link: "4HAoFwSfupk",
    index: 8,
    duration: "08:00",
  },
  {
    title: "Discover Top 10 Achievements of PM Narendra Modi Government | Jadetimes",
    link: "OrEexOPbynE",
    index: 9,
    duration: "08:00",
  },
];

const youtubeArticles = [];

for (let i = 0; i < articles.length; i += 4) {
  youtubeArticles.push(articles.slice(i, i + 4));
}

const SecondSlider = () => {
  const [currentVideo, setCurrentVideo] = useState({
    title: articles[0].title,
    image: articles[0].image,
    link: articles[0].link,
    index: articles[0].index,
  });
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef(null);

  function nextSlide() {
    scrollRef.current.scrollBy({
      left: scrollRef.current.clientWidth,
      behavior: "smooth",
    });
    setCurrentIndex((prevCurrentIndex) => prevCurrentIndex + 1);
  }

  function prevSlide() {
    scrollRef.current.scrollBy({
      left: -scrollRef.current.clientWidth,
      behavior: "smooth",
    });
    setCurrentIndex((prevCurrentIndex) => prevCurrentIndex - 1);
  }

  function handleCurrentVideo(index) {
    if (currentVideo.index !== index) {
      setCurrentVideo({
        title: articles[index].title,
        image: articles[index].image,
        link: articles[index].link,
        index: articles[index].index,
      });
      setIsPlaying(false);
    }
  }

  function playCurrentVideo(index) {
    setCurrentVideo({
      title: articles[index].title,
      image: articles[index].image,
      link: articles[index].link,
      index: articles[index].index,
    });
    setIsPlaying(true);
  }

  function playNextVideo(index) {
    const nextIndex = index === articles.length - 1 ? 0 : index + 1;
    setCurrentVideo({
      title: articles[nextIndex].title,
      image: articles[nextIndex].image,
      link: articles[nextIndex].link,
      index: nextIndex,
    });
    setIsPlaying(true);
  }

  return (
    <div className="col-[span_14_/_span_14]">
      <div className="aspect-video mb-5 bg-black">
        {isPlaying ? (
          <iframe
            id="player"
            title={currentVideo.title}
            width="100%"
            src={`https://www.youtube.com/embed/${currentVideo.link}?autoplay=1&mute=0&controls=1&loop=0&rel=0&origin=https://www.jadetimes.com&playsinline=1`}
            className="aspect-video"
            sandbox="allow-same-origin allow-scripts allow-popups allow-presentation"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            loading="lazy"
          ></iframe>
        ) : (
          <div
            className="h-full bg-cover bg-center"
            style={{
              backgroundImage: `url("https://i.ytimg.com/vi/${currentVideo.link}/sddefault.jpg")`,
            }}
          >
            <div className="bg-[#000000d1] text-white h-full flex flex-col items-center justify-center">
              <h4 className="text-[0.9375rem] mb-2">{currentVideo.title}</h4>
              <div className="text-lg">Jadetimes</div>
              <div className="flex flex-row gap-4">
                <button className="flex flex-row flex-nowrap items-center gap-2 bg-[#FF322E] px-7 py-2 mt-8 text-sm" onClick={() => setIsPlaying(true)}>
                  <BsPlayFill size={25} />
                  Play Video
                </button>
                {/* {
                  <button className="bg-[#FF322E] px-7 py-2 mt-8 text-sm" onClick={() => playNextVideo(currentVideo.index)}>
                    Next Video
                  </button>
                } */}
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-row overflow-x-hidden snap-x snap-mandatory" ref={scrollRef}>
        {youtubeArticles.map((articles, index) => (
          <div className={`grid grid-cols-4 w-full flex-none gap-5 duration-500 ${currentIndex !== index ? "invisible" : ""}`} key={index}>
            {articles.map((article) => (
              <article className="text-sm w-full h-full cursor-pointer group" onClick={() => handleCurrentVideo(article.index)} key={article.index}>
                <div
                  className="aspect-video bg-cover bg-center w-full group/2"
                  style={{
                    backgroundImage: `url("https://i.ytimg.com/vi/${article.link}/mqdefault.jpg")`,
                  }}
                >
                  <div className={`w-full h-full duration-300 group-hover:bg-[#00000080] focus-within:bg-[#00000080] ${currentVideo.index === article.index ? "bg-[#00000080]" : ""}`}>
                    <div
                      className={`text-white relative h-full flex items-center justify-center duration-300 group-hover:opacity-100 focus-within:opacity-100 ${
                        isPlaying && currentVideo.index === article.index ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      {isPlaying && currentVideo.index === article.index ? (
                        <div>Now Playing</div>
                      ) : (
                        <>
                          <button
                            onClick={(event) => {
                              event.stopPropagation();
                              playCurrentVideo(article.index);
                            }}
                            aria-label="play"
                          >
                            <BsPlayCircle size={35} />
                          </button>
                          <div className="absolute bottom-1 left-2">{article.duration}</div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <h5 className="line-clamp-1 mt-2">{article.title}</h5>
                <div className="text-[#17171796]">Jadetimes</div>
              </article>
            ))}
          </div>
        ))}
      </div>
      <div className="relative flex mt-6">
        {currentIndex !== 0 && (
          <button className={`flex flex-row flex-nowrap items-center gap-3 text-sm`} onClick={prevSlide}>
            <BsArrowLeft size={24} />
            Prev
          </button>
        )}
        {currentIndex !== youtubeArticles.length - 1 && (
          <button className={`flex flex-row flex-nowrap items-center gap-3 text-sm ml-auto`} onClick={nextSlide}>
            Next
            <BsArrowRight size={24} />
          </button>
        )}
      </div>
    </div>
  );
};

export default SecondSlider;
