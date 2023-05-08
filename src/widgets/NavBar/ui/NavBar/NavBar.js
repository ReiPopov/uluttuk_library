import React, {useState} from 'react';
import cls from './NavBar.module.scss'
import {HStack} from "../../../../shared";
import {faBookOpen, faBuildingColumns, faEnvelope, faGraduationCap, faHouse} from "@fortawesome/free-solid-svg-icons";
import {NavBarLinkButton} from "../NavBarButton/NavBarLinkButton";
import {useLocation} from "react-router-dom";
import {CatalogSearchInput} from "../../../../features";

const linkButtons = [
  {
    to: '/',
    text: 'main',
    icon: faHouse
  },
  {
    to: '/about',
    text: 'about',
    icon: faBuildingColumns
  },
  {
    to: '/catalog',
    text: 'catalog',
    icon: faBookOpen
  },
  {
    to: '/department',
    text: 'department',
    icon: faGraduationCap
  },
  {
    to: '/contacts',
    text: 'contacts',
    icon: faEnvelope
  },
]

export const NavBar = () => {
  const {pathname} = useLocation()
  const [activeLinkBtn, setActiveLinkBtn] = useState(pathname)

  return (
    <HStack className={cls.navbar}>
      <HStack justify={'between'} gap={'32'} className={'container'}>
        <CatalogSearchInput/>
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
