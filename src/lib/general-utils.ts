import { BooleanString, CustomHeaders } from "@/enums"
import { ISiteContext } from "@/interfaces";
import { LanguageCode } from "@/localization/enums";
import { headers } from "next/headers"

export const getSiteContext = (): ISiteContext => {
  const header = headers();
  const selectedLocale = header.get("x-selected-locale") || LanguageCode.en
  console.log('selectedLocale', selectedLocale)

  return {
    locale: (header.get(CustomHeaders.Locale) || LanguageCode.en) as LanguageCode,
    pathname: header.get(CustomHeaders.Pathname) || "",
    hasMultipleLocales: header.get(CustomHeaders.HasMultipleLocales) == BooleanString.yes,
  }
}