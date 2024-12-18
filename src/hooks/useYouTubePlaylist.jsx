import { useEffect, useState } from "react";

const useYouTubePlaylist = () => {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    function fetchVideos() {
      fetch(`https://ilhamifham.github.io/data/youtube/playlist.json`)
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
          setError("An error occurred while fetching videos.");
          setIsLoading(false);
        });
    }

    fetchVideos();
  }, []);

  return [videos, error, isLoading];
};

export default useYouTubePlaylist;
