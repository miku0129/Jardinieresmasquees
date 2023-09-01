import { useEffect, useState, useMemo } from "react";

import ArticleCard from "../../component/article-card/article-card.component";

import { getPostsFromFacebook } from "../../utils/facebook.utils";

import "./articles-preview.styles.scss";

const ArticlesPreview = () => {
  const [facebookPosts, setFacebookPosts] = useState("");
  const memo = useMemo(() => {
    return facebookPosts;
  }, []);

  useEffect(() => {
    getPostsFromFacebook().then((res) => setFacebookPosts(res));
  }, [memo]);

  return (
    <div className="articles-preview-container">
      <div className="articles-preview-sub-container">
        {facebookPosts &&
          facebookPosts
            .filter((article) => article.hasOwnProperty("message"))
            .filter((_, idx) => idx < 3)
            .map((article) => {
              return <ArticleCard article={article} key={article.id} />;
            })}
      </div>
    </div>
  );
};

export default ArticlesPreview;
