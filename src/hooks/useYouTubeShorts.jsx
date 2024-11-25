import { useEffect, useState } from "react";

const useYouTubeShorts = () => {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const allVideos = [];

    function fetchVideos(pageToken = "") {
      const channelId = "UCh3RLLVBaEeBRRZBbnnVWWA";
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
          // const shortVideos = data.items.filter((video) => {
          //   const duration = video.contentDetails.duration;
          //   const match = duration.match(/PT(\d+M)?(\d+S)?/);
          //   if (match) {
          //     const minutes = match[1] ? parseInt(match[1]) : 0;
          //     const seconds = match[2] ? parseInt(match[2]) : 0;
          //     const totalSeconds = minutes * 60 + seconds;
          //     return totalSeconds < 60;
          //   }
          //   return false;
          // });
        //   console.log(shortVideos)
          // allVideos.push(...shortVideos);
          // const videoIdsStr = videoIds.join(",");
          // console.log(videoIdsStr)
          //   console.log(data);
        })
        .catch((error) => {
          setError(error.message);
        });
    }

    fetchVideos();
    // console.log(allVideos);
  }, []);

  return [videos, error, isLoading];
};

export default useYouTubeShorts;
