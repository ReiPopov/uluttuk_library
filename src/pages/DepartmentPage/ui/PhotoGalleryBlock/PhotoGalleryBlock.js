import React from 'react';
import {Text} from "../../../../shared";

import Img1 from '../../../../shared/assets/background/main_page_background.jpg'
import Img2 from '../../../../shared/assets/background/about_page_background.jpg'
import {PhotoGallery} from "../../../../entities/PhotoGallery";

const images = [
  Img1,
  Img2,
  Img1,
  Img2,
  Img1,
  Img2,
]

export const PhotoGalleryBlock = () => {
  return (
    <div className={'container'}>
      <Text size={'size_l'} align={'center'} title={'Фотогалерея'}/>
      <PhotoGallery images={images}/>
    </div>
  );
};
