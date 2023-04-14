import {memo} from "react";
import PropTypes from "prop-types";
import {classNames} from "../../lib/classNames/classNames";

import './Button.scss'

const buttonVariant = {
  'clear': 'clear',
  'outline': 'outline',
}

const buttonSizes = {
  'size_m': 'size_m',
  'size_l': 'size_l',
  'size_s': 'size_s',
}

export const Button = memo(function Button(props) {
  const {children, className, variant = 'clear', size = 'size_m'} = props
  return (
    <button
      className={classNames('', {}, [className, buttonVariant[variant], buttonSizes[size]])}
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
