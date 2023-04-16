import React from 'react';
import {Accordion, Text} from "../../../../shared";
import cls from './Faq.module.scss'

const faqs = [
  {
    question: 'Question 1',
    answer: 'Answer 1 Answer 1 Answer 1'
  },
  {
    question: 'Question 2',
    answer: 'Answer 2 Answer 2 Answer 2'
  },
  {
    question: 'Question 3',
    answer: 'Answer 3 Answer 3 Answer 3'
  },
  {
    question: 'Question 4',
    answer: 'Answer 4 Answer 4 Answer 4'
  },
  {
    question: 'Question 5',
    answer: 'Answer 5 Answer 5 Answer 5'
  },
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
