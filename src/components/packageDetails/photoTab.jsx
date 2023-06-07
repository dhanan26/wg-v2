import { Box, Button, Card } from "@mui/material";
import React, { useState, useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";

export const PhotoTab = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const LIMIT = 6;
  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <>
      <Box>
        {images.slice(0, LIMIT).map((src, index) => (
          <img
            src={src}
            onClick={() => openImageViewer(index)}
            key={index}
            style={{
              margin: "2.5px 5px 2.5px 5px",
              cursor: "pointer",
              height: "200px",
              maxWidth: "350px",
            }}
            alt={`image ${index}`}
          />
        ))}

        {images?.length > LIMIT && (
          <Button
            style={{
              color: "red",
              cursor: "pointer",
              paddingLeft: "10px",
              paddingBottom: "15px",
            }}
            onClick={() => openImageViewer(LIMIT)}
          >
            +{images?.length - LIMIT} more
          </Button>
        )}
      </Box>

      {isViewerOpen && (
        <ImageViewer
          src={images}
          currentIndex={currentImage}
          disableScroll={false}
          closeOnClickOutside={true}
          onClose={closeImageViewer}
          backgroundStyle={{ backgroundColor: "rgba(0, 0, 0, 0.9)" }}
        />
      )}
    </>
  );
};
