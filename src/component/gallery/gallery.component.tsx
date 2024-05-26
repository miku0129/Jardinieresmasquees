import { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import { useWindowSize } from "../../utils/useWindowSize";
import { getPhotosForGallery } from "../../utils/data.utils";

import "./gallery.component.scss";

const Gallery = () => {
  const [photos, setPhotos] = useState([]);
  const [width, height] = useWindowSize();
  console.log("to avoid eslint issue: ", height);

  useEffect(() => {
    const pulltrigger = async () => {
      const res = await getPhotosForGallery();
      setPhotos(res);
    };
    pulltrigger();
  }, []);

  const imageItem = () => {
    return photos.map((photo) => {
      return (
        <ImageListItem key={photo}>
          <img
            srcSet={`${photo}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${photo}?w=248&fit=crop&auto=format`}
            alt={photo}
            loading="lazy"
          />
        </ImageListItem>
      );
    });
  };

  const handleStyleOfImageList = () => {
    if (width < 450) {
      return (
        <>
          <ImageList variant="masonry" style={{ columnCount: "2" }} gap={8}>
            {imageItem()}
          </ImageList>
        </>
      );
    } else {
      return (
        <>
          <ImageList variant="masonry" style={{ columnCount: "3" }} gap={8}>
            {imageItem()}
          </ImageList>
        </>
      );
    }
  };

  return (
    <div className="gallery">
      <div className="gallery-container">
        <Box sx={{ width: "auto", overflowY: "scroll" }}>
          {handleStyleOfImageList()}
        </Box>
      </div>
    </div>
  );
};

export default Gallery;
