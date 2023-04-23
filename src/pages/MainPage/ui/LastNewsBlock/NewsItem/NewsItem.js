import React from 'react';
import {Button, Text, VStack} from "../../../../../shared";

import cls from './NewsItem.module.scss'
import PropTypes from "prop-types";

export const NewsItem = (props) => {
  const {text, img} = props
  return (
    <VStack className={cls.wrapper}>
      <img src={img} alt={img} className={cls.img}/>
      <div className={cls.contentInfo}>
        <Text size={'size_l'} text={text}/>
        <Button
          size={'size_m'}
          variant={'outline'}
          className={cls.btn}
        >
          Читать полностью
        </Button>
      </div>
    </VStack>
  );
};

NewsItem.propTypes = {
  text: PropTypes.string,
  img: PropTypes.string
}
