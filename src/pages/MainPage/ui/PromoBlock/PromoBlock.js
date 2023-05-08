import cls from './PromoBlock.module.scss'
import {Text, VStack} from "../../../../shared";
import {useTranslation} from "react-i18next";

const title = 'main_page_promo_title'
const text = 'main_page_promo_text'

export const PromoBlock = () => {
  const {t} = useTranslation()
  return (
    <div className={cls.promo}>
      <VStack max justify={'center'} className={'container'}>
        <VStack gap={'8'} className={cls.content}>
          <Text color={'white'} size={'size_l'} headerCategory={'h1'} title={t(title)}/>
          <Text color={'white'} size={'size_l'} text={t(text)} className={cls.text}/>
        </VStack>
      </VStack>
    </div>
  );
};
