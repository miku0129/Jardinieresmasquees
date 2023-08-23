import "./article-card.component.scss";

const ArticleCard = ({article}) => {
  return (
    <div>
      <iframe
        src={article.article_url}
        style={{
          width: "500px",
          height: "710px",
          border: "none",
          overflow: "hidden",
          scrolling: "no",
          frameborder: "0",
          allowfullscreen: "true",
          allow:
            "autoplay;clipboard-write;encrypted-media;picture-in-picture;web-share",
        }}
      ></iframe>
    </div>
  );
};

export default ArticleCard;
