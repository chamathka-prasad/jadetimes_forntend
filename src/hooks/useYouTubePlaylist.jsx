import { useEffect, useState } from "react";

const useYouTubePlaylist = () => {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetch(`https://ilhamifham.github.io/data/youtube/playlist.json`, { signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const videos = data.reverse().map((video, index) => ({
          ...video,
          index: index,
        }));
        setVideos(videos);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error.name === "AbortError") {
          return false;
        }
        setError("An error occurred while fetching videos.");
        setIsLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return [videos, error, isLoading];
};

export default useYouTubePlaylist;
