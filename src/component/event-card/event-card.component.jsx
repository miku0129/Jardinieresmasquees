import "./event-card.component.scss";

const EventCard = ({ article }) => {
  const { name, cover, place, created_time, permalink_url } = article;

  const text = name.length < 80 ? name : name.slice(0, 80) + "...";

  const src = cover
    ? cover.source
    : "https://i.ibb.co/kGqNLh5/Screenshot-2023-08-20-143312.jpg";

  const address = place ? place.name : "";

  return (
    <div>
      <a
        href={permalink_url}
        className="blog-card-link"
        target="_blank"
        rel="noreferrer"
      >
        <div className="blog-card">
          <img src={src} alt={created_time} />
          <p>Événement</p>
          <p className="blog-description">{text}</p>
          {address && <p>Site | {address}</p>}
        </div>
      </a>
    </div>
  );
};

export default EventCard;
