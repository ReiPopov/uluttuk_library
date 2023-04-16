import React from 'react';
import cls from './PromoBlock.module.scss'
import {Text, VStack} from "../../../../shared";

const title = 'ЭЛЕКТРОННАЯ БИБЛИОТЕКА ДИССЕРТАЦИЙ И АВТОРЕФЕРАТОВ'
const text = 'Научная электронная библиотека диссертаций \n' +
  'и авторефератов - Это самый крупный каталог\n' +
  ' научных работ.'

export const PromoBlock = () => {
  return (
    <div className={cls.promo}>
      <VStack max justify={'center'} className={'container'}>
        <VStack gap={'8'} className={cls.content}>
          <Text color={'white'} size={'size_l'} headerCategory={'h1'} title={title}/>
          <Text color={'white'} size={'size_l'} text={text} className={cls.text}/>
        </VStack>
      </VStack>
    </div>
  );
};
