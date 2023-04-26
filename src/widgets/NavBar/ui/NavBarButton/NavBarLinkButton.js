import React, {memo} from 'react';
import PropTypes from "prop-types";

import cls from './NavBarLinkButton.module.scss'
import {AppLink, classNames, MEDIUM_SCREEN, Text, useWindowDimensions} from "../../../../shared";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const NavBarLinkButton = memo(function NavBarLinkButton(props) {
  const {
    to,
    text,
    className,
    icon,
    onClick,
    active
  } = props
  const {width} = useWindowDimensions()
  return (
    <AppLink to={to} onClick={onClick} className={classNames(cls.navBarLink, {[cls.active]: active}, [className])}>
      <FontAwesomeIcon icon={icon} className={cls.icon}/>
      <Text text={text} size={width > MEDIUM_SCREEN ? 'size_m' : 'size_s'} className={cls.text}/>
    </AppLink>
  );
})

NavBarLinkButton.propTypes = {
  className: PropTypes.string,
  active: PropTypes.bool,
  to: PropTypes.string,
  text: PropTypes.string,
  icon: PropTypes.object,
  onClick: PropTypes.func

}
