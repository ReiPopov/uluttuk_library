import React from 'react';
import cls from './AdvantagesBlock.module.scss'
import {classNames, HStack, Text} from "../../../../shared";
import WorldIcon from '../../../../shared/assets/icons/world_icon.png'
import BookWatchIcon from '../../../../shared/assets/icons/book_watch.png'
import BookSearchIcon from '../../../../shared/assets/icons/book_search.png'
import {AdvantagesItem} from "./AdvantagesItem";

const items = [
  {
    id: Math.floor(Math.random() * 200),
    img: WorldIcon,
    title: 'Большой выбор материала',
    text: 'Наш сайт отдела диссертаций представляет собой уникальный ресурс, который поможет вам быстро и легко найти необходимую информацию для подготовки к защите диссертации.'
  },
  {
    id: Math.floor(Math.random() * 200),
    img: BookWatchIcon,
    title: 'Удобство работы',
    text: 'Сайт предлагает высокое удобство работы. Наша команда разработчиков и дизайнеров постоянно работает над улучшением пользовательского интерфейса, чтобы обеспечить максимально удобную и простую навигацию по сайту.'
  },
  {
    id: Math.floor(Math.random() * 200),
    img: BookSearchIcon,
    title: 'Простота поиска',
    text: 'Одним из ключевых преимуществ нашего сайта отдела диссертаций является высокая простота поиска. Мы стремимся сделать процесс поиска необходимых диссертаций максимально простым и удобным для наших клиентов.'
  },
]

export const AdvantagesBlock = () => {
  return (
    <div className={cls.advantages}>
      <Text
        color={'white'}
        align={'center'}
        size={'size_l'}
        title={'Наши преимущества'}
        className={cls.title}
      />
      <HStack gap={'16'} align={'start'} className={classNames('container', {}, [cls.contentInfo])}>
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
