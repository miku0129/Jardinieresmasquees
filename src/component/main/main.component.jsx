import { Fragment } from "react";
import ImageGallery from "react-image-gallery";

import { ACTIVITY_PHOTO_IMAGES } from "../../utils/data.utils/activity-photo-data";

import "./main.styles.scss";
import "react-image-gallery/styles/css/image-gallery.css";

const Main = () => {
  const originalImages = ACTIVITY_PHOTO_IMAGES.activity_photo;
  const images = originalImages.map((item) => {
    const obj = {
      original: item.image_url,
      thumbnail: item.image_url,
      originalHeight: 500,
      thumbnailHeight: 80,
    };
    return obj;
  });

  return (
    <Fragment>
      <div className="main-container">
        <div>
          <header class="header"></header>
        </div>
        <div className="contents">
          <div>
            <div>Who We Are</div>
          </div>
          <div>
            <div>What We Do</div>
            <div className="image-gallery-container">
              <ImageGallery
                items={images}
                showNav={true}
                autoPlay={false}
                showFullscreenButton={false}
                useBrowserFullscreen={false}
                showPlayButton={false}
              />
            </div>
          </div>
          <div>
            <div>What's New</div>
          </div>
          <div>
            <div>contact</div>
            <div>SOCIAL</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Main;
