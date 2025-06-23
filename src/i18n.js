import i18next from 'i18next';

import enTranslation from './locales/en.json';
import arTranslation from './locales/ar.json';
import { initReactI18next } from 'react-i18next';

i18next.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    ar: { translation: arTranslation }
  },
  lng: 'ar', 
  fallbackLng: 'ar', 
  interpolation: {
    escapeValue: false, 
  }
});

export default i18next;
