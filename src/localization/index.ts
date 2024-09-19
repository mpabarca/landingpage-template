import { LocalizationNamespace } from './types';
import { LanguageCode, Namespaces } from './enums';

const importLocale = async (locale: LanguageCode, namespace: Namespaces) => {
  try {
    const module = await import(`./${locale}/${namespace}`)

    return module[namespace]
  } catch (error) {
    console.error(`Error importing ${namespace} for locale ${locale}:`, error);
    return {};
  }
};

export const getTranslation = async (
  locale: LanguageCode,
  namespace: Namespaces
) => {
  const translation = await importLocale(locale, namespace);
  return translation;
};