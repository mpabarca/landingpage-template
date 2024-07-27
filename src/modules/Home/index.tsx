import React from 'react';
import { getTranslation } from '@/locales';
import styles from './Home.module.css';
import { ISiteContext } from "@/interfaces";

interface HomeModuleProps {
  context: ISiteContext;
}

const HomeModule = ({ context }: HomeModuleProps) => {
  const { locale } = context; 
  
  return (
    <section className={styles.home}>
      <h1>{getTranslation(locale, 'home', 'welcomeMessage')}</h1>
      <p>{getTranslation(locale, 'home', 'intro')}</p>
    </section>
  );
};

export default HomeModule;