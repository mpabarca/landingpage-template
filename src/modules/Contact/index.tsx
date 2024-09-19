import { useEffect, useState } from 'react'
import { getTranslation } from '@/localization'
import { LanguageCode, Namespaces } from '@/localization/enums'
import { ISiteContext } from "@/interfaces";

export interface IContactData {
  title: string
  intro: string
}

interface ContactModuleProps {
  id: string;
  context: ISiteContext;
  content: IContactData;
}

const ContactModule = ({ id, context, content }: ContactModuleProps) => {
  return (
    <section id={id} className="w-full h-screen p-8 flex flex-col items-start justify-center bg-gray-100 dark:bg-gray-500">
      <h1>{content.title}</h1>
      <p>{content.intro}</p>
    </section>
  )
}

export default ContactModule