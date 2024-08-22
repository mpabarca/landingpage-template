"use client"
import { useEffect, useState } from 'react'
import { getTranslation } from '@/localization'
import { LanguageCode, Namespaces } from '@/localization/enum'
import { ISiteContext } from "@/interfaces";

export interface IContactData {
  title: string
  intro: string
}

interface ContactModuleProps {
  context: ISiteContext;
}

const ContactModule = ({ context }: ContactModuleProps) => {
  const { locale } = context; 
  const [contactData, setContactData] = useState<IContactData | null>(null)

  useEffect(() => {
    const fetchTranslations = async () => {
      const translations = await getTranslation(locale, Namespaces.CONTACT)
      setContactData(translations as IContactData)
    }

    fetchTranslations()
  }, [locale])

  if (!contactData) {
    return <div>Loading...</div>
  }

  return (
    <section>
      <h1>{contactData.title}</h1>
      <p>{contactData.intro}</p>
    </section>
  )
}

export default ContactModule