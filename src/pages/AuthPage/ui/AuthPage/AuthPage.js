import {Portal} from "../../../../shared/ui/Portal/Portal";
import {VStack} from "../../../../shared";
import cls from './AuthPage.module.scss'
import {RegisterForm} from "../RegisterForm/RegisterForm";
import React, {useState} from "react";
import {LoginForm} from "../LoginForm/LoginForm";
import {useNavigate} from "react-router-dom";
import {AuthHeader} from "../AuthHeader/AuthHeader";
import {AuthFooter} from "../AuthFooter/AuthFooter";

const AuthPage = () => {
  const [activeTab, setActiveTab] = useState('login')

  const navigate = useNavigate()

  const onLogin = () => setActiveTab('login')
  const onRegister = () => setActiveTab('register')

  const goBack = () => navigate(-1)


  return (
    <Portal>
      <div className={cls.authPage}>
        <VStack gap={'16'}>
          <AuthHeader activeTab={activeTab} onRegister={onRegister} onLogin={onLogin} goBack={goBack}/>
          {activeTab === 'login' ? <LoginForm/> : <RegisterForm/>}
          <AuthFooter/>
        </VStack>
      </div>
    </Portal>
  )
}

export default AuthPage
