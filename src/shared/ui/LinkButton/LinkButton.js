import {AppLink} from "../AppLink/AppLink";
import PropTypes from "prop-types";
import {classNames} from "../../lib/classNames/classNames";
import cls from "./LinkButton.module.scss";

export const LinkButton = (props) => {
  const {children, className, variant = 'clear', size = 'size_m', to} = props
  return (
    <AppLink
      to={to}
      className={classNames(cls.linkButton, {}, [className, cls[variant], cls[size]])}
    >
      {children}
    </AppLink>
  )
}

LinkButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['clear', 'outline']),
  size: PropTypes.oneOf(['size_m', 'size_l', 'size_s']),
  to: PropTypes.string
}
