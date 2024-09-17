import { useEffect, useState } from 'react'
import { getTranslation } from '@/localization'
import { LanguageCode, Namespaces } from '@/localization/enums'
import { ISiteContext } from "@/interfaces";

export interface IContactData {
  title: string
  intro: string
}

interface ContactModuleProps {
  context: ISiteContext;
  content: IContactData;
}

const ContactModule = ({ context, content }: ContactModuleProps) => {
  return (
    <section>
      <h1>{content.title}</h1>
      <p>{content.intro}</p>
    </section>
  )
}

export default ContactModule