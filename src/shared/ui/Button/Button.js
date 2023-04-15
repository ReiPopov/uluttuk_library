import {memo} from "react";
import PropTypes from "prop-types";
import {classNames} from "../../lib/classNames/classNames";

import cls from './Button.module.scss'

export const Button = memo(function Button(props) {
  const {children, className, variant = 'clear', size = 'size_m'} = props
  return (
    <button
      className={classNames(cls.button, {}, [className, cls[variant], cls[size]])}
    >
      {children}
    </button>
  )
})


Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['clear', 'outline']),
  size: PropTypes.oneOf(['size_m', 'size_l', 'size_s'])
}
