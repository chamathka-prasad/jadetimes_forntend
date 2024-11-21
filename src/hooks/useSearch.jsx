// import { useEffect } from "react";

// const useYouTubeShorts = () => {
//   // const [videos, setVideos] = useState([]);
//   // const [error, setError] = useState("");
//   const channelId = "UCh3RLLVBaEeBRRZBbnnVWWA";

//   useEffect(() => {
//     function fetchVideos(pageToken = "") {
//       fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&type=video&videoDuration=short&key=${import.meta.env.VITE_API_KEY}&pageToken=${pageToken}`)
//         .then((res) => {
//           console.log(res)
//         })
//         // .then((data) => {
//         //   console.log(data);
//         //   // if (data.nextPageToken) {
//         //   //   fetchVideos(data.nextPageToken);
//         //   // }
//         //   // const videoIds = data.items.map((item) => item.id.videoId);
//         //   // const videoIdsStr = videoIds.join(",");
//         //   // fetch(`https://www.googleapis.com/youtube/v3/videos?part=contentDetails,snippet&id=${videoIdsStr}&key=${import.meta.env.VITE_API_KEY}`)
//         //   //   .then((res) => {
//         //   //     if (!res.ok) {
//         //   //       throw new Error(`HTTP error! Status: ${response.status}`);
//         //   //     }
//         //   //     return res.json();
//         //   //   })
//         //   //   .then((data) => {
//         //   //     const shortVideos = data.items.filter((video) => {
//         //   //       const duration = video.contentDetails.duration;
//         //   //       const match = duration.match(/PT(\d+M)?(\d+S)?/);
//         //   //       if (match) {
//         //   //         const minutes = match[1] ? parseInt(match[1]) : 0;
//         //   //         const seconds = match[2] ? parseInt(match[2]) : 0;
//         //   //         const totalSeconds = minutes * 60 + seconds;
//         //   //         return totalSeconds < 60;
//         //   //       }
//         //   //       return false;
//         //   //     });
//         //   //     console.log(shortVideos);
//         //   //   });
//         // })
//         .catch((error) => {
//           console.error("Fetch error:", error);
//         });
//     }

//     fetchVideos();
//   }, []);
// };

// export default useYouTubeShorts;
