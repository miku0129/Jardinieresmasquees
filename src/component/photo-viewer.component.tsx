import { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import { useParams } from "react-router";
import { getPhotosForGalleryviewer } from "../utils/data.utils";

export default function PhotoViewer() {
  const [photos, setPhotos] = useState([]);

  const params = useParams();
  const photoIndexString = params.photoIndex;
  const photoIndex = Number(photoIndexString);

  useEffect(() => {
    const pulltrigger = async () => {
      const res = await getPhotosForGalleryviewer();
      setPhotos(res);
    };
    pulltrigger();
  }, []);

  return (
    <div className="mt-32 overflow-auto">
      <ImageGallery
        items={photos}
        showNav={true}
        autoPlay={false}
        showFullscreenButton={false}
        useBrowserFullscreen={false}
        showPlayButton={false}
        showBullets={true}
        startIndex={photoIndex}
      />
    </div>
  );
}
