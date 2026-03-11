import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import { getPhotosForGallery } from "../utils/data.utils";
import { useWindowSize } from "../utils/useWindowSize";

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
    <div className="mt-content-top w-dvw px-1">
      <Box sx={{ width: "auto", overflowY: "scroll" }}>
        <ImageList
          variant="masonry"
          style={{ columnCount: width < 450 ? "2" : "3" }}
          gap={8}
        >
          {photos.map((photo: string, idx: number) => {
            return (
              <Link to={`/photoviewer/${idx}`} key={photo}>
                <ImageListItem>
                  <img
                    srcSet={`${photo}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    src={`${photo}?w=248&fit=crop&auto=format`}
                    alt={photo}
                    loading="lazy"
                    className="rounded-md md:rounded-lg"
                  />
                </ImageListItem>
              </Link>
            );
          })}
        </ImageList>
      </Box>
    </div>
  );
}
