import React from 'react';
import Logo from '../../shared/assets/icons/main_logo.png'
import cls from './Header.module.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars, faLocationDot, faUser} from '@fortawesome/free-solid-svg-icons'
import {AppLink, Button, HStack, SMALL_SCREEN, Text, useWindowDimensions, VStack} from "../../shared";
import PropTypes from "prop-types";
import {LangSwitcher} from "../LangSwitcher/LangSwitcher";
import {useTranslation} from "react-i18next";

export const Header = (props) => {
  const {t} = useTranslation()
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
                <Text color={'white'} size={'size_l'} text={t('country_city')}/>
                <Text color={'white'} size={'size_l'} text={t('street')}/>
              </VStack>
              <FontAwesomeIcon size={'2x'} icon={faUser} className={cls.icon}/>
              <VStack>
                <AppLink to={'tel:+996(312)304675'} className={cls.tel}>
                  <Text color={'white'} size={"size_l"} text={`${t('phone_short')} : +996 (312) 30-46-75`}/>
                </AppLink>
                <AppLink to={'tel:+996(312)304688'} className={cls.tel}>
                  <Text color={'white'} size={"size_l"} text={`${t('fax')} : +996 (312) 30-46-88`}/>
                </AppLink>
              </VStack>
            </HStack>
            <LangSwitcher/>
            <AppLink to={'/auth'}><Text color={'white'} size={'size_l'} text={t('login')}/></AppLink>
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
