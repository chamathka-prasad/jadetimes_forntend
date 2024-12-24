import { useEffect, useState } from "react";

import CloseButton from "../components/CloseButton";
import ChevronIcon from "../components/ChevronIcon";
import Section from "../components/Section";

import useYouTubeShorts from "../hooks/useYouTubeShorts";
import useSwitch from "../hooks/useSwitch";
import useCarousel from "../hooks/useCarousel";
import useStopScroll from "../hooks/useStopScroll";

const YouTubeShorts = () => {
  const [videos, error, loading] = useYouTubeShorts();
  const [youTubeShorts, setYouTubeShorts] = useState([]);
  const [currentIndex, scrollRef, handleNextSlide, handlePreviousSlide] =
    useCarousel(youTubeShorts.length);
  const [isPlayScreen, handlePlayScreenOn, handlePlayScreenOff] = useSwitch();
  useStopScroll(isPlayScreen);

  useEffect(() => {
    const shortsSection = [];
    for (let i = 0; i < videos.length; i += 5) {
      shortsSection.push(videos.slice(i, i + 5));
    }
    setYouTubeShorts(shortsSection);
  }, [videos]);

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
    )
  }

  if (error) {
    return null;
  }

  return (
    <div className="relative">
      <div
        className="flex flex-row overflow-x-hidden gap-5 p-5 snap-x snap-mandatory peer"
        ref={scrollRef}
      >
        {youTubeShorts.map((section, index) => (
          <div
            key={index}
            className={`grid grid-cols-5 w-full flex-none gap-5 snap-center duration-1000 ${currentIndex === index ? "visible" : "invisible"}`}
          >
            {section.map((video) => (
              <div key={video.index} className="aspect-video">
                <div className="relative mb-4">
                  <img
                    src={`https://i.ytimg.com/vi/${video.videoId}/mqdefault.jpg`}
                    alt=""
                    className="absolute top-0 -z-[1] object-cover object-center"
                  />
                  <div className="bg-[#00000080] aspect-video flex items-center justify-center">
                    <button
                      aria-label="play"
                      className="flex text-white"
                      onClick={handlePlayScreenOn}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="w-10"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                        <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445" />
                      </svg>
                    </button>
                  </div>
                </div>
                <p className="text-heading font-semibold mb-3 line-clamp-2">{video.title}</p>
                <p className="line-clamp-2 text-xs">{video.description}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
      {currentIndex !== youTubeShorts.length - 1 && (
        <button
          className="absolute text-white duration-300 opacity-0 peer-hover:opacity-100 hover:opacity-100 focus:opacity-100 flex top-1/3 -translate-y-1/2 right-9"
          onClick={handleNextSlide}
        >
          <ChevronIcon className="w-9" />
        </button>
      )}
      {currentIndex !== 0 && (
        <button
          className="absolute text-white duration-300 opacity-0 peer-hover:opacity-100 hover:opacity-100 focus:opacity-100 flex top-1/3 -translate-y-1/2 left-9"
          onClick={handlePreviousSlide}
        >
          <ChevronIcon className="w-9 rotate-180" />
        </button>
      )}
      {isPlayScreen && (
        <div className="bg-neutral-900 fixed top-0 bottom-0 left-0 right-0 z-50 p-4">
          <Section tag="div" className="grid grid-cols-3">
            <div className="aspect-video bg-red-500 col-span-2"></div>
          </Section>
          <CloseButton
            className="w-[1.7rem] text-white"
            onClick={handlePlayScreenOff}
          />
        </div>
      )}
    </div>
  );
};

export default YouTubeShorts;
