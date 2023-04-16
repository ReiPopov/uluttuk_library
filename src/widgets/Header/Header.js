import React from 'react';
import Logo from '../../shared/assets/icons/main_logo.png'
import cls from './Header.module.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars, faLocationDot, faUser} from '@fortawesome/free-solid-svg-icons'
import {Button, HStack, SMALL_SCREEN, Text, useWindowDimensions, VStack} from "../../shared";
import {Link} from "react-router-dom";

export const Header = () => {
  const {width} = useWindowDimensions();

  return (
    <header className={cls.header}>
      <HStack className={'container'} justify={'between'}>
        <Link to={'/'}>
          <img src={Logo} alt="logo" className={cls.logo}/>
        </Link>
        {width > SMALL_SCREEN && (
          <>
            <HStack gap={'16'}>
              <FontAwesomeIcon size={'2x'} icon={faLocationDot} className={cls.icon}/>
              <VStack>
                <Text color={'white'} size={'size_l'} text={'Кыргызстан, г. Бишкек,'} className={cls.text}/>
                <Text color={'white'} size={'size_l'} text={'ул. Абдрахманова 208'} className={cls.text}/>
              </VStack>
              <FontAwesomeIcon size={'2x'} icon={faUser} className={cls.icon}/>
              <VStack>
                <Text color={'white'} size={'size_l'} text={'Тел.: +996 (312) 30-46-75'} className={cls.text}/>
                <Text color={'white'} size={'size_l'} text={'Факс: +996 (312) 30-46-88'} className={cls.text}/>
              </VStack>
            </HStack>
            <VStack>
              <Button size={"size_m"}>RU</Button>
              <Button size={"size_m"}>ENG</Button>
            </VStack>
            <Button size={"size_m"}>Войти</Button>
          </>)
        }
        {
          width < SMALL_SCREEN && (
            <Button>
              <FontAwesomeIcon icon={faBars} className={cls.menuIcon}/>
            </Button>
          )
        }
      </HStack>
    </header>
  );
};
