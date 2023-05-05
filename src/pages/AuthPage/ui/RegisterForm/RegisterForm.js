import {Button, Input, VStack} from "../../../../shared";
import cls from './RegisterForm.module.scss'

export const RegisterForm = () => {
  return (
    <form>
      <VStack gap={"16"} className={cls.register_form}>
        <Input required type={'email'} placeholder={'Введите Email'} className={cls.input}/>
        <Input required type={'password'} placeholder={'Введите пароль'} className={cls.input}/>
        <Input required type={'password'} placeholder={'Повторите пароль'} className={cls.input}/>
        <Button className={cls.register_btn} variant={'outline'}>РЕГИСТРАЦИЯ</Button>
      </VStack>
    </form>
  )
}
