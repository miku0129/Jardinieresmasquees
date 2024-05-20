import { Fragment } from "react";
import { AnchorSection } from "react-anchor-navigation";

import ArticlesPreview from "../../route/articles-preview/articles-preview.component";
import ContentHeader from "../content-header/content-header.compoment";
import ContentIntroduction from "../content-introduction/content-introduction.component";
import ContentContact from "../content-contact/content-contact.component";

import "react-image-gallery/styles/css/image-gallery.css";
import "./main.styles.scss";

import Gallery from "../gallery/gallery.component";

const Main = () => {
  return (
    <Fragment>
      <div className="main-container">
        <AnchorSection id="accueil" />
        <ContentHeader />
        <div className="contents-container">
          <AnchorSection id="propos" />
          <ContentIntroduction />
          <Gallery />
          <AnchorSection id="infos" />
          <ArticlesPreview />
          <AnchorSection id="contact" />
          <ContentContact />
        </div>
      </div>
    </Fragment>
  );
};

export default Main;
