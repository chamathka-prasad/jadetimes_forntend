import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";

const useYouTubePlaylist = () => {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const allVideos = [];

    function fetchVideos(pageToken = "") {
      const [BASE_URL, API_KEY] = apiClient();
      const playlistId = "PL-5p6ii0pvVHcd_swLVii3Ry0mQBH4IEj";

      fetch(`${BASE_URL}playlistItems?part=snippet,contentDetails&playlistId=${playlistId}&key=${API_KEY}&pageToken=${pageToken}`)
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
          const videoDetails = data.items.map((item) => ({
            id: item.snippet.resourceId.videoId,
            publishedAt: item.contentDetails.videoPublishedAt,
            title: item.snippet.title,
          }));
          allVideos.push(...videoDetails);
          const playableVideos = allVideos.filter((item) => item.publishedAt !== undefined);
          const sortedVideos = playableVideos.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
          const InsertedVideos = sortedVideos.map((item, index) => ({ ...item, index: index }));
          setVideos(InsertedVideos);
        })
        .catch((error) => {
          setError(error.message);
        });
    }

    fetchVideos();
  }, []);

  return [videos, error];
};

export default useYouTubePlaylist;
