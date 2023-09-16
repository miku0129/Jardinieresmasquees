import { useEffect, useState } from "react";

import ArticleCard from "../../component/article-card/article-card.component";
import EventCard from "../../component/event-card/event-card.component";

import {
  getPostsFromFacebook,
  getEventsFromPosts,
} from "../../utils/facebook.utils";

import "./articles-preview.styles.scss";

const ArticlesPreview = () => {
  const [facebookPosts, setFacebookPosts] = useState("");
  const [facebookEvents, setFacebookEvents] = useState("");

  useEffect(() => {
    getPostsFromFacebook().then((res) => setFacebookPosts(res));
    getEventsFromPosts().then((res) => setFacebookEvents(res));
  }, []);

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
      <div className="articles-preview-sub-container">
        {facebookEvents &&
          facebookEvents
            .filter((_, idx) => idx < 3)
            .map((article) => {
              return <EventCard article={article} key={article.id} />;
            })}
      </div>
    </div>
  );
};

export default ArticlesPreview;
