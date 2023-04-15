import React, {memo} from 'react';
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

import cls from './NavBarLinkButton.module.scss'
import {classNames, Text, VStack} from "../../../../shared";
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
  return (
    <Link to={to} onClick={onClick} className={classNames(cls.navBarLink, {[cls.active]: active}, [className])}>
      <VStack align={'center'}>
        <FontAwesomeIcon icon={icon} className={cls.icon}/>
        <Text text={text} className={cls.text}/>
      </VStack>
    </Link>
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
