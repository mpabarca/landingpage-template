"use client"
import { useEffect, useState } from 'react'
import { getTranslation } from '@/localization'
import { LanguageCode, Namespaces } from '@/localization/enum'
import { ISiteContext } from "@/interfaces";

export interface IAboutData {
  title: string
  description: string
}

interface AboutModuleProps {
  context: ISiteContext;
}

const AboutModule = ({ context }: AboutModuleProps) => {
  const { locale } = context; 
  const [aboutData, setAboutData] = useState<IAboutData | null>(null)

  useEffect(() => {
    const fetchTranslations = async () => {
      const translations = await getTranslation(locale, Namespaces.ABOUT)
      setAboutData(translations as IAboutData)
    }

    fetchTranslations()
  }, [locale])

  if (!aboutData) {
    return <div>Loading...</div>
  }

  return (
    <section>
      <h1>{aboutData.title}</h1>
      <p>{aboutData.description}</p>
    </section>
  )
}

export default AboutModule