import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    lng: 'mr', // set default language to Marathi
    fallbackLng: 'en', // fallback language if translation for selected language is unavailable
    resources: {
      mr: {
        translation: {
          // your Marathi translations here
        },
      },
      // Add translations for other languages if needed
      // Example:
      // en: {
      //   translation: {
      //     // your English translations here
      //   },
      // },
    },
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
