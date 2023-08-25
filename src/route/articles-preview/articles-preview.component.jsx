import ArticleCard from "../../component/article-card/article-card.component";

import "./articles-preview.styles.scss";
import { ARTICLES } from "../../utils/data.utils/article-data";

const ArticlesPreview = () => {
  return (
    <div className="articles-preview-container">
      <div className="articles-preview-sub-container">
        {ARTICLES.article
          .filter((_, idx) => idx >= ARTICLES.article.length - 3) //最新の投稿から3つ表示
          .map((article) => (
            <ArticleCard article={article} />
          ))}
      </div>
    </div>
  );
};

export default ArticlesPreview;
