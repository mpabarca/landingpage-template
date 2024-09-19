import { NextRequest, NextResponse } from "next/server";
import { BooleanString, CustomHeaders } from "./enums";
import parser from "accept-language-parser"
import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from "./localization/constants";
import { LanguageCode } from "./localization/enums";

const getLocale = (request: NextRequest): LanguageCode => {
  let locale: LanguageCode = DEFAULT_LOCALE
  const acceptedLanguages = request.headers.get("Accept-Language") || ""
  if(!locale) locale = parser.pick(SUPPORTED_LOCALES, acceptedLanguages) || DEFAULT_LOCALE
  return locale
} 

export const middleware = (request: NextRequest) => {
  const { pathname } = request.nextUrl
  const response = NextResponse.next()
  const supportedLocales = SUPPORTED_LOCALES

  // Checking if the locale param is missing in the URL
  const pathnameIsMissingLocale = supportedLocales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )
  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    request.nextUrl.pathname = `/${getLocale(request)}`
    return NextResponse.redirect(request.nextUrl)
  }

  let locale = pathname.substring(1, 3) as LanguageCode
  // And If there is only one supported locale, we use it
  if (supportedLocales.length === 1) locale = supportedLocales[0]
  response.headers.set(CustomHeaders.Locale, locale)

  // We should set is the site has multiple language
  const hasMultipleLocale =
  supportedLocales.length > 1 ? BooleanString.yes : BooleanString.no
  response.headers.set(CustomHeaders.HasMultipleLocales, hasMultipleLocale)

  response.headers.set(CustomHeaders.Pathname, pathname)

  return response
} 

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next).*)',
    // Optional: only run on root (/) URL
    // '/'
  ],
}