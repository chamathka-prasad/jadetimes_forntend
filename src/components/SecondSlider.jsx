import { useState, useRef, useEffect } from "react";
import { BsPlayFill, BsArrowRight, BsArrowLeft, BsPlayCircle } from "react-icons/bs";
import YouTube from "react-youtube";
import useYouTube from "../services/useYouTube";

const SecondSlider = () => {
  const { videos, isLoading, error } = useYouTube();
  const [currentVideo, setCurrentVideo] = useState({});
  const [youTubeVideos, setYouTubeVideos] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isNextPlay, setIsNextPlay] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (videos.length > 0) {
      setCurrentVideo({
        title: videos[0].title,
        id: videos[0].id,
        index: videos[0].index,
      });
      const articles = [];
      for (let i = 0; i < videos.length; i += 4) {
        articles.push(videos.slice(i, i + 4));
      }
      setYouTubeVideos(articles);
    }
  }, [videos]);

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
    if (videos.length > 0 && currentVideo.index !== index) {
      setCurrentVideo({
        title: videos[index].title,
        id: videos[index].id,
        index: videos[index].index,
      });
      setIsPlaying(false);
      setIsNextPlay(false);
    }
  }

  function playCurrentVideo(index) {
    if (index >= 0 && index < videos.length) {
      setCurrentVideo({
        title: videos[index].title,
        id: videos[index].id,
        index: videos[index].index,
      });
      setIsPlaying(true);
    }
  }

  function playNextVideo(index) {
    const nextIndex = (index + 1) % videos.length;
    setCurrentVideo({
      title: videos[nextIndex].title,
      id: videos[nextIndex].id,
      index: videos[nextIndex].index,
    });
    setIsPlaying(true);
  }

  function handleNextVideo() {
    setIsPlaying(false);
    setIsNextPlay(true);
  }

  return (
    <div className="col-[span_14_/_span_14]">
      <div className="aspect-video mb-5 bg-black">
        {isPlaying ? (
          <YouTube
            videoId={currentVideo.id}
            opts={{
              playerVars: {
                autoplay: 1,
                mute: 0,
                controls: 1,
                loop: 0,
                rel: 0,
              },
            }}
            onEnd={handleNextVideo}
            loading="lazy"
          />
        ) : (
          <div
            className="h-full bg-cover bg-center"
            style={{
              backgroundImage: `url("https://i.ytimg.com/vi/${currentVideo.id}/sddefault.jpg")`,
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
                {isNextPlay && (
                  <button className="bg-[#FF322E] px-7 py-2 mt-8 text-sm" onClick={() => playNextVideo(currentVideo.index)}>
                    Next Video
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-row overflow-x-hidden snap-x snap-mandatory" ref={scrollRef}>
        {youTubeVideos.map((articles, index) => (
          <div className={`grid grid-cols-4 w-full flex-none gap-5 duration-500 ${currentIndex !== index ? "invisible" : ""}`} key={index}>
            {articles.map((article) => (
              <article className="text-sm w-full h-full cursor-pointer group" onClick={() => handleCurrentVideo(article.index)} key={article.index}>
                <div
                  className="aspect-video bg-cover bg-center w-full group/2"
                  style={{
                    backgroundImage: `url("https://i.ytimg.com/vi/${article.id}/mqdefault.jpg")`,
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
                        <button
                          onClick={(event) => {
                            event.stopPropagation();
                            playCurrentVideo(article.index);
                          }}
                          aria-label="play"
                        >
                          <BsPlayCircle size={35} />
                        </button>
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
        {currentIndex !== youTubeVideos.length - 1 && (
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
