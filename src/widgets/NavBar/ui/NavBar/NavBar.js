import React, {useState} from 'react';
import cls from './NavBar.module.scss'
import {HStack, Input} from "../../../../shared";
import {
  faBookOpen,
  faBuildingColumns,
  faEnvelope,
  faGraduationCap,
  faHouse,
  faMagnifyingGlass
} from "@fortawesome/free-solid-svg-icons";
import {NavBarLinkButton} from "../NavBarButton/NavBarLinkButton";
import {useLocation} from "react-router-dom";

const linkButtons = [
  {
    to: '/',
    text: 'Главная',
    icon: faHouse
  },
  {
    to: '/about',
    text: 'О библиотеке',
    icon: faBuildingColumns
  },
  {
    to: '/catalog',
    text: 'Каталог',
    icon: faBookOpen
  },
  {
    to: '/department',
    text: 'Отдел ДиА',
    icon: faGraduationCap
  },
  {
    to: '/contacts',
    text: 'Контакты',
    icon: faEnvelope
  },
]

export const NavBar = () => {
  const {pathname} = useLocation()
  const [activeLinkBtn, setActiveLinkBtn] = useState(pathname)

  return (
    <HStack className={cls.navbar}>
      <HStack justify={'between'} gap={'32'} className={'container'}>
        <Input placeholder={'Поиск по сайту...'} icon={faMagnifyingGlass}/>
        <HStack gap={'16'}>
          {linkButtons.map((item) =>
            <NavBarLinkButton
              to={item.to}
              key={item.to}
              icon={item.icon}
              text={item.text}
              active={item.to === activeLinkBtn}
              onClick={() => setActiveLinkBtn(item.to)}
            />
          )}
        </HStack>
      </HStack>
    </HStack>
  );
};
