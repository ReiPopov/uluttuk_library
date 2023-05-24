import React from 'react';
import {Accordion, Text} from "../../../../shared";
import cls from './Faq.module.scss'
import {useTranslation} from "react-i18next";

const faqs = [
  {
    question: 'main_page_faq_question1',
    answer: 'main_page_faq_answer1'
  },
  {
    question: 'main_page_faq_question2',
    answer: 'main_page_faq_answer2'
  },
  {
    question: 'main_page_faq_question3',
    answer: 'main_page_faq_answer3'
  },
  {
    question: 'main_page_faq_question4',
    answer: 'main_page_faq_answer4'
  }
]

export const Faq = () => {
  const {t} = useTranslation()
  return (
    <div className={'container'}>
      <div className={cls.wrapper}>
        <Text size={'size_l'} align={'center'} title={t('main_page_faq_title')}/>
        <Accordion data={faqs} className={cls.accordion}/>
      </div>
    </div>
  );
};
