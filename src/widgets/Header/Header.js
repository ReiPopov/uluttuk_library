import React from 'react';
import Logo from '../../shared/assets/icons/main_logo.png'
import cls from './Header.module.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLocationDot, faUser} from '@fortawesome/free-solid-svg-icons'
import {Button, HStack, Text, VStack} from "../../shared";
import {Link} from "react-router-dom";

export const Header = () => {
  return (
    <header className={cls.header}>
      <HStack className={'container'} justify={'between'}>
        <Link to={'/'}>
          <img src={Logo} alt="logo" className={cls.logo}/>
        </Link>
        <HStack gap={'16'}>
          <FontAwesomeIcon size={'2x'} icon={faLocationDot} className={cls.icon}/>
          <VStack>
            <Text size={'size_m'} text={'Кыргызстан, г. Бишкек,'} className={cls.text}/>
            <Text size={'size_m'} text={'ул. Абдрахманова 208'} className={cls.text}/>
          </VStack>
          <FontAwesomeIcon size={'2x'} icon={faUser} className={cls.icon}/>
          <VStack>
            <Text size={'size_m'} text={'Тел.: +996 (312) 30-46-75'} className={cls.text}/>
            <Text size={'size_m'} text={'Факс: +996 (312) 30-46-88'} className={cls.text}/>
          </VStack>
        </HStack>
        <VStack>
          <Button size={"size_l"}>RU</Button>
          <Button size={"size_l"}>ENG</Button>
        </VStack>
        <Button size={"size_l"}>Войти</Button>
      </HStack>
    </header>
  );
};
