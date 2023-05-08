import React from 'react';
import cls from './LastNewsBlock.module.scss'
import {HStack, news, Text} from "../../../../shared";
import {NewsItem} from "./NewsItem/NewsItem";
import {useTranslation} from "react-i18next";


export const LastNewsBlock = () => {
  const {t} = useTranslation()
  return (
    <div className={cls.lastNewsBlock}>
      <div className={'container'}>
        <Text
          size={'size_l'}
          align={'center'}
          color={'white'}
          title={t('last_news')}
        />
        <HStack gap={'32'} className={cls.contentInfo}>
          {news.map((item) => (
            <NewsItem item={item} key={item.id}/>
          ))}
        </HStack>
      </div>
    </div>
  );
};
