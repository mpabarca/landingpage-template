import { getTranslation } from '@/localization';
import { LanguageCode, Namespaces } from '@/localization/enums';

export interface PageContent {
  [key: string]: any;
}

export async function getPageContent(
  locale: LanguageCode,
  namespaces: Namespaces[]
): Promise<PageContent> {
  const content: PageContent = {};

  // Fetch translations for each namespace
  await Promise.all(
    namespaces.map(async (namespace) => {
      content[namespace] = await getTranslation(locale, namespace);
    })
  );

  return content;
}
