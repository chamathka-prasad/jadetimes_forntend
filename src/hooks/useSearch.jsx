import { useEffect } from "react";
import apiClient from "../services/apiClient";

const useYouTubeShorts = () => {
  // const [videos, setVideos] = useState([]);
  // const [error, setError] = useState("");
  const channelId = "UCh3RLLVBaEeBRRZBbnnVWWA";

  useEffect(() => {
    function fetchVideos(pageToken = "") {
      const [BASE_URL, API_KEY] = apiClient();

      fetch(`${BASE_URL}search?part=snippet&channelId=${channelId}&type=video&videoDuration=short&key=${API_KEY}&pageToken=${pageToken}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return res.json();
        })
        .then((data) => {
          if (data.nextPageToken) {
            fetchVideos(data.nextPageToken);
          }
          const videoIds = data.items.map((item) => item.id.videoId);
          const videoIdsStr = videoIds.join(",");
          fetch(`${BASE_URL}videos?part=contentDetails,snippet&id=${videoIdsStr}&key=${API_KEY}`)
            .then((res) => {
              if (!res.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
              }
              return res.json();
            })
            .then((data) => {
              const shortVideos = data.items.filter((video) => {
                const duration = video.contentDetails.duration;
                const match = duration.match(/PT(\d+M)?(\d+S)?/);
                if (match) {
                  const minutes = match[1] ? parseInt(match[1]) : 0;
                  const seconds = match[2] ? parseInt(match[2]) : 0;
                  const totalSeconds = minutes * 60 + seconds;
                  return totalSeconds < 60;
                }
                return false;
              });
              console.log(shortVideos);
            });
        })
        .catch((error) => {
          console.error("Fetch error:", error);
        });
    }

    fetchVideos();
  }, []);
};

export default useYouTubeShorts;
