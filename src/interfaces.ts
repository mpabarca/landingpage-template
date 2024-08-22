import { LanguageCode } from "@/localization/enum"

export interface ISiteContext {
  locale: LanguageCode
  pathname: string
  hasMultipleLocales: boolean
}