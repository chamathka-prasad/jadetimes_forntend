import { useEffect, useState } from "react";

import CloseButton from "../components/CloseButton";
import ChevronIcon from "../components/ChevronIcon";
import Iframe from "./Iframe";
import PlayButton from "../components/PlayButton";

import useYouTubeShorts from "../hooks/useYouTubeShorts";
import useSwitch from "../hooks/useSwitch";
import useCarousel from "../hooks/useCarousel";
import useStopScroll from "../hooks/useStopScroll";

const YouTubeShorts = () => {
  const [videos, error, loading] = useYouTubeShorts();
  const [currentVideo, setCurrentVideo] = useState({});
  const [youTubeShorts, setYouTubeShorts] = useState([]);
  const [currentIndex, scrollRef, handleNextSlide, handlePreviousSlide] = useCarousel(youTubeShorts.length);
  const [isPlayScreen, handlePlayScreenOn, handlePlayScreenOff] = useSwitch();
  const [isPlay, handlePlayOn, handlePlayOff] = useSwitch();
  useStopScroll(isPlayScreen);

  function updateCurrentVideo(index) {
    setCurrentVideo({
      title: videos[index]?.title,
      videoId: videos[index]?.videoId,
      index: videos[index]?.index,
      description: videos[index]?.description,
    });
  }

  useEffect(() => {
    updateCurrentVideo(0);
    const shortsSection = [];
    for (let i = 0; i < videos.length; i += 5) {
      shortsSection.push(videos.slice(i, i + 5));
    }
    setYouTubeShorts(shortsSection);
  }, [videos]);

  function handleNextCurrentVideo() {
    const index =
      currentVideo.index === videos.length - 1
        ? videos.length - 1
        : currentVideo.index + 1;
    updateCurrentVideo(index);
    handlePlayOff();
  }

  function handlePreviousCurrentVideo() {
    const index = currentVideo.index === 0 ? 0 : currentVideo.index - 1;
    updateCurrentVideo(index);
    handlePlayOff();
  }

  if (loading) {
    return (
      <div className="grid grid-cols-5 gap-5 p-5">
        {Array.from({ length: 5 }, (_, index) => index).map((_, index) => (
          <div key={index} className="animate-pulse">
            <div className="aspect-video bg-neutral-300"></div>
            <div className="mt-4 bg-neutral-300 h-5"></div>
            <div className="bg-neutral-300 h-5 mt-2"></div>
            <div className="mt-4 bg-neutral-300 h-3"></div>
            <div className="bg-neutral-300 h-3 mt-2"></div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return null;
  }

  return (
    <div
      className={`${
        isPlayScreen
          ? "bg-neutral-900 fixed top-0 bottom-0 left-0 right-0 z-50 flex flex-col"
          : ""
      }`.trim()}
    >
      <div className="relative p-5 mb-auto order-1">
        <div
          className="flex flex-row overflow-x-hidden gap-5 snap-x snap-mandatory peer"
          ref={scrollRef}
        >
          {youTubeShorts.map((section, index) => (
            <div
              key={index}
              className={`grid grid-cols-5 w-full flex-none gap-5 snap-center duration-1000 ${
                currentIndex === index ? "visible" : "invisible"
              }`}
            >
              {section.map((video) => (
                <div
                  key={video.index}
                  className={`aspect-video ${
                    isPlayScreen ? "border border-neutral-700" : ""
                  }`.trim()}
                >
                  <div
                    className={`relative ${!isPlayScreen ? "mb-4" : ""}`.trim()}
                  >
                    <img
                      src={`https://i.ytimg.com/vi/${video.videoId}/mqdefault.jpg`}
                      alt=""
                      className="absolute top-0 object-cover object-center -z-[1]"
                      loading="lazy"
                    />
                    <div
                      className={`bg-[#00000080] aspect-video flex flex-col items-center justify-center p-4 font-medium text-white text-center  ${
                        isPlayScreen && currentVideo.index !== video.index
                          ? "duration-300 opacity-0 hover:opacity-100 focus-within:opacity-100"
                          : ""
                      }`.trim()}
                    >
                      {isPlay && currentVideo.index === video.index ? (
                        <div>Now Playing</div>
                      ) : (
                        <>
                          {isPlayScreen && (
                            <p className="mb-3 line-clamp-2">
                              {video.title}
                            </p>
                          )}
                          <PlayButton
                            className="w-10"
                            onClick={() => {
                              handlePlayScreenOn();
                              updateCurrentVideo(video.index);
                              handlePlayOn();
                            }}
                          />
                        </>
                      )}
                    </div>
                  </div>
                  {!isPlayScreen && (
                    <>
                      <p className="text-heading font-semibold mb-3 line-clamp-2">
                        {video.title}
                      </p>
                      <p className="line-clamp-2 text-xs">
                        {video.description}
                      </p>
                    </>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
        {currentIndex !== youTubeShorts.length - 1 && (
          <button
            className="absolute text-black bg-white border border-neutral-300 shadow-lg rounded-full p-2 duration-300 opacity-0 peer-hover:opacity-100 hover:opacity-100 focus:opacity-100 flex top-1/2 -translate-y-1/2 focus:rounded-full right-9"
            onClick={handleNextSlide}
            aria-label="next slide"
          >
            <ChevronIcon className="w-7 translate-x-[0.125rem]" />
          </button>
        )}
        {currentIndex !== 0 && (
          <button
            className="absolute text-black bg-white border border-neutral-300 shadow-lg rounded-full p-2 duration-300 opacity-0 peer-hover:opacity-100 hover:opacity-100 focus:opacity-100 flex top-1/2 -translate-y-1/2 focus:rounded-full left-9"
            onClick={handlePreviousSlide}
            aria-label="previous slide"
          >
            <ChevronIcon className="w-7 rotate-180 -translate-x-[0.125rem]" />
          </button>
        )}
      </div>
      {isPlayScreen && (
        <div className="px-5 mt-auto">
          <div className="grid grid-cols-10 gap-5 aspect-[33/9]">
            <div className="col-span-5 col-start-2 aspect-video">
              {isPlay ? (
                <Iframe videoId={currentVideo.videoId} autoplay="true" />
              ) : (
                <div className="relative h-full">
                  <img
                    src={`https://i.ytimg.com/vi/${currentVideo.videoId}/sddefault.jpg`}
                    alt=""
                    className="absolute object-cover object-center h-full -z-[1]"
                    loading="lazy"
                  />
                  <div className="bg-[#00000080] w-full h-full flex flex-col items-center justify-center gap-4 text-center">
                    <div className="text-neutral-300">Jadetimes</div>
                    <p className="text-white font-semibold text-2xl xl:text-3xl">
                      {currentVideo.title}
                    </p>
                    <PlayButton
                      className="w-12 text-white"
                      onClick={handlePlayOn}
                    />
                  </div>
                </div>
              )}
            </div>
            <div className="col-span-3 overflow-y-auto">
              <p className="text-white text-2xl mb-4">{currentVideo.title}</p>
              <p className="text-neutral-300">{currentVideo.description}</p>
            </div>
            <div className="col-span-1 flex items-center justify-center col-start-10">
              {currentVideo.index !== videos.length - 1 && (
                <button onClick={handleNextCurrentVideo}>
                  <ChevronIcon className="w-9 text-white" />
                </button>
              )}
            </div>
            <div className="col-span-1 flex items-center justify-center col-start-1 row-start-1">
              {currentVideo.index !== 0 && (
                <button onClick={handlePreviousCurrentVideo}>
                  <ChevronIcon className="w-9 text-white rotate-180" />
                </button>
              )}
            </div>
          </div>
        </div>
      )}
      {isPlayScreen && (
        <div className="p-5 flex -order-1">
          <CloseButton
            className="w-[1.7rem] text-white ml-auto"
            onClick={() => {
              handlePlayScreenOff();
              handlePlayOff();
            }}
          />
        </div>
      )}
    </div>
  );
};

export default YouTubeShorts;
