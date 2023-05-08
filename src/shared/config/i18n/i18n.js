import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import translationRU from './locales/ru.json'
import translationEN from './locales/en.json'

i18n
  .use(initReactI18next)
  .init({
    lng: 'ru',
    fallbackLng: 'ru',
    returnNull: false,
    resources: {
      ru: {translation: translationRU},
      en: {translation: translationEN},
    },
    keySeparator: false,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    debug: false,
  });


export default i18n;
