import React from 'react';
import cls from './MenuMobile.module.scss'
import {AppLink, classNames, HStack, Text, VStack} from "../../shared";
import PropTypes from "prop-types";
import {faLocationDot, faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {CatalogSearchInput} from "../../features";
import {useTranslation} from "react-i18next";
import {LangSwitcher} from "../LangSwitcher/LangSwitcher";

const linkButtons = [
  {
    to: '/',
    text: 'main',
  },
  {
    to: '/about',
    text: 'about',
  },
  {
    to: '/catalog',
    text: 'catalog',
  },
  {
    to: '/department',
    text: 'department',
  },
  {
    to: '/contacts',
    text: 'contacts',
  },
]

export const MenuMobile = (props) => {
  const {active, setActive, pathname} = props
  const {t} = useTranslation()


  return (
    <div
      className={classNames(cls.sidebar, {[cls.active]: active}, [])}
      onClick={() => setActive(false)}
    >
      <div className={cls.blur}/>
      <VStack className={cls.menu_content} gap={'16'} onClick={(e) => e.stopPropagation()}>
        {linkButtons.map((link) => (
          <AppLink
            key={link.to}
            to={link.to}
            className={classNames(cls.link, {[cls.linkActive]: pathname === link.to}, [])}
            onClick={() => {
              window.scrollTo(0, 0)
              setActive(false)
            }}
          >
            <Text size={"size_l"} text={t(link.text)}/>
          </AppLink>
        ))}
        <CatalogSearchInput onSubmit={() => setActive(false)}/>
        <AppLink to={'/auth'}>{t('login')}</AppLink>
        <HStack gap={'8'}>
          <FontAwesomeIcon size={'xl'} icon={faLocationDot} className={cls.icon}/>
          <VStack gap={'4'}>
            <Text color={'white'} size={'size_l'} text={t('country_city')}/>
            <Text color={'white'} size={'size_l'} text={t('street')}/>
          </VStack>
        </HStack>
        <HStack gap={'8'}>
          <FontAwesomeIcon size={'xl'} icon={faUser} className={cls.icon}/>
          <VStack gap={'4'}>
            <AppLink scrollToTop={false} to={'tel:+996(312)304675'} className={cls.tel}>
              <Text color={'white'} size={'size_l'} text={`${t('phone_short')}: +996 (312) 30-46-75`}/>
            </AppLink>
            <AppLink scrollToTop={false} to={'tel:+996(312)304688'} className={cls.tel}>
              <Text color={'white'} size={'size_l'} text={`${t('fax')}: +996 (312) 30-46-88`}/>
            </AppLink>
          </VStack>
        </HStack>
        <LangSwitcher/>
      </VStack>
    </div>
  );
};

MenuMobile.propTypes = {
  active: PropTypes.bool,
  setActive: PropTypes.func,
  pathname: PropTypes.string
}
