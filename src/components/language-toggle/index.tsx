"use client"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"
import { ISiteContext } from "@/interfaces"
import { DEFAULT_LOCALE } from "@/localization/constants"
import { LanguageCode } from "@/localization/enums"
import Link from "next/link"
import { useEffect, useState } from "react"

interface LanguageToogleProps {
  context: ISiteContext;
}

const LanguageToggle = ({context}: LanguageToogleProps) => {
  const { locale } = context; 

  return (
    <ToggleGroup type="single" variant="outline" value={locale}>
      {Object.values(LanguageCode).map((lang, index) => (
        <Link href={`/${lang}`} hrefLang={lang.toLowerCase()} key={`link-toggle-${index}`}>
          <ToggleGroupItem key={lang} value={lang} aria-label={`Toggle ${lang.toUpperCase()}`}>
            {lang.toUpperCase()}
          </ToggleGroupItem>
        </Link>
      ))}
    </ToggleGroup>
  )
}

export default LanguageToggle
