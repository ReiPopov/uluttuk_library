import {memo} from 'react'
import PropTypes from "prop-types";
import {classNames} from "../../lib/classNames/classNames";
import cls from './Text.module.scss'

const mapSizeToHeaderTag = {
  'size_s': 'h3',
  'size_m': 'h2',
  'size_l': 'h3'
}

export const Text = memo(function Text(props) {
  const {
    className,
    text,
    title,
    align = 'left',
    size = 'size_m'
  } = props

  const additional = [className, cls[align], cls[size]]

  const HeaderTag = mapSizeToHeaderTag[size]

  return (
    <div className={classNames('', {}, additional)}>
      {title && <HeaderTag className={cls.title}>{title}</HeaderTag>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  )
})

Text.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  title: PropTypes.string,
  align: PropTypes.oneOf(['right', 'left', 'center']),
  size: PropTypes.oneOf(['size_s', 'size_m', 'size_l']),
}
