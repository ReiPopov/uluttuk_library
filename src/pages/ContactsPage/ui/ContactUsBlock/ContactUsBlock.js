import cls from './ContactUsBlock.module.scss'
import {Text, useWindowDimensions, VStack} from "../../../../shared";
import {faEnvelope, faLocationDot, faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import {Flex} from "../../../../shared/ui/Stack/Flex/Flex";
import {ContactUsForm} from "./ContactUsForm/ContactUsForm";

export const ContactUsBlock = () => {
  const {isSmallScreen, isExtraSmallScreen} = useWindowDimensions()
  return (
    <div className={'container'}>
      <div className={cls.wrapper}>
        <Text size={'size_l'} align={'center'} title={'Свяжитесь с нами'}/>
        <Flex direction={isExtraSmallScreen ? 'column' : 'row'} justify={'center'} gap={'32'}
              className={cls.contactItems}>
          <VStack align={'center'} className={cls.contactItem}>
            <FontAwesomeIcon size={isSmallScreen ? '2x' : '3x'} icon={faLocationDot} className={cls.icon}/>
            <Text size={'size_l'} text={'Адрес:'}/>
            <Text size={'size_l'} text={'ул. Абдрахманова 208'}/>
          </VStack>
          <VStack align={'center'} className={cls.contactItem}>
            <FontAwesomeIcon size={isSmallScreen ? '2x' : '3x'} icon={faUser} className={cls.icon}/>
            <Text size={'size_l'} text={'Телефон:'}/>
            <Text size={'size_l'} text={'+996 (312) 30-46-75'} className={cls.underlined}/>
          </VStack>
          <VStack align={'center'} className={cls.contactItem}>
            <FontAwesomeIcon size={isSmallScreen ? '2x' : '3x'} icon={faEnvelope} className={cls.icon}/>
            <Text size={'size_l'} text={'Email:'}/>
            <Text size={'size_l'} text={'library@nlkr.gov.kg'} className={cls.underlined}/>
          </VStack>
        </Flex>
      </div>
      <ContactUsForm/>
    </div>
  )
}
