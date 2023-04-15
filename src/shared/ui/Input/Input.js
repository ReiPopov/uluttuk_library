import React from 'react';

import cls from './Input.module.scss'
import PropTypes from "prop-types";
import {classNames} from "../../lib/classNames/classNames";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const Input = (props) => {
  const {placeholder, className, icon} = props
  return (
    <div className={classNames(cls.inputWrapper, {}, [className])}>
      <input
        className={classNames(cls.input, {}, [])}
        placeholder={placeholder}
      />
      {icon && <FontAwesomeIcon icon={icon} className={cls.icon}/>}
    </div>
  );
};

Input.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  icon: PropTypes.object
}

