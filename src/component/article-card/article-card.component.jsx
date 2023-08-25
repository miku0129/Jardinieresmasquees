import "./article-card.component.scss";

const ArticleCard = ({ article }) => {
  const { article_summary, article_image_url, article_original_resource } =
    article;

  const src = article_image_url
    ? article_image_url
    : "https://i.ibb.co/kGqNLh5/Screenshot-2023-08-20-143312.jpg";

  const text =
    article_summary.length < 70
      ? article_summary
      : article_summary.slice(0, 70) + "...";

  return (
    <div>
      <div class="blog-card">
        <img src={src} />
        <p class="blog-description">{text}</p>
        <a href={article_original_resource} class="read-more" target="_blank">
          Lire plus
        </a>
      </div>
    </div>
  );
};

export default ArticleCard;
