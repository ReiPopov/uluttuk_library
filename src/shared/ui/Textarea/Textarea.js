import PropTypes from "prop-types";
import cls from './Textarea.module.scss'
import {classNames} from "../../lib/classNames/classNames";

export const Textarea = (props) => {
  const {placeholder, className, variant, rows = 5, ...rest} = props
  return (
    <div className={classNames(cls.textareaWrapper, {},[className])}>
      <textarea
        {...rest}
        rows={rows}
        placeholder={placeholder}
        className={classNames(cls.textarea, {}, [cls[variant]])}
      />
    </div>
  )
}

Textarea.propTypes = {
  placeholder: PropTypes.string,
  rows: PropTypes.number,
  variant: PropTypes.oneOf(['background', 'primary']),
  className: PropTypes.string
}
