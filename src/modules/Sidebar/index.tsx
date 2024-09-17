"use client"
import { useEffect, useState } from 'react'
import { getTranslation } from '@/localization'
import { Namespaces } from '@/localization/enum'
import { ISiteContext } from "@/interfaces";
import LanguageToggle from "@/components/language-toggle";
import { DisplayModeToggle } from "@/components/display-mode-toggle";
import { useRouter } from 'next/router'

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
  styles: string;
}

const Sidebar = ({ context, styles }: SidebarProps) => {
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
    <nav className={`w-full h-screen p-4 bg-gray-50 dark:bg-gray-900 flex flex-col gap-1 justify-center ${styles}`}>
      <ul>
        <li>{sidebarData.menuItems.home}</li>
        <li>{sidebarData.menuItems.about}</li>
        <li>{sidebarData.menuItems.blog}</li>
        <li>{sidebarData.menuItems.contact}</li>
      </ul>
      <DisplayModeToggle />
      <LanguageToggle context={context} />

    </nav>
  )
}

export default Sidebar