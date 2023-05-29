import React, { useState, useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";

export const PhotoTab = ({images}) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  

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
          style={{ margin: "2.5px 5px 2.5px 5px", cursor: "pointer" }}
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
