import React from 'react';

import cls from './DissertationBlock.module.scss'
import {HStack, Text, VStack} from "../../../../shared";
import BookIcon from '../../../../shared/assets/icons/book_icon.png'

const text1 = 'Диссертация - это квалификационная работа на присуждении учёной степени. Как известно, сейчас степень магистра тоже является учёной, однако одновременно с этим приравнивается к классическому высшему образованию.'
const text2 = 'В данной библиотеке диссертаций собраны не только полные учебные работы, но и их авторефераты.'
const text3 = 'Авторефераты диссертаций представляют собой краткое изложение полного научного труда, которое составляется автором этой работы.'
const text4 = 'Центр диссертаций насчитывает более 6 000 диссертаций и свыше 24 000 авторефератов диссертаций.'

export const DissertationBlock = () => {
  return (
    <div className={'container'}>
      <div className={cls.dissertationBlock}>
        <Text size={'size_l'} align={'center'} title={'Диссертации и авторефераты '}/>
        <HStack className={cls.infoBlock}>
          <VStack gap={'32'}>
            <Text text={text1} className={cls.text}/>
            <Text text={text2} className={cls.text}/>
            <Text text={text3} className={cls.text}/>
            <Text text={text4} className={cls.text}/>
          </VStack>
          <img src={BookIcon} alt={'book'} className={cls.image}/>
        </HStack>
      </div>
    </div>
  );
};
