import {Button, classNames, HStack} from "../../../../shared";
import cls from "../AuthPage/AuthPage.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import PropTypes from "prop-types";

export const AuthHeader = (props) => {
  const {
    onLogin,
    activeTab,
    onRegister,
    goBack,
  } = props

  return (
    <HStack justify={'between'} max>
      <HStack gap={'16'}>
        <Button
          onClick={onLogin}
          className={classNames('', {[cls.tabButton]: activeTab === 'login'})}
        >
          Вход
        </Button>
        <Button
          onClick={onRegister}
          className={classNames('', {[cls.tabButton]: activeTab === 'register'})}
        >
          Регистрация
        </Button>
      </HStack>
      <Button onClick={goBack}>
        <FontAwesomeIcon size={"lg"} icon={faXmark}/>
      </Button>
    </HStack>
  )
}

AuthHeader.propTypes = {
  onLogin: PropTypes.func,
  activeTab: PropTypes.oneOf(['register', 'login']),
  onRegister: PropTypes.func,
  goBack: PropTypes.func,
}
