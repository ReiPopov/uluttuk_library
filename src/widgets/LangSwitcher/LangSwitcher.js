import {Button, classNames, VStack} from "../../shared";
import React from "react";
import {useTranslation} from "react-i18next";
import cls from './LangSwitcher.module.scss'


export const LangSwitcher = () => {
  const {i18n: {changeLanguage, language}} = useTranslation()

  const changeLanguageToEn = () => {
    changeLanguage('en')
  }

  const changeLanguageToRu = () => {
    changeLanguage('ru')
  }

  return (
    <VStack>
      <Button
        onClick={changeLanguageToRu}
        size={"size_m"}
        className={classNames('', {[cls.active]: language === 'ru'})}
      >
        RU
      </Button>
      <Button
        onClick={changeLanguageToEn}
        size={"size_m"}
        className={classNames('', {[cls.active]: language === 'en'})}
      >
        ENG
      </Button>
    </VStack>
  )
}
