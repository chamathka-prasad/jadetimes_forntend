import { useState, useEffect } from "react";
import { BsPlayFill, BsArrowRight, BsArrowLeft, BsPlayCircle } from "react-icons/bs";
import YouTube from "react-youtube";

import useYouTubePlaylist from "../hooks/useYouTubePlaylist";
import useCarousel from "../hooks/useCarousel";
import useOpen from "../hooks/useOpen";

const SecondSlider = () => {
  const [videos, error, loading] = useYouTubePlaylist();
  const [currentVideo, setCurrentVideo] = useState({});
  const [youTubeVideos, setYouTubeVideos] = useState([]);
  const [currentIndex, scrollRef, handleNextSlide, handlePreviousSlide] = useCarousel(youTubeVideos.length);
  const [isPlay, handlePlayOpen, handlePlayClose] = useOpen();
  const [isNextPlay, handleNextPlayOpen, handleNextPlayClose] = useOpen();

  useEffect(() => {
    if (videos.length > 0) {
      setCurrentVideo({
        title: videos[0].title,
        id: videos[0].id,
        index: videos[0].index,
      });
      const playlist = [];
      for (let i = 0; i < videos.length; i += 4) {
        playlist.push(videos.slice(i, i + 4));
      }
      setYouTubeVideos(playlist);
    }
  }, [videos]);

  function handleCurrentVideo(index) {
    if (videos.length > 0 && currentVideo.index !== index) {
      setCurrentVideo({
        title: videos[index].title,
        id: videos[index].id,
        index: videos[index].index,
      });
      handlePlayClose();
      handleNextPlayClose();
    }
  }

  function playCurrentVideo(index) {
    if (index >= 0 && index < videos.length) {
      setCurrentVideo({
        title: videos[index].title,
        id: videos[index].id,
        index: videos[index].index,
      });
      handlePlayOpen();
    }
  }

  function playNextVideo(index) {
    const nextIndex = (index + 1) % videos.length;
    setCurrentVideo({
      title: videos[nextIndex].title,
      id: videos[nextIndex].id,
      index: videos[nextIndex].index,
    });
    handlePlayOpen();
  }

  function handleNextVideo() {
    handlePlayClose();
    handleNextPlayOpen();
  }

  if (loading) {
    return (
      <div className="col-[span_14_/_span_14] animate-pulse">
        <div className="aspect-video mb-5 bg-neutral-300"></div>
        <div className="grid grid-cols-4 gap-5 w-full">
          {Array.from({ length: 4 }, (_, index) => index).map((_, index) => (
            <div key={index} className="aspect-video bg-neutral-300"></div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="col-[span_14_/_span_14]">
        <div className="aspect-video mb-5 bg-red-50 border border-red-200 text-[#FF332E] flex flex-col gap-4 items-center justify-center">
          <div>{error.message}</div>
          <div className="text-lg">Sorry we couldn't be able to load the playlist</div>
        </div>
        <div className="grid grid-cols-4 gap-5 w-full">
          {Array.from({ length: 4 }, (_, index) => index).map((_, index) => (
            <div key={index} className="aspect-video bg-red-50 border border-red-200 text-sm text-[#FF332E] flex flex-col items-center justify-center">
              {error.message}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="col-[span_14_/_span_14]">
      <div className="aspect-video mb-5 bg-black">
        {isPlay ? (
          <YouTube
            videoId={currentVideo.id}
            opts={{
              playerVars: {
                autoplay: 1,
                mute: 0,
                controls: 1,
                loop: 0,
                rel: 0,
                playsinline: 1,
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
              <div className="flex flex-row gap-4 mt-8">
                <button className="flex flex-row flex-nowrap items-center gap-2 bg-[#FF322E] px-7 py-2 text-sm" onClick={handlePlayOpen}>
                  <BsPlayFill size={25} />
                  Play Video
                </button>
                {isNextPlay && (
                  <button className="bg-[#FF322E] px-7 py-2 text-sm" onClick={() => playNextVideo(currentVideo.index)}>
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
          <div className={`grid grid-cols-4 w-full flex-none gap-5 duration-500 snap-start ${currentIndex === index ? "" : "invisible"}`.trim()} key={index}>
            {articles.map((article) => (
              <article className="text-sm w-full h-full cursor-pointer group" onClick={() => handleCurrentVideo(article.index)} key={article.index}>
                <div
                  className="aspect-video bg-cover bg-center w-full group/2"
                  style={{
                    backgroundImage: `url("https://i.ytimg.com/vi/${article.id}/mqdefault.jpg")`,
                  }}
                >
                  {
                    <div
                      className={`w-full h-full flex items-center justify-center text-white bg-[#000000d1] duration-300 ${
                        currentVideo.index === article.index ? "opacity-100" : "opacity-0 group-focus-within:opacity-100 group-hover:opacity-100"
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
                        >
                          <BsPlayCircle size={35} />
                        </button>
                      )}
                    </div>
                  }
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
          <button className={`flex flex-row flex-nowrap items-center gap-3 text-sm`} onClick={handlePreviousSlide}>
            <BsArrowLeft size={24} />
            Prev
          </button>
        )}
        {currentIndex !== youTubeVideos.length - 1 && (
          <button className={`flex flex-row flex-nowrap items-center gap-3 text-sm ml-auto`} onClick={handleNextSlide}>
            Next
            <BsArrowRight size={24} />
          </button>
        )}
      </div>
    </div>
  );
};

export default SecondSlider;
