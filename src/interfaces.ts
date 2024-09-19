import { LanguageCode } from "@/localization/enums"

export interface ISiteContext {
  locale: LanguageCode
  pathname: string
  hasMultipleLocales: boolean
}