import { useEffect, useState } from "react";

const useYouTubeShorts = () => {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const allVideos = [];
    const channelId = "UCh3RLLVBaEeBRRZBbnnVWWA";

    function fetchVideos(pageToken = "") {
      fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&type=video&videoDuration=short&key=${import.meta.env.VITE_API_KEY}&pageToken=${pageToken}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          if (data.nextPageToken) {
            fetchVideos(data.nextPageToken);
          }
          // const videoIds = data.items.map((item) => item.id.videoId);
          // const videoIdsStr = videoIds.join(",");
          // console.log(videoIdsStr)
          console.log(data)
        })
        .catch((error) => {
          setError(error.message);
        });
    }

    fetchVideos();
  }, []);

  return [videos, error, isLoading];
};

export default useYouTubeShorts;
