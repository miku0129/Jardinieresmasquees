import { Fragment } from "react";
import ImageGallery from "react-image-gallery";

// import ArticlesPreview from "../../route/articles-preview/articles-preview.component";
import ContentHeader from "../content-header/content-header.compoment";
import ContentIntroduction from "../content-introduction/content-introduction.component";
import ContentContact from "../content-contact/content-contact.component";
import { ACTIVITY_PHOTO_IMAGES } from "../../utils/data.utils/activity-photo-data";

import "react-image-gallery/styles/css/image-gallery.css";
import "./main.styles.scss";

const Main = () => {
  const originalImages = ACTIVITY_PHOTO_IMAGES.activity_photo;
  const images = originalImages.map((item) => {
    const obj = {
      original: item.image_url,
      thumbnail: item.image_url,
      originalHeight: 500,
      thumbnailHeight: 70,
    };
    return obj;
  });

  return (
    <Fragment>
      <div className="main-container">
        <div>
          <ContentHeader />
        </div>
        <div className="contents-container">
          <ContentIntroduction />

          <div className="image-gallery-container">
            <ImageGallery
              items={images}
              showNav={true}
              autoPlay={false}
              showFullscreenButton={false}
              useBrowserFullscreen={false}
              showPlayButton={false}
              showBullets={true}
            />
          </div>

          {/* <div className="articles-container">
            <ArticlesPreview />
          </div> */}

          <ContentContact />
        </div>
      </div>
    </Fragment>
  );
};

export default Main;
