import React from 'react';
import {Text, VStack} from "../../../../../shared";

import cls from './NewsItem.module.scss'
import PropTypes from "prop-types";
import {LinkButton} from "../../../../../shared/ui/LinkButton/LinkButton";
import {useTranslation} from "react-i18next";

export const NewsItem = ({item}) => {
  const {t} = useTranslation()
  return (
    <VStack className={cls.wrapper}>
      <img src={item.images[0]} alt={'news_image'} className={cls.img}/>
      <div className={cls.contentInfo}>
        <Text size={'size_l'} text={item.previewText}/>
        <LinkButton
          size={'size_m'}
          variant={'outline'}
          className={cls.btn}
          to={`news/${item.id}`}
        >
          {t('read_completely')}
        </LinkButton>
      </div>
    </VStack>
  );
};

NewsItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    images: PropTypes.arrayOf(PropTypes.string),
    textBlocks: PropTypes.arrayOf(PropTypes.string),
    previewText: PropTypes.string,
  })
}
