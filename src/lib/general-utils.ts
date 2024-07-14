import { BooleanString, CustomHeaders, Locales } from "@/enums"
import { ISiteContext } from "@/interfaces";
import { headers } from "next/headers"

export const getSiteContext = (): ISiteContext => {
  const header = headers();
  const selectedLocale = header.get("x-selected-locale") || Locales.en
  console.log('selectedLocale', selectedLocale)

  return {
    locale: (header.get(CustomHeaders.Locale) || Locales.en) as Locales,
    pathname: header.get(CustomHeaders.Pathname) || "",
    hasMultipleLocales: header.get(CustomHeaders.HasMultipleLocales) == BooleanString.yes,
  }
}