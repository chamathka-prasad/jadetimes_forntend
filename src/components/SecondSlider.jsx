import { useState, useEffect } from "react";

import useYouTubePlaylist from "../hooks/useYouTubePlaylist";
import useCarousel from "../hooks/useCarousel";
import useSwitch from "../hooks/useSwitch";

import ArrowIcon from "./ArrowIcon";
import Iframe from "./Iframe";

const SecondSlider = () => {
  const [videos, error, loading] = useYouTubePlaylist();
  const [currentVideo, setCurrentVideo] = useState({});
  const [youTubeVideos, setYouTubeVideos] = useState([]);
  const [currentIndex, scrollRef, handleNextSlide, handlePreviousSlide] = useCarousel(youTubeVideos.length);
  const [isPlay, handlePlayOpen, handlePlayClose] = useSwitch();

  function updateCurrentVideo(index) {
    setCurrentVideo({
      title: videos[index]?.title,
      videoId: videos[index]?.videoId,
      index: videos[index]?.index,
    });
  }

  useEffect(() => {
    updateCurrentVideo(0);
    const playlist = [];
    for (let i = 0; i < videos.length; i += 4) {
      playlist.push(videos.slice(i, i + 4));
    }
    setYouTubeVideos(playlist);
  }, [videos]);

  function handleCurrentVideo(index) {
    updateCurrentVideo(index);
    handlePlayClose();
    handleNextPlayClose();
  }

  function playCurrentVideo(index) {
    updateCurrentVideo(index);
    handlePlayOpen();
  }

  if (loading) {
    return (
      <div className="col-[span_14_/_span_14] animate-pulse">
        <div className="aspect-video mb-5 bg-neutral-300"></div>
        <div className="grid grid-cols-4 gap-5 w-full">
          {Array.from({ length: 4 }, (_, index) => index).map((_, index) => (
            <div key={index}>
              <div className="aspect-video bg-neutral-300"></div>
              <div className="bg-neutral-300 h-4 mt-2 mb-1"></div>
              <div className="w-1/2 bg-neutral-300 h-4"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <>
        <div className="aspect-video mb-5 bg-red-50 border border-red-300 text-accent flex flex-col gap-4 items-center justify-center">
          <div className="text-lg">{error}</div>
        </div>
        <div className="grid grid-cols-4 gap-5 w-full">
          {Array.from({ length: 4 }, (_, index) => index).map((_, index) => (
            <div
              key={index}
              className="aspect-video text-center p-4 bg-red-50 border border-red-300 text-sm text-accent flex flex-col items-center justify-center"
            >
              {error}
            </div>
          ))}
        </div>
      </>
    );
  }

  return (
    <>
      <div className="aspect-video mb-5 border border-neutral-300">
        {isPlay ? (
          <Iframe videoId={currentVideo.videoId} autoplay="true" />
        ) : (
          <div className="h-full relative">
            <img
              src={`https://i.ytimg.com/vi/${currentVideo.videoId}/sddefault.jpg`}
              alt=""
              loading="lazy"
              className="absolute top-0 h-full -z-[1] object-cover object-center"
            />
            <div className="bg-[#000000CC] text-white h-full flex flex-col items-center justify-center">
              <p className="text-[0.9375rem] mb-2 text-white">
                {currentVideo.title}
              </p>
              <div className="text-lg">Jadetimes</div>
              <div className="flex flex-row gap-4 mt-8">
                <button
                  className="flex flex-row flex-nowrap items-center gap-2 bg-accent px-7 py-2 text-sm"
                  onClick={handlePlayOpen}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-6"
                    viewBox="0 0 16 16"
                  >
                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
                  </svg>
                  Play Video
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div
        className="flex flex-row gap-5 overflow-x-hidden snap-x snap-mandatory"
        ref={scrollRef}
      >
        {youTubeVideos.map((articles, index) => (
          <div
            className={`grid grid-cols-4 w-full flex-none gap-5 snap-center duration-1000 ${
              currentIndex === index ? "visible" : "invisible"
            }`}
            key={index}
          >
            {articles.map((article) => (
              <article
                className="text-sm w-full h-full cursor-pointer group"
                onClick={() => handleCurrentVideo(article.index)}
                key={article.index}
              >
                <div className="aspect-video w-full group/2 border border-neutral-300 relative">
                  {
                    <>
                      <img
                        src={`https://i.ytimg.com/vi/${article.videoId}/mqdefault.jpg`}
                        alt=""
                        loading="lazy"
                        className="absolute top-0 h-full -z-[1] object-cover object-center"
                      />
                      <div
                        className={`w-full h-full flex items-center justify-center text-white bg-[#000000CC] duration-300 ${
                          currentVideo.index === article.index
                            ? "opacity-100"
                            : "opacity-0 group-focus-within:opacity-100 group-hover:opacity-100"
                        }`}
                      >
                        {isPlay && currentVideo.index === article.index ? (
                          <div>Now Playing</div>
                        ) : (
                          <button
                            onClick={(event) => {
                              event.stopPropagation();
                              playCurrentVideo(article.index);
                            }}
                            aria-label="play"
                            className="flex"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              className="w-9"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                              <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445" />
                            </svg>
                          </button>
                        )}
                      </div>
                    </>
                  }
                </div>
                <p className="line-clamp-1 mt-2">{article.title}</p>
                <div className="text-neutral-500">Jadetimes</div>
              </article>
            ))}
          </div>
        ))}
      </div>
      <div className="relative flex mt-6">
        {currentIndex !== 0 && (
          <button
            className={`flex flex-row flex-nowrap items-center gap-3 text-sm text-black`}
            onClick={handlePreviousSlide}
          >
            <ArrowIcon className="w-6 rotate-[135deg]" />
            Prev
          </button>
        )}
        {currentIndex !== youTubeVideos.length - 1 && (
          <button
            className={`flex flex-row flex-nowrap items-center gap-3 text-sm text-black ml-auto`}
            onClick={handleNextSlide}
          >
            Next
            <ArrowIcon className="w-6 -rotate-45" />
          </button>
        )}
      </div>
    </>
  );
};

export default SecondSlider;
