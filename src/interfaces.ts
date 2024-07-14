import { Locales } from "./enums"

export interface ISiteContext {
  locale: Locales
  pathname: string
  hasMultipleLocales: boolean
}