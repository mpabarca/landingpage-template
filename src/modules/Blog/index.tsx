"use client"
import { useEffect, useState } from 'react'
import { getTranslation } from '@/localization'
import { LanguageCode, Namespaces } from '@/localization/enum'
import { ISiteContext } from "@/interfaces";

export interface IBlogData {
  title: string
  intro: string
}

interface BlogModuleProps {
  context: ISiteContext;
}

const BlogModule = ({ context }: BlogModuleProps) => {
  const { locale } = context; 
  const [blogData, setBlogData] = useState<IBlogData | null>(null)

  useEffect(() => {
    const fetchTranslations = async () => {
      const translations = await getTranslation(locale, Namespaces.BLOG)
      setBlogData(translations as IBlogData)
    }

    fetchTranslations()
  }, [locale])

  if (!blogData) {
    return <div>Loading...</div>
  }

  return (
    <section>
      <h1>{blogData.title}</h1>
      <p>{blogData.intro}</p>
    </section>
  )
}

export default BlogModule