import {Link} from "react-router-dom";
import PropTypes from "prop-types";

import cls from './AppLink.module.scss'
import {classNames} from "../../lib/classNames/classNames";

export const AppLink = (props) => {
  const {children, className, onClick, to} = props

  const _onClick = () => {
    window.scrollTo(0, 0)
    onClick && onClick()
  }

  return (
    <Link to={to} onClick={_onClick} className={classNames(cls.link, {}, [className])}>
      {children}
    </Link>
  )
}

AppLink.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string
}
