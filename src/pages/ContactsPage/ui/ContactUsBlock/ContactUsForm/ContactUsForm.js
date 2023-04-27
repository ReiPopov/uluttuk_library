import cls from './ContactUsForm.module.scss'
import {Button, Input, VStack} from "../../../../../shared";
import {Textarea} from "../../../../../shared/ui/Textarea/Textarea";
import {useState} from "react";

export const ContactUsForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const onSubmit = (e) => {
    e.preventDefault()
    setName('')
    setEmail('')
    setMessage('')
    alert('Ваше сообщение успешно отправлено!')
  }

  return (
    <form className={cls.form} onSubmit={onSubmit}>
      <VStack gap={'16'} className={cls.inputsWrapper}>
        <Input value={name} onChange={(event) => setName(event.target.value)} required variant={'background'}
               placeholder={'Ваше имя'} className={cls.input}/>
        <Input value={email} onChange={(event) => setEmail(event.target.value)} required type={'email'}
               variant={'background'} placeholder={'Введите Email'} className={cls.input}/>
        <Textarea value={message} onChange={(event) => setMessage(event.target.value)} required variant={'background'}
                  placeholder={'Сообщение'} className={cls.textarea}/>
        <Button variant={'outline'}>Отправить</Button>
      </VStack>
    </form>
  )
}
