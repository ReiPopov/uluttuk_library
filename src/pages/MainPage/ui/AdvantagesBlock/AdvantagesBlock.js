import React from 'react';
import cls from './AdvantagesBlock.module.scss'
import {classNames, HStack, Text} from "../../../../shared";
import WorldIcon from '../../../../shared/assets/icons/world_icon.png'
import BookWatchIcon from '../../../../shared/assets/icons/book_watch.png'
import BookSearchIcon from '../../../../shared/assets/icons/book_search.png'
import {AdvantagesItem} from "./AdvantagesItem";
import {useTranslation} from "react-i18next";

const items = [
  {
    id: Math.floor(Math.random() * 200),
    img: WorldIcon,
    title: 'main_page_advantages_item_title1',
    text: 'main_page_advantages_item_text1'
  },
  {
    id: Math.floor(Math.random() * 200),
    img: BookWatchIcon,
    title: 'main_page_advantages_item_title2',
    text: 'main_page_advantages_item_text2'
  },
  {
    id: Math.floor(Math.random() * 200),
    img: BookSearchIcon,
    title: 'main_page_advantages_item_title3',
    text: 'main_page_advantages_item_text3'
  },
]

export const AdvantagesBlock = () => {
  const {t} = useTranslation()
  return (
    <div className={cls.advantages}>
      <Text
        color={'white'}
        align={'center'}
        size={'size_l'}
        title={t('main_page_advantages_title')}
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
