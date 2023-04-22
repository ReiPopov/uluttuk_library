import React, {useState} from 'react';
import cls from './MenuMobile.module.scss'
import {classNames, HStack, Input, Text, VStack} from "../../shared";
import PropTypes from "prop-types";
import {Link, useLocation} from "react-router-dom";
import {faLocationDot, faMagnifyingGlass, faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const linkButtons = [
  {
    to: '/',
    text: 'Главная',
  },
  {
    to: '/about',
    text: 'О библиотеке',
  },
  {
    to: '/catalog',
    text: 'Каталог',
  },
  {
    to: '/department',
    text: 'Отдел ДиА',
  },
  {
    to: '/contacts',
    text: 'Контакты',
  },
]

export const MenuMobile = (props) => {
  const {active, setActive} = props

  const {pathname} = useLocation()
  const [activeLinkBtn, setActiveLinkBtn] = useState(pathname)

  return (
    <div
      className={classNames(cls.sidebar, {[cls.active]: active}, [])}
      onClick={() => setActive(false)}
    >
      <div className={cls.blur}/>
      <VStack className={cls.menu_content} gap={'16'}>
        {linkButtons.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={classNames(cls.link, {[cls.linkActive]: activeLinkBtn === link.to}, [])}
            onClick={() => {
              setActive(false)
              setActiveLinkBtn(link.to)
            }}
          >
            <Text size={"size_l"} text={link.text}/>
          </Link>
        ))}
        <Input placeholder={'Поиск по сайту...'} icon={faMagnifyingGlass}/>
        <HStack gap={'8'}>
          <FontAwesomeIcon size={'xl'} icon={faLocationDot} className={cls.icon}/>
          <VStack gap={'4'}>
            <Text color={'white'} size={'size_l'} text={'Кыргызстан, г. Бишкек,'}/>
            <Text color={'white'} size={'size_l'} text={'ул. Абдрахманова 208'}/>
          </VStack>
        </HStack>
        <HStack gap={'8'}>
          <FontAwesomeIcon size={'xl'} icon={faUser} className={cls.icon}/>
          <VStack gap={'4'}>
            <Text color={'white'} size={'size_l'} text={'Тел.: +996 (312) 30-46-75'}/>
            <Text color={'white'} size={'size_l'} text={'Факс: +996 (312) 30-46-88'}/>
          </VStack>
        </HStack>
      </VStack>
    </div>
  );
};

MenuMobile.propTypes = {
  active: PropTypes.bool,
  setActive: PropTypes.func
}
