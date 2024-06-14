import { Fragment } from "react";

import ArticlesPreview from "../../route/articles-preview/articles-preview.component";
import ContentHeader from "../content-header/content-header.compoment";
import ContentIntroduction from "../content-introduction/content-introduction.component";
import ContentContact from "../content-contact/content-contact.component";

import "react-image-gallery/styles/css/image-gallery.css";
import "./main.styles.scss";

import MainVisual from "../main-visual/main-visual.component";

const Main = () => {
  return (
    <Fragment>
      <div className="main-container">
        <ContentHeader />
        <div className="contents-container">
          <ContentIntroduction />
          <MainVisual />
          <ArticlesPreview />
          <ContentContact />
        </div>
      </div>
    </Fragment>
  );
};

export default Main;
