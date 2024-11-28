const Iframe = ({title, videoId}) => {
  return (
    <iframe
      title={title}
      className="aspect-video"
      width="100%"
      src={`https://www.youtube.com/embed/${videoId}?autoplay=0&mute=0&controls=1&loop=0&rel=0&origin=https://www.jadetimes.com&playsinline=1`}
      sandbox="allow-same-origin allow-scripts allow-popups allow-presentation"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      loading="lazy"
    ></iframe>
  );
}

export default Iframe;
