import {Button, Checkbox, Input, VStack} from "../../../../shared";
import cls from './LoginForm.module.scss'

export const LoginForm = () => {

  return (
    <form>
      <VStack gap={"16"} className={cls.login_form}>
        <Input required type={'email'} placeholder={'Введите Email'} className={cls.input}/>
        <Input required type={'password'} placeholder={'Введите пароль'} className={cls.input}/>
        <Checkbox label={'Запомнить меня'} size={20}/>
        <Button className={cls.login_btn} variant={'outline'}>ВОЙТИ</Button>
      </VStack>
    </form>
  )
}
