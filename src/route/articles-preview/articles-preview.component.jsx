import { useEffect, useState } from "react";

import ArticleCard from "../../component/article-card/article-card.component";

import {
  getPostsFromFacebook,
  getEventsFromAllPosts,
} from "../../utils/facebook.utils";

import "./articles-preview.styles.scss";

const ArticlesPreview = () => {
  const [facebookPosts, setFacebookPosts] = useState("");
  const [facebookEvents, setFacebookEvents] = useState("");

  useEffect(() => {
    getPostsFromFacebook().then((res) => setFacebookPosts(res));
    // getEventsFromAllPosts().then(res => setFacebookEvents(res));
  }, []);

  //event id を使ってイベント情報を取得する
  //取得したイベント情報を article-previewに渡す
  //article-previewでは情報がニュースかイベントかによりコンポーネントを選択、投稿日付順に表示する
  //article-previewではニュースとイベントを分けるかごっちゃにして表示するか？
  console.log("facebookEvents", facebookEvents);

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
