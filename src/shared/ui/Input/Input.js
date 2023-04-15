import React from 'react';

import cls from './Input.module.scss'
import PropTypes from "prop-types";
import {classNames} from "../../lib/classNames/classNames";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";

export const Input = (props) => {
  const {placeholder, className} = props
  return (
    <div className={cls.inputWrapper}>
      <input
        className={classNames(cls.input, {}, [className])}
        placeholder={placeholder}
      />
      {/*<FontAwesomeIcon icon={faMagnifyingGlass} className={cls.icon}/>*/}
    </div>
  );
};

Input.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string
}

