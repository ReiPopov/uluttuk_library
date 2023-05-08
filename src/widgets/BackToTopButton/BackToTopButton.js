import {Button} from "../../shared";
import cls from './BackToTopButton.module.scss'
import {faChevronUp} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useCallback, useEffect, useState} from "react";

export const BackToTopButton = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    })
  }, [])

  const scrollToUp = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [])

  if (!visible) {
    return null
  }

  return (
    <Button className={cls.button} onClick={scrollToUp}>
      <FontAwesomeIcon icon={faChevronUp}/>
    </Button>
  )
}
