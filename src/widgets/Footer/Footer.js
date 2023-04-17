import React from 'react';
import cls from './Footer.module.scss'
import {HStack, SMALL_SCREEN, Text, useWindowDimensions, VStack} from "../../shared";
import Logo from '../../shared/assets/icons/footer_logo.png'
import Inst from '../../shared/assets/icons/instagram.svg'
import Facebook from '../../shared/assets/icons/facebook.svg'
import Vk from '../../shared/assets/icons/vk.svg'
import {Flex} from "../../shared/ui/Stack/Flex/Flex";


export const Footer = () => {
  const {width} = useWindowDimensions()

  const isSmallScreen = width > SMALL_SCREEN

  return (
    <footer className={cls.footer}>
      <div className={'container'}>
        <Flex justify={'center'} direction={isSmallScreen ? 'row' : 'column'} align={isSmallScreen ? 'start' : 'center'}
              gap={'32'}>
          <VStack align={isSmallScreen ? 'start' : 'center'}>
            <Text color={'white'} size={'size_l'} title={'О библиотеке'} className={cls.title}/>
            <VStack gap={'16'} align={isSmallScreen ? 'start' : 'center'} max>
              <Text color={'white'} size={'size_l'} text={'История библиотеки'}/>
              <Text color={'white'} size={'size_l'} text={'Отдел ОДА'}/>
              <Text color={'white'} size={'size_l'} text={'Каталог диссертаций и авторефератов'}/>
              <Text color={'white'} size={'size_l'} text={'Новости'}/>
            </VStack>
          </VStack>
          <VStack align={'center'}>
            <img src={Logo} alt="footer_logo" className={cls.logo}/>
            <HStack>
              <img src={Facebook} alt="facebook" className={cls.icon}/>
              <img src={Inst} alt="instagram" className={cls.icon}/>
              <img src={Vk} alt="vk" className={cls.icon}/>
            </HStack>
          </VStack>
          <VStack align={isSmallScreen ? 'end' : 'center'}>
            <Text color={'white'} size={'size_l'} title={'Контакты'} className={cls.title}/>
            <VStack gap={'16'} align={isSmallScreen ? 'end' : 'center'}>
              <Text align={isSmallScreen ? 'right' : 'center'} color={'white'} title={'Адрес:'}
                    text={'Кыргызстан, г. Бишкек, ул. Абдрахманова 208'}/>
              <Text align={isSmallScreen ? 'right' : 'center'} color={'white'} title={'Email:'}
                    text={'library@nlkr.gov.kg'}/>
              <Text align={isSmallScreen ? 'right' : 'center'} color={'white'} title={'Телефон:'}
                    text={'+996 (312) 30-46-75'}/>
              <Text align={isSmallScreen ? 'right' : 'center'} color={'white'} title={'Факс:'}
                    text={'+996 (312) 30-46-88'}/>

            </VStack>
          </VStack>
        </Flex>
      </div>
      <div className={cls.footer_copyright_wrapper}>
        <div className="container">
          <Text
            size={'size_l'}
            className={cls.footer_copyright_text}
            align={'center'}
            color={'white'}
            text={'Отдел диссертаций Национальной Библиотеки Кыргызской Республики имени Алыкула Осмонова'}
          />
          <Text
            size={'size_l'}
            className={cls.footer_copyright_text}
            align={'center'}
            color={'white'}
            text={'©️2023 Все права защищены'}
          />
        </div>
      </div>
    </footer>
  );
};
