import cls from './DissertationBlock.module.scss'
import {HStack, Text, VStack} from "../../../../shared";
import BookIcon from '../../../../shared/assets/icons/book_icon.png'
import {useTranslation} from "react-i18next";

const text1 = 'main_page_dissertation_text1'
const text2 = 'main_page_dissertation_text2'
const text3 = 'main_page_dissertation_text3'

const texts = [text1, text2, text3]

export const DissertationBlock = () => {
  const {t} = useTranslation()
  return (
    <div className={'container'}>
      <div className={cls.dissertationBlock}>
        <Text size={'size_l'} align={'center'} title={t('main_page_dissertation_title')}/>
        <HStack className={cls.infoBlock}>
          <VStack gap={'32'}>
            {texts.map((text, index) => (
              <Text key={index} size={'size_l'} text={t(text)} className={cls.text}/>
            ))}
          </VStack>
          <img src={BookIcon} alt={'book'} className={cls.image}/>
        </HStack>
      </div>
    </div>
  );
};
