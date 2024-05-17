import { useState, useEffect } from "react";
import { createFlickr } from "flickr-sdk";
import ImageGallery from "react-image-gallery";

const Gallery = () => {
  const [photos, setPhotos] = useState([]);

  const { flickr } = createFlickr(process.env.REACT_APP_FLICKR_API_KEY);

  useEffect(() => {
    const serverId = process.env.REACT_APP_FLICKR_SERVER_ID;

    const getPhotos = async () => {
      const res = await flickr("flickr.photosets.getPhotos", {
        photoset_id: process.env.REACT_APP_FLICKR_PHOTOSET_ID,
        user_id: process.env.REACT_APP_FLICKR_USER_ID,
      });
      const photos = res.photoset.photo.map((item) => {
        const photoUrl = `https://live.staticflickr.com/${serverId}/${item.id}_${item.secret}.jpg`;
        const obj = {
          original: photoUrl,
          thumbnail: photoUrl,
          originalHeight: 500,
          thumbnailHeight: 70,
        };
        return obj;
      });

      setPhotos(photos);
    };
    getPhotos();
  }, []);
  console.log("photos", photos);

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

export default Gallery;
