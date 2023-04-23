import React from 'react';
import {Accordion, Text} from "../../../../shared";
import cls from './Faq.module.scss'

const faqs = [
  {
    question: 'Сколько можно бронировать диссертаций?',
    answer: 'Бронировать не более 3-х оригиналов диссертаций на 3 рабочих дня.'
  },
  {
    question: 'Сколько можно копировать страниц диссертаций?',
    answer: 'Копировать не более 30 листов с одного оригинала диссертации.'
  },
  {
    question: 'Какой режим в Национальной библиотеки им. Осмонова ?',
    answer: 'Национальная библиотека работает без выходных и перерывов с 9.00 до 18.00 ч., каждая последняя пятница месяца – санитарный день.'
  },
  {
    question: 'С какого года представлены диссертации ?',
    answer: 'В собрании представлены авторские экземпляры диссертаций с 1995г. по настоящее время.'
  }
]

export const Faq = () => {
  return (
    <div className={'container'}>
      <div className={cls.wrapper}>
        <Text size={'size_l'} align={'center'} title={'Часто задаваемые вопросы'}/>
        <Accordion data={faqs} className={cls.accordion}/>
      </div>
    </div>
  );
};
