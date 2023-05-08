import {HStack, MEDIUM_SCREEN, useWindowDimensions} from "../../../shared";
import cls from "./PhotoGallery.module.scss";
import ImageViewer from "react-simple-image-viewer";
import React, {useCallback, useState} from "react";

// Здесь использую пакет ImageViewer

export const PhotoGallery = ({images}) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const {width} = useWindowDimensions()

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = useCallback(() => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  }, [])
  return (
    <>
      <HStack gap={'8'} justify={width > MEDIUM_SCREEN ? 'between' : 'center'} className={cls.imgWrapper}>
        {images.map((image, index) => (
          <img key={index} src={image} alt="img1" className={cls.img} onClick={() => openImageViewer(index)}/>
        ))}
      </HStack>
      {isViewerOpen && (
        <ImageViewer
          src={images}
          currentIndex={currentImage}
          disableScroll={false}
          closeOnClickOutside={true}
          onClose={closeImageViewer}
        />
      )}
    </>
  )
}
