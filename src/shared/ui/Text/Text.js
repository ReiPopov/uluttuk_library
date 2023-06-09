import {memo} from 'react'
import PropTypes from "prop-types";
import {classNames} from "../../lib/classNames/classNames";
import cls from './Text.module.scss'

export const Text = memo(function Text(props) {
  const {
    className,
    text,
    title,
    align = 'left',
    size = 'size_m',
    color = 'black',
    fontWeight = 'normal',
    headerCategory = 'h3',
    ...rest
  } = props

  const additional = [className, cls[align], cls[size], cls[fontWeight]]

  const HeaderTag = headerCategory

  return (
    <div {...rest} style={{color}} className={classNames('', {}, additional)}>
      {title && <HeaderTag style={{fontWeight}} className={cls.title}>{title}</HeaderTag>}
      {text && <p style={{fontWeight}} className={cls.text}>{text}</p>}
    </div>
  )
})

Text.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  title: PropTypes.string,
  customSize: PropTypes.number,
  align: PropTypes.oneOf(['right', 'left', 'center']),
  size: PropTypes.oneOf(['size_s', 'size_m', 'size_l', 'size_xs', 'size_xl']),
  color: PropTypes.oneOf(['white', 'black']),
  fontWeight: PropTypes.oneOf(['normal', 'bold']),
  headerCategory: PropTypes.oneOf(['h1', 'h2', 'h3'])
}
