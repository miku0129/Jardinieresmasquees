import ArticlesPreview from "../../route/articles-preview.component";
import ContentContact from "../content-contact/content-contact.component";
import ContentHeader from "../content-header.compoment";
import ContentIntroduction from "../content-introduction/content-introduction.component";
import MainVisual from "../main-visual/main-visual.component";

import "react-image-gallery/styles/image-gallery.css";
import "./main.styles.scss";

export default function Main() {
  return (
    <div className="main-container">
      <ContentHeader />
      <div className="contents-container">
        <ContentIntroduction />
        <MainVisual />
        <ArticlesPreview />
        <ContentContact />
      </div>
    </div>
  );
}
