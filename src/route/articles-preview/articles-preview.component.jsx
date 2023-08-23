import ArticleCard from "../../component/article-card/article-card.component";

import "./articles-preview.styles.scss";
import { ARTICLES } from "../../utils/data.utils/article-data";

const ArticlesPreview = () => {
  return (
    <div className="articles-preview-container">
      <h2>Nouveautés</h2>
      <div className="articles-preview-sub-container">
        {ARTICLES.article
          .filter((_, idx) => idx >= ARTICLES.article.length - 2) //最新の投稿の内2つのみ表示
          .map((article) => (
            <ArticleCard article={article} />
          ))}
      </div>
    </div>
  );
};

export default ArticlesPreview;
