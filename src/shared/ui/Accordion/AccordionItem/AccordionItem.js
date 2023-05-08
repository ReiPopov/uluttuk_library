import React from 'react';
import cls from './AccordionItem.module.scss'
import {classNames} from "../../../lib/classNames/classNames";
import {Text} from "../../Text/Text";
import PropTypes from "prop-types";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {useTranslation} from "react-i18next";

export const AccordionItem = (props) => {
  const {answer, question, active, onToggle} = props
  const {t} = useTranslation()
  return (
    <div className={cls.accordion_item}>
      <div
        onClick={onToggle}
        className={classNames(cls.question, {[cls.active]: active}, [])}
      >
        <Text color={active ? 'black' : 'white'} headerCategory={'h2'} title={t(question)}/>
        <FontAwesomeIcon icon={active ? faChevronDown : faChevronRight} color={active ? 'black' : 'white'}/>
      </div>
      <div className={classNames('', {[cls.answer_open]: active}, [cls.answer_wrapper])}>
        <Text color={'white'} size={'size_l'} className={cls.answer} text={t(answer)}/>
      </div>
    </div>
  );
};

AccordionItem.propTypes = {
  answer: PropTypes.string,
  question: PropTypes.string,
  active: PropTypes.bool,
  onToggle: PropTypes.func
}
