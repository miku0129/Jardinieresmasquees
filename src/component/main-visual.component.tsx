import { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import { getPhotosForMainVisual } from "../utils/data.utils";

const MainVisual = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const pulltrigger = async () => {
      const res = await getPhotosForMainVisual();
      setPhotos(res);
    };
    pulltrigger();
  }, []);

  return (
    <div className="px-5 md:px-0">
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
