import "./article-card.component.scss";

type FbArticle = {
  article: {
    created_time: string;
    full_picture: string;
    id: string;
    message: string;
    permalink_url: string;
  };
};

const ArticleCard = ({ article }: FbArticle) => {
  const { created_time, message, permalink_url, full_picture } = article;

  const text =
    String(message.slice(0, 6)) === "https:"
      ? message.slice(0, 30) + "..."
      : message.slice(0, 60) + "...";
  console.log(message.slice(0, 20));

  const src = full_picture
    ? full_picture
    : "https://i.ibb.co/kGqNLh5/Screenshot-2023-08-20-143312.jpg";

  const published_date = created_time.slice(0, 10);

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
          <p>{published_date} | Actualités</p>
          <p className="blog-description">{text}</p>
        </div>
      </a>
    </div>
  );
};

export default ArticleCard;
