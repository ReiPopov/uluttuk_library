import cls from './ContactUsBlock.module.scss'
import {AppLink, Text, useWindowDimensions, VStack} from "../../../../shared";
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
            <AppLink scrollToTop={false} to={'tel:+996(312)304675'}>
              <Text size={'size_l'} text={'+996 (312) 30-46-75'} className={cls.link}/>
            </AppLink>
          </VStack>
          <VStack align={'center'} className={cls.contactItem}>
            <FontAwesomeIcon size={isSmallScreen ? '2x' : '3x'} icon={faEnvelope} className={cls.icon}/>
            <Text size={'size_l'} text={'Email:'}/>
            <AppLink scrollToTop={false} to={'mailto:library@nlkr.gov.kg'}>
              <Text size={'size_l'} text={'library@nlkr.gov.kg'} className={cls.link}/>
            </AppLink>
          </VStack>
        </Flex>
      </div>
      <ContactUsForm/>
    </div>
  )
}
