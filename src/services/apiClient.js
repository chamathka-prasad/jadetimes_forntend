const apiClient = () => {
  const BASE_URL = "https://www.googleapis.com/youtube/v3/";
  const API_KEY = "AIzaSyBE0ag6EfFKAmEspdrrHb6NFKFzO5oKfVY";
  return [BASE_URL, API_KEY];
};

export default apiClient;