"use client"
import { useEffect, useState } from 'react'
import { getTranslation } from '@/localization'
import { LanguageCode, Namespaces } from '@/localization/enum'
import { ISiteContext } from "@/interfaces";

export interface ISidebarData {
  menuItems: {
    home: string
    about: string
    blog: string
    contact: string
  }
}

interface SidebarProps {
  context: ISiteContext;
}

const Sidebar = ({ context }: SidebarProps) => {
  const { locale } = context; 

  const [sidebarData, setSidebarData] = useState<ISidebarData | null>(null)

  useEffect(() => {
    const fetchTranslations = async () => {
      const translations = await getTranslation(locale, Namespaces.SIDEBAR)
      setSidebarData(translations as ISidebarData)
    }
    fetchTranslations()
  }, [locale])


  if (!sidebarData) {
    return <div>Loading...</div>
  }

  return (
    <nav>
      <ul>
        <li>{sidebarData.menuItems.home}</li>
        <li>{sidebarData.menuItems.about}</li>
        <li>{sidebarData.menuItems.blog}</li>
        <li>{sidebarData.menuItems.contact}</li>
      </ul>
    </nav>
  )
}

export default Sidebar