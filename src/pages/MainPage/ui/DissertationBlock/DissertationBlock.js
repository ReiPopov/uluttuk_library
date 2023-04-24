import React from 'react';

import cls from './DissertationBlock.module.scss'
import {HStack, Text, VStack} from "../../../../shared";
import BookIcon from '../../../../shared/assets/icons/book_icon.png'

const text1 = 'Диссертация - это научный труд, написанный студентом или аспирантом в рамках подготовки к защите ученой степени. Диссертации являются одним из важных критериев оценки уровня научной деятельности и образовательной подготовки человека.'
const text2 = 'Данный сайт диссертаций - это удобный ресурс для всех, кто заинтересован в изучении исследований в различных областях науки. Мы предоставляем пользователям доступ к широкой базе данных научных материалов, которые помогут в исследовании и написании диссертации.'
const text3 = ' В данной библиотеке диссертаций собраны не только полные учебные работы, но и их авторефераты. Авторефераты диссертаций представляют собой краткое изложение полного научного труда, которое составляется автором этой работы. Центр диссертаций насчитывает более 6 000 диссертаций и свыше 24 000 авторефератов диссертаций.'

const texts = [
  text1,
  text2,
  text3,
]

export const DissertationBlock = () => {
  return (
    <div className={'container'}>
      <div className={cls.dissertationBlock}>
        <Text size={'size_l'} align={'center'} title={'Диссертации и авторефераты '}/>
        <HStack className={cls.infoBlock}>
          <VStack gap={'32'}>
            {texts.map(text => (
              <Text size={'size_l'} text={text} className={cls.text}/>
            ))}
          </VStack>
          <img src={BookIcon} alt={'book'} className={cls.image}/>
        </HStack>
      </div>
    </div>
  );
};
