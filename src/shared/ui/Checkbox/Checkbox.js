import cls from './Checkbox.module.scss'
import {classNames} from "../../lib/classNames/classNames";
import PropTypes from "prop-types";
import {Text} from "../Text/Text";
import {HStack} from "../Stack/HStack/HStack";
import {useState} from "react";

export const Checkbox = (props) => {

  const {className, checked, onChange, label, size} = props

  const [isChecked, setIsChecked] = useState(checked || false)

  const toggleChecked = () => setIsChecked(prevState => !prevState)


  return (
    <HStack gap={'8'} onClick={toggleChecked} className={classNames(cls.checkboxWrapper, {}, [className])}>
      <input style={{width: size, height: size}} checked={isChecked} type="checkbox"/>
      {label && <Text
        color={'white'}
        text={label}
      />}
    </HStack>
  )
}

Checkbox.propTypes = {
  className: PropTypes.string,
  checked: PropTypes.bool,
  label: PropTypes.string,
  size: PropTypes.number
}
