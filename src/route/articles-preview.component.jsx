import { useEffect, useState } from "react";
import { getPostsFromFacebook } from "../utils/facebook.utils";

import ArticleCard from "../component/article-card.component";

export default function ArticlesPreview() {
  const [facebookPosts, setFacebookPosts] = useState("");

  useEffect(() => {
    getPostsFromFacebook().then((res) => setFacebookPosts(res));
  }, []);

  return (
    <article className="flex flex-col gap-12 place-self-center-safe md:flex-row md:gap-36">
      {facebookPosts &&
        facebookPosts
          .filter((article) => article.hasOwnProperty("message"))
          .filter((_, idx) => idx < 3)
          .map((article) => {
            return <ArticleCard article={article} key={article.id} />;
          })}
    </article>
  );
}
