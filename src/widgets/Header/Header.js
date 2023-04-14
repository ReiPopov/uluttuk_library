import React from 'react';
import Logo from '../../shared/assets/icons/main_logo.png'
import './Header.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLocationDot, faUser} from '@fortawesome/free-solid-svg-icons'
import {Button, HStack, Text, VStack} from "../../shared";

export const Header = () => {
  return (
    <header className={'header'}>
      <HStack className={'container'} justify={'between'}>
        <img src={Logo} alt="logo" className={'logo'}/>
        <HStack gap={'16'}>
          <FontAwesomeIcon size={'2x'} icon={faLocationDot} className={'icon'}/>
          <VStack>
            <Text size={'size_m'} text={'Кыргызстан, г. Бишкек,'} className={'text'}/>
            <Text size={'size_m'} text={'ул. Абдрахманова 208'} className={'text'}/>
          </VStack>
          <FontAwesomeIcon size={'2x'} icon={faUser} className={'icon'}/>
          <VStack>
            <Text size={'size_m'} text={'Тел.: +996 (312) 30-46-75'} className={'text'}/>
            <Text size={'size_m'} text={'Факс: +996 (312) 30-46-88'} className={'text'}/>
          </VStack>
        </HStack>
        <VStack>
          <Text size={'size_l'} text={'RU'} className={'text'}/>
          <Text size={'size_l'} text={'ENG'} className={'text'}/>
        </VStack>
        <Button size={"size_l"}>Войти</Button>
      </HStack>
    </header>
  );
};
