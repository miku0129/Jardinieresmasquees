import { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import { getPhotosForGallery } from "../../utils/data.utils";
import { useWindowSize } from "../../utils/useWindowSize";

export default function Gallery() {
  const [photos, setPhotos] = useState([]);
  const [width, _] = useWindowSize();

  useEffect(() => {
    const pulltrigger = async () => {
      const res = await getPhotosForGallery();
      setPhotos(res);
    };
    pulltrigger();
  }, []);

  return (
    <div className="bg-goldenrod absolute top-0 left-0 w-dvw">
      <div className="mt-32">
        <Box sx={{ width: "auto", overflowY: "scroll" }}>
          <ImageList
            variant="masonry"
            style={{ columnCount: width < 450 ? "2" : "3" }}
            gap={8}
          >
            {photos.map((photo) => {
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
            })}
            ;
          </ImageList>
        </Box>
      </div>
    </div>
  );
}
