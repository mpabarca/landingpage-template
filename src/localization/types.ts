import { LanguageCode, Namespaces } from "./enums";

export interface LocalizationNamespace {
  [key: string]: string;
}

export type Localization = {
  [K in keyof typeof Namespaces]: LocalizationNamespace;
}

export interface Locales {
  [LanguageCode.en]: Localization;
  [LanguageCode.es]: Localization;
}