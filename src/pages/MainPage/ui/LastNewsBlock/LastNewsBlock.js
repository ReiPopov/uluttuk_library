import React from 'react';
import cls from './LastNewsBlock.module.scss'
import {HStack, Text} from "../../../../shared";
import {NewsItem} from "./NewsItem/NewsItem";

import ContentImg1 from "../../../../shared/assets/content/content_img1.jpg";
import ContentImg2 from "../../../../shared/assets/content/content_img2.jpg";
import ContentImg3 from "../../../../shared/assets/content/content_img3.jpg";

const items = [
  {
    id: Math.floor(Math.random() * 200),
    text: 'Lorem ipsum — популярный вариант бессмысленного текста, имитирующего латынь, используемого в HTML',
    img: ContentImg1
  },
  {
    id: Math.floor(Math.random() * 200),
    text: 'Lorem ipsum — популярный вариант бессмысленного текста, имитирующего латынь, используемого в HTML',
    img: ContentImg2
  },
  {
    id: Math.floor(Math.random() * 200),
    text: 'Lorem ipsum — популярный вариант бессмысленного текста, имитирующего латынь, используемого в HTML',
    img: ContentImg3
  },
]


export const LastNewsBlock = () => {
  return (
    <div className={cls.lastNewsBlock}>
      <div className={'container'}>
        <Text
          size={'size_l'}
          align={'center'}
          color={'white'}
          title={'Последние новости'}
        />
        <HStack gap={'32'} className={cls.contentInfo}>
          {items.map((item)=>(
            <NewsItem text={item.text} img={item.img} key={item.id}/>
          ))}
        </HStack>
      </div>
    </div>
  );
};
