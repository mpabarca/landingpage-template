export interface LocalizationNamespace {
  [key: string]: string;
}

export interface Localization {
  home: LocalizationNamespace;
  about: LocalizationNamespace;
  blog: LocalizationNamespace;
  contact: LocalizationNamespace;
  sidebar: LocalizationNamespace;
}

export interface Locales {
  en: Localization;
  es: Localization;
}