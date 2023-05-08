import React from 'react';
import cls from './Footer.module.scss'
import {AppLink, HStack, Text, useWindowDimensions, VStack} from "../../shared";
import Logo from '../../shared/assets/icons/footer_logo.png'
import Inst from '../../shared/assets/icons/instagram.svg'
import Facebook from '../../shared/assets/icons/facebook.svg'
import Vk from '../../shared/assets/icons/vk.svg'
import {Flex} from "../../shared/ui/Stack/Flex/Flex";
import {useTranslation} from "react-i18next";

const currentYear = new Date().getFullYear()

export const Footer = () => {
  const {isSmallScreen} = useWindowDimensions()
  const {t} = useTranslation()

  return (
    <footer className={cls.footer}>
      <div className={'container'}>
        <Flex justify={'center'} direction={isSmallScreen ? 'column' : 'row'} align={isSmallScreen ? 'center' : 'start'}
              gap={'32'}>
          <VStack align={isSmallScreen ? 'center' : 'start'}>
            <Text color={'white'} size={'size_l'} title={t('about_library')} className={cls.title}/>
            <VStack gap={'16'} align={isSmallScreen ? 'center' : 'start'} max>
              <AppLink to={'/about'} className={cls.link}>
                <Text
                  align={isSmallScreen ? 'center' : 'left'}
                  color={'white'}
                  size={'size_l'}
                  text={t('history_of_library')}
                />
              </AppLink>
              <AppLink to={'/department'} className={cls.link}>
                <Text
                  align={isSmallScreen ? 'center' : 'left'}
                  color={'white'}
                  size={'size_l'}
                  text={t('department_oda')}
                />
              </AppLink>
              <AppLink to={'/catalog'} className={cls.link}>
                <Text
                  align={isSmallScreen ? 'center' : 'left'}
                  color={'white'} size={'size_l'}
                  text={t('catalog_of_dissertations_and_abstracts')}
                />
              </AppLink>
              <AppLink to={'/'} className={cls.link}>
                <Text
                  align={isSmallScreen ? 'center' : 'left'}
                  color={'white'}
                  size={'size_l'}
                  text={t('news')}
                />
              </AppLink>
            </VStack>
          </VStack>
          <VStack align={'center'}>
            <img src={Logo} alt="footer_logo" className={cls.logo}/>
            <HStack max justify={'center'} gap={'8'}>
              <AppLink scrollToTop={false} target={'_blank'} to={'https://ru-ru.facebook.com/libkr/'}>
                <img src={Facebook} alt="facebook" className={cls.icon}/>
              </AppLink>
              <AppLink scrollToTop={false} target={'_blank'} to={'https://www.instagram.com/nationallibrary.kg/?hl=ru'}>
                <img src={Inst} alt="instagram" className={cls.icon}/>
              </AppLink>
              <AppLink scrollToTop={false} target={'_blank'} to={'https://www.vk.com'}>
                <img src={Vk} alt="vk" className={cls.icon}/>
              </AppLink>
            </HStack>
          </VStack>
          <VStack align={isSmallScreen ? 'center' : 'end'}>
            <Text color={'white'} size={'size_l'} title={t('contacts')} className={cls.title}/>
            <VStack gap={'16'} align={isSmallScreen ? 'center' : 'end'}>
              <Text align={isSmallScreen ? 'center' : 'right'} color={'white'} title={`${t('address')}:`}
                    text={`${t('country_city')}, ${t('street')}`}/>
              <AppLink scrollToTop={false} to={'mailto:library@nlkr.gov.kg'} className={cls.link}>
                <Text
                  align={isSmallScreen ? 'center' : 'right'} color={'white'}
                  title={'Email:'}
                  text={'library@nlkr.gov.kg'}
                />
              </AppLink>
              <AppLink scrollToTop={false} to={'tel:+996(312)304675'} className={cls.link}>
                <Text
                  align={isSmallScreen ? 'center' : 'right'}
                  color={'white'}
                  title={`${t('phone')}:`}
                  text={'+996 (312) 30-46-75'}
                />
              </AppLink>
              <AppLink scrollToTop={false} to={'tel:+996(312)304688'} className={cls.link}>
                <Text
                  align={isSmallScreen ? 'center' : 'right'}
                  color={'white'}
                  title={`${t('fax')}:`}
                  text={'+996 (312) 30-46-88'}
                />
              </AppLink>

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
            text={t('footer_copyright_text1')}
          />
          <Text
            size={'size_l'}
            className={cls.footer_copyright_text}
            align={'center'}
            color={'white'}
            text={`©️${currentYear} ${t('footer_copyright_text2')}`}
          />
        </div>
      </div>
    </footer>
  );
};
