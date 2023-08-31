import "./article-card.component.scss";

const ArticleCard = ({ article }) => {
  // const src = article_image_url
  //   ? article_image_url
  //   : "https://i.ibb.co/kGqNLh5/Screenshot-2023-08-20-143312.jpg";

  const { created_time, message } = article;
  const text = message.length < 80 ? message : message.slice(0, 80) + "...";
  console.log("message", message);
  return (
    <div>
      {/* <a
        href={article_original_resource}
        className="blog-card-link"
        target="_blank"
        rel="noreferrer"
      > */}
      <div className="blog-card">
        <img
          src="https://i.ibb.co/kGqNLh5/Screenshot-2023-08-20-143312.jpg"
          alt="image"
        />
        <p className="blog-description">{text}</p>
      </div>
      {/* </a> */}
    </div>
  );
};

export default ArticleCard;
