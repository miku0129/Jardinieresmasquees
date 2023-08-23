import { Fragment } from "react";
import ImageGallery from "react-image-gallery";

// import ArticlesPreview from "../../route/articles-preview/articles-preview.component";
import ContentHeader from "../content-header/content-header";
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
          {/* <header className="header">
            <div className="header-contents">
              <p className="header-contents-subline">Bienvenue sur</p>
              <h2 className="header-contents-mainline">Jardinieres masquées</h2>
            </div>
          </header> */}
        </div>
        <div className="contents-container">
          <div className="introduction-container">
            <div className="introduction-sub-container-left">
              <h2>Bonjour à tous les jardiniers et jardinières</h2>
              <p>
                Venez nombreux avec vos sourires, vos rires, votre joie dans un
                endroit de paix, au milieu des oiseaux, de la biodiversité,
                quelques fruits nous attendent, seront-ils mûrs ? Venez profiter
                et savourer cette journée
              </p>
            </div>
            <div className="introduction-sub-container-right">
              <div className="container-inner">
                <h3>Qui sommes-nous</h3>
                <p>
                  Une organisation de bénévoles à Tours et dans les quartiers.
                </p>
              </div>
              <div className="container-inner">
                <h3>Que faisons-nous</h3>
                <p>
                  Nous souhaitons nous réapproprier collectivement certains
                  espaces à Tours pour cultiver des arbres fruitiers.
                </p>
              </div>
            </div>
          </div>

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

          <div className="contact-container">
            <div className="logo"></div>
            <div className="contact-sub-container">
              <p>
                Si vous êtes intéressé, veuillez nous contacter à cette adresse.
              </p>
              <p>jardinieres.masquees@divrotonmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Main;
