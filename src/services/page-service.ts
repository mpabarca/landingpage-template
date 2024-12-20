import { getTranslation } from '@/localization';
import { LanguageCode, Namespaces } from '@/localization/enums';

export interface PageContent {
  [key: string]: any;
}

export async function getPageContent(
  locale: LanguageCode,
  namespaces: Namespaces[]
): Promise<PageContent> {
  const validNamespaces = namespaces.filter((ns) => Object.values(Namespaces).includes(ns as Namespaces));

  const content: Record<string, any> = {};
  for (const namespace of validNamespaces) {
    content[namespace] = await getTranslation(locale, namespace as Namespaces);
  }
  return content;
}
