import React from 'react';

import cls from './RightsBlock.module.scss'
import {classNames, HStack, Text, VStack} from "../../../../shared";
import StudentIcon from '../../../../shared/assets/icons/student_icon.png'

const text1 = 'Отдел диссертаций является специальным отделом в библиотеке, который занимается сбором, хранением и предоставлением доступа к диссертациям, защищенным в университетах и научных центрах. Вот перечень прав, которыми обладают пользователи в отделе диссертаций.'
const text2 = 'Просмотр диссертаций. Пользователи имеют право на ознакомление с диссертациями в специальном зале отдела диссертаций. Здесь можно прочитать диссертации, которые находятся в свободном доступе внутри отдела.'
const text3 = 'Отдел диссертаций предоставляет доступ к бесплатному интернету и подключение ноутбуков.'
const text4 = 'Копировать не более 30 листов с одного оригинала диссертаций + ( с наличием гарантийного письма с ВУЗа или места работы).'
const text5 = 'Получение консультаций. В отделе диссертаций работают специалисты, которые могут помочь пользователям с поиском и выбором нужных диссертаций, а также с осуществлением других запросов.'

const texts = [
  text1,
  text2,
  text3,
  text4,
  text5,
]

export const RightsBlock = () => {
  return (
    <div className={'container'}>
      <div className={classNames('container', {}, [cls.rightsBlock])}>
        <Text size={'size_l'} align={'center'} title={'Пользователь библиотеки имеет право '}/>
        <HStack className={cls.infoBlock}>
          <VStack gap={'32'}>
            {texts.map((text, index) => (
              <Text key={index} size={'size_l'} text={text} className={cls.text}/>
            ))}
          </VStack>
          <img src={StudentIcon} alt={'book'} className={cls.image}/>
        </HStack>
      </div>
    </div>
  );
};
