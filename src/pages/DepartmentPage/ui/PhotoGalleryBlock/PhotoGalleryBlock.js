import React, {useCallback, useState} from 'react';
import {HStack, MEDIUM_SCREEN, Text, useWindowDimensions} from "../../../../shared";
import cls from './PhotoGalleryBlock.module.scss'

import Img1 from '../../../../shared/assets/background/main_page_background.jpg'
import Img2 from '../../../../shared/assets/background/about_page_background.jpg'
import ImageViewer from 'react-simple-image-viewer';

const images = [
  Img1,
  Img2,
  Img1,
  Img2,
  Img1,
  Img2,
]

// Здесь использую пакет ImageViewer

export const PhotoGalleryBlock = () => {
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
    <div className={'container'}>
      <Text size={'size_l'} align={'center'} title={'Фотогалерея'}/>
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
    </div>
  );
};
