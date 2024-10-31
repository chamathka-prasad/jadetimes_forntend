import { useState, useEffect } from "react";

const useYouTube = () => {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const apiKey = "AIzaSyDz8pmSqNKcUC59JtwChWyfLPPNvsAfC38";
  const playlistId = "PL-5p6ii0pvVHcd_swLVii3Ry0mQBH4IEj";

  const fetchVideos = async (pageToken = "", maxResults = 10) => {
    const allVideos = [];
    const uniqueVideos = new Set();

    try {
      let response;
      do {
        response = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&playlistId=${playlistId}&key=${apiKey}&pageToken=${pageToken}&maxResults=${maxResults}`
        );
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        const data = await response.json();
        const videoItems = data.items
          .map((item) => ({
            id: item.snippet.resourceId.videoId,
            publishedAt: item.contentDetails.videoPublishedAt,
            title: item.snippet.title,
          }))
          .filter((item) => {
            if (!uniqueVideos.has(item.id)) {
              uniqueVideos.add(item.id);
              return true;
            }
            return false;
          });

        allVideos.push(...videoItems);
        pageToken = data.nextPageToken;
      } while (pageToken);

      const sortedVideos = allVideos.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
      const InsertedVideos = sortedVideos.map((item, index) => ({ ...item, index: index }));
      setVideos(InsertedVideos);
    } catch (error) {
      setError(error);
      console.error("Error fetching videos:", error);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  return { videos, isLoading, error };
};

export default useYouTube;
