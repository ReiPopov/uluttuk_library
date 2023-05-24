import React from 'react';
import {Text} from "../../../../shared";


import Img11 from '../../../../shared/assets/content/content_img11.jpg'
import  Img12 from '../../../../shared/assets/content/content_img12.jpg'
import Img13 from '../../../../shared/assets/content/content_img13.jpg'
import  Img14 from '../../../../shared/assets/content/content_img14.jpg'
import Img15 from '../../../../shared/assets/content/content_img15.jpg'
import  Img16 from '../../../../shared/assets/content/content_img16.jpg'


import {PhotoGallery} from "../../../../entities/PhotoGallery";

const images = [
  Img11,
  Img12,
  Img13,
  Img14,
  Img15,
  Img16,
]

export const PhotoGalleryBlock = () => {
  return (
    <div className={'container'}>
      <Text size={'size_l'} align={'center'} title={'Фотогалерея'}/>
      <PhotoGallery images={images}/>
    </div>
  );
};
