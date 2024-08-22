import { LocalizationNamespace } from './types';
import { LanguageCode, Namespaces } from './enum';

const importLocale = async (locale: LanguageCode, namespace: Namespaces) => {
  try {
    console.log('importLocale - locale', locale)
    console.log('importLocale - namespace', namespace)

    const module = await import(`./${locale}/${namespace}`)
    console.log('importLocale - typeof module', typeof module)
    console.log('importLocale - module', module[namespace])

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
  console.log('getTranslation - locale', locale)
  console.log('getTranslation - namespace', namespace)

  const translation = await importLocale(locale, namespace);
  console.log('getTranslation - translation', translation)
  return translation;
};