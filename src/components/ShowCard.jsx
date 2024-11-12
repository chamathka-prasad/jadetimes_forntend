import newsSudio from "../assets/show/1.webp";
import photoStudio from "../assets/show/2.webp";
import interviewStudio from "../assets/show/3.webp";

const shows = [
  {
    image: newsSudio,
    title: "Global News Services",
    description: "Delivering comprehensive news from around the world.",
  },
  {
    image: photoStudio,
    title: "Commercial Services",
    description: "Offering publishing services for commercial purposes.",
  },
  {
    image: interviewStudio,
    title: "Entertainment Content",
    description: "Producing engaging and diverse entertainment content.",
  },
];

const ShowCard = ({ className }) => {
  return (
    <ul className={className}>
      {shows.map((show, index) => (
        <li key={index} className="text-neutral-900">
          <img src={show.image} alt={show.description} className="aspect-video object-cover object-center" />
          <h2 className="font-semibold mb-1 mt-3">{show.title}</h2>
          <p className="text-sm">{show.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default ShowCard;
