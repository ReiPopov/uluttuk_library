import React from 'react';
import {classNames} from "../../../lib/classNames/classNames";
import './Flex.scss'
import PropTypes from "prop-types";

const justifyClasses = {
  start: 'justifyStart',
  end: 'justifyEnd',
  center: 'justifyCenter',
  between: 'justifyBetween'
}

const alignClasses = {
  start: 'alignStart',
  end: 'alignEnd',
  center: 'alignCenter'
}

const directionClasses = {
  row: 'directionRow',
  column: 'directionColumn'
}

const gapClasses = {
  4: 'gap4',
  8: 'gap8',
  16: 'gap16',
  32: 'gap32'
}

export const Flex = (props) => {
  const {
    children,
    className,
    justify = 'start',
    align = 'center',
    direction = 'row',
    gap,
    max
  } = props

  const classes = [
    className,
    directionClasses[direction],
    justifyClasses[justify],
    alignClasses[align],
    gap && gapClasses[gap]
  ]

  return (
    <div className={classNames('flex', {max}, classes)}>
      {children}
    </div>
  );
};

console.log(Object.keys(justifyClasses))

Flex.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  justify: PropTypes.oneOf(['start', 'center', 'end', 'between']),
  align: PropTypes.oneOf(['start', 'center', 'end']),
  direction: PropTypes.oneOf(['row', 'column']),
  gap: PropTypes.oneOf(['4', '8', '16', '32']),
  max: PropTypes.bool
};
