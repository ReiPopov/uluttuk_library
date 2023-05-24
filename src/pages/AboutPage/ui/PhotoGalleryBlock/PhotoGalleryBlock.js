import React from 'react';
import {Text} from "../../../../shared";


import Img5 from '../../../../shared/assets/content/content_img5.jpg'
import Img6 from '../../../../shared/assets/content/content_img6.jpg'
import Img7 from '../../../../shared/assets/content/content_img7.jpg'
import Img8 from '../../../../shared/assets/content/content_img8.jpg'
import Img9 from '../../../../shared/assets/content/content_img9.jpg'
import Img10 from '../../../../shared/assets/content/content_img10.jpg'



import {PhotoGallery} from "../../../../entities/PhotoGallery";

const images = [
  Img5,
  Img6,
  Img7,
  Img8,
    Img9,
    Img10,




]

export const PhotoGalleryBlock = () => {
  return (
    <div className={'container'}>
      <Text size={'size_l'} align={'center'} title={'Фотогалерея'}/>
      <PhotoGallery images={images}/>
    </div>
  );
};
