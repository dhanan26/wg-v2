import React, { useState, useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";

export const PhotoTab = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [
    "https://picsum.photos/id/15/800/300",
    "https://picsum.photos/id/25/500/300",
    "https://picsum.photos/id/41/500/200",
    "https://picsum.photos/id/40/300/200",
    "https://picsum.photos/id/58/300/200",
    "https://picsum.photos/id/61/500/200",
    "https://picsum.photos/id/77/200/200",
    "https://picsum.photos/id/91/500/500",
    "https://picsum.photos/id/90/500/500",
    "https://picsum.photos/id/100/500/500",
    "https://picsum.photos/id/190/500/500",
  ];

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
      {images.slice(0, 5).map((src, index) => (
        <img
          src={src}
          onClick={() => openImageViewer(index)}
          key={index}
          style={{ margin: "5px" }}
          alt={`image ${index}`}
        />
      ))}

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
