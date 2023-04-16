import React from 'react';
import cls from './Advantages.module.scss'
import {classNames, HStack, Text} from "../../../../shared";
import WorldIcon from '../../../../shared/assets/icons/world_icon.png'
import {AdvantagesItem} from "./AdvantagesItem";

const items = [
  {
    id: Math.floor(Math.random() * 200),
    img: WorldIcon,
    title: 'Большой выбор материала',
    text: 'Lorem ipsum — популярный вариант бессмысленного текста, имитирующего латынь, используемого в HTML-шаблонах для заполнения страниц'
  },
  {
    id: Math.floor(Math.random() * 200),
    img: WorldIcon,
    title: 'Удобство работы',
    text: 'Lorem ipsum — популярный вариант бессмысленного текста, имитирующего латынь, используемого в HTML-шаблонах для заполнения страниц'
  },
  {
    id: Math.floor(Math.random() * 200),
    img: WorldIcon,
    title: 'Простота поиска',
    text: 'Lorem ipsum — популярный вариант бессмысленного текста, имитирующего латынь, используемого в HTML-шаблонах для заполнения страниц'
  },
]

export const Advantages = () => {
  return (
    <div className={cls.advantages}>
      <Text
        color={'white'}
        align={'center'}
        size={'size_l'}
        title={'Наши преимущества'}
        className={cls.title}
      />
      <HStack gap={'8'} className={classNames('container', {}, [cls.contentInfo])}>
        {items.map((item) => (
          <AdvantagesItem
            key={item.id}
            img={item.img}
            title={item.title}
            text={item.text}
          />
        ))}
      </HStack>
    </div>
  );
};
