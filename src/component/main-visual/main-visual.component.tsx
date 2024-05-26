import { useState, useEffect } from "react";
import ImageGallery from "react-image-gallery";
import { getPhotos } from "../../utils/data.utils";

const MainVisual = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const pulltrigger = async () => {
      const res = await getPhotos();
      setPhotos(res);
    };
    pulltrigger();
  }, []);

  return (
    <div className="image-gallery-container">
      <ImageGallery
        items={photos}
        showNav={true}
        autoPlay={false}
        showFullscreenButton={false}
        useBrowserFullscreen={false}
        showPlayButton={false}
        showBullets={true}
      />
    </div>
  );
};

export default MainVisual;
