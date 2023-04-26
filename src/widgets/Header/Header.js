import React from 'react';
import Logo from '../../shared/assets/icons/main_logo.png'
import cls from './Header.module.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars, faLocationDot, faUser} from '@fortawesome/free-solid-svg-icons'
import {AppLink, Button, HStack, SMALL_SCREEN, Text, useWindowDimensions, VStack} from "../../shared";
import PropTypes from "prop-types";

export const Header = (props) => {
  const {toggle} = props
  const {width} = useWindowDimensions();

  return (
    <header className={cls.header}>
      <HStack className={'container'} justify={'between'}>
        <AppLink to={'/'}>
          <img src={Logo} alt="logo" className={cls.logo}/>
        </AppLink>
        {width > SMALL_SCREEN && (
          <>
            <HStack gap={'16'}>
              <FontAwesomeIcon size={'2x'} icon={faLocationDot} className={cls.icon}/>
              <VStack>
                <Text color={'white'} size={'size_l'} text={'Кыргызстан, г. Бишкек,'}/>
                <Text color={'white'} size={'size_l'} text={'ул. Абдрахманова 208'}/>
              </VStack>
              <FontAwesomeIcon size={'2x'} icon={faUser} className={cls.icon}/>
              <VStack>
                <Text color={'white'} size={'size_l'} text={'Тел.: +996 (312) 30-46-75'}/>
                <Text color={'white'} size={'size_l'} text={'Факс: +996 (312) 30-46-88'}/>
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
            <Button onClick={toggle}>
              <FontAwesomeIcon icon={faBars} className={cls.menuIcon}/>
            </Button>
          )
        }
      </HStack>
    </header>
  );
};

Header.propTypes = {
  toggle: PropTypes.func
}
