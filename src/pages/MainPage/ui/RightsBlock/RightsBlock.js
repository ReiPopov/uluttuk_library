import cls from './RightsBlock.module.scss'
import {classNames, HStack, Text, VStack} from "../../../../shared";
import StudentIcon from '../../../../shared/assets/icons/student_icon.png'
import {useTranslation} from "react-i18next";

const text1 = 'main_page_right_text1'
const text2 = 'main_page_right_text2'
const text3 = 'main_page_right_text3'
const text4 = 'main_page_right_text4'
const text5 = 'main_page_right_text5'

const texts = [
  text1,
  text2,
  text3,
  text4,
  text5,
]

export const RightsBlock = () => {
  const {t} = useTranslation()
  return (
    <div className={'container'}>
      <div className={classNames('container', {}, [cls.rightsBlock])}>
        <Text size={'size_l'} align={'center'} title={t('main_page_rights_title')}/>
        <HStack className={cls.infoBlock}>
          <VStack gap={'32'}>
            {texts.map((text, index) => (
              <Text key={index} size={'size_l'} text={t(text)} className={cls.text}/>
            ))}
          </VStack>
          <img src={StudentIcon} alt={'book'} className={cls.image}/>
        </HStack>
      </div>
    </div>
  );
};
