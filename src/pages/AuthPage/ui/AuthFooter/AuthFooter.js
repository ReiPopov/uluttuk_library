import {HStack, Text, VStack} from "../../../../shared";
import Facebook from "../../../../shared/assets/icons/facebook.svg";
import Inst from "../../../../shared/assets/icons/instagram.svg";
import Vk from "../../../../shared/assets/icons/vk.svg";

import cls from './AuthFooter.module.scss'


export const AuthFooter = () => {
  return (
    <VStack max align={'center'} gap={'16'}>
      <Text color={'white'} text={'Авторизация через социальные сети'}/>
      <HStack gap={'4'}>
        <img src={Facebook} alt="facebook" className={cls.icon}/>
        <img src={Inst} alt="instagram" className={cls.icon}/>
        <img src={Vk} alt="vk" className={cls.icon}/>
      </HStack>
    </VStack>
  )
}
