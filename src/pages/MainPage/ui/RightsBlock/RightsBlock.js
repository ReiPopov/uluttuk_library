import React from 'react';

import cls from './RightsBlock.module.scss'
import {classNames, HStack, Text, VStack} from "../../../../shared";
import BookIcon from '../../../../shared/assets/icons/book_icon.png'

const text1 = 'Заказывать неограниченное количество диссертаций и авторефератов.'
const text2 = 'Подключать в зале собственный ноутбук.'
const text3 = 'Копировать не более 30 листов с одного оригинала диссертаций  + ( с наличием гарантийного письма с ВУЗа или места работы).'
const text4 = 'Копировать авторефераты полностью.'
const text5 = 'Библиотекари  ОДиА  окажут консультативную помощь при поиске информации.'

export const RightsBlock = () => {
  return (
    <div className={'container'}>
      <div className={classNames('container', {}, [cls.rightsBlock])}>
        <Text size={'size_l'} align={'center'} title={'Пользователь библиотеки имеет право '}/>
        <HStack className={cls.infoBlock}>
          <VStack gap={'32'}>
            <Text text={text1} className={cls.text}/>
            <Text text={text2} className={cls.text}/>
            <Text text={text3} className={cls.text}/>
            <Text text={text4} className={cls.text}/>
            <Text text={text5} className={cls.text}/>
          </VStack>
          <img src={BookIcon} alt={'book'} className={cls.image}/>
        </HStack>
      </div>
    </div>
  );
};
