import React from 'react';
import {classNames} from "../../../lib/classNames/classNames";
import cls from './Flex.module.scss'
import PropTypes from "prop-types";

const justifyClasses = {
  start: cls.justifyStart,
  end: cls.justifyEnd,
  center: cls.justifyCenter,
  between: cls.justifyBetween
}

const alignClasses = {
  start: cls.alignStart,
  end: cls.alignEnd,
  center: cls.alignCenter
}

const directionClasses = {
  row: cls.directionRow,
  column: cls.directionColumn
}

const gapClasses = {
  4: cls.gap4,
  8: cls.gap8,
  16: cls.gap16,
  32: cls.gap32,
  64: cls.gap64
}

export const Flex = (props) => {
  const {
    children,
    className,
    justify = 'start',
    align = 'center',
    direction = 'row',
    gap,
    max,
    ...rest
  } = props

  const classes = [
    className,
    directionClasses[direction],
    justifyClasses[justify],
    alignClasses[align],
    gap && gapClasses[gap]
  ]

  return (
    <div {...rest} className={classNames(cls.flex, {[cls.max]: max}, classes)}>
      {children}
    </div>
  );
};

Flex.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  justify: PropTypes.oneOf(['start', 'center', 'end', 'between']),
  align: PropTypes.oneOf(['start', 'center', 'end']),
  direction: PropTypes.oneOf(['row', 'column']),
  gap: PropTypes.oneOf(['4', '8', '16', '32', '64']),
  max: PropTypes.bool
};
