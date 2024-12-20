import { BooleanString, CustomHeaders } from "@/enums"
import { ISiteContext } from "@/interfaces";
import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from "@/localization/constants";
import { LanguageCode } from "@/localization/enums";
import { headers } from "next/headers"

export const getSiteContext = async (): Promise<ISiteContext> => {
  const header = await headers()

  const selectedLocale = header.get("x-selected-locale") || DEFAULT_LOCALE
  const validatedLocale = SUPPORTED_LOCALES.includes(selectedLocale as LanguageCode)
    ? selectedLocale
    : DEFAULT_LOCALE;

  console.log('selectedLocale', selectedLocale)
  console.log('validatedLocale', validatedLocale)

  return {
    locale: validatedLocale as LanguageCode,
    pathname: header.get(CustomHeaders.Pathname) || "",
    hasMultipleLocales: header.get(CustomHeaders.HasMultipleLocales) == BooleanString.yes,
  }
}