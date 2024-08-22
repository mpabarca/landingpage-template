"use client"
import { useEffect, useState } from 'react';
import { getTranslation } from '@/localization';
import { Namespaces } from '@/localization/enum';
import { ISiteContext } from "@/interfaces";
import styles from './Home.module.css';

export interface IHomeData {
  title: string;
  welcomeMessage: string;
  intro: string;
}

interface HomeModuleProps {
  context: ISiteContext;
}

const HomeModule = ({ context }: HomeModuleProps) => {
  const { locale } = context; 
  const [homeData, setHomeData] = useState<IHomeData | null>(null);

  const fetchTranslations = async () => {
    const translations = await getTranslation(locale, Namespaces.HOME);
    setHomeData(translations);
  };

  useEffect(() => {
    fetchTranslations();
  }, [locale]);

  if (!homeData) {
    return <div>Loading...</div>;
  }

  return (
    <section>
      <h1>{homeData.title}</h1>
      <p>{homeData.welcomeMessage}</p>
      <p>{homeData.intro}</p>
    </section>
  );
};

export default HomeModule;