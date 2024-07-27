import { Locales, Localization } from '../types/localization';

const translations: Locales = {
  en: {
    home: require('../locales/en/home.json'),
    about: require('../locales/en/about.json'),
    blog: require('../locales/en/blog.json'),
    contact: require('../locales/en/contact.json'),
    sidebar: require('../locales/en/sidebar.json'),
  },
  es: {
    home: require('../locales/es/home.json'),
    about: require('../locales/es/about.json'),
    blog: require('../locales/es/blog.json'),
    contact: require('../locales/es/contact.json'),
    sidebar: require('../locales/es/sidebar.json'),
  },
};

export const getTranslation = (
  locale: keyof Locales,
  namespace: keyof Localization,
  key: string
): string => {
  return translations[locale][namespace][key] || key;
};